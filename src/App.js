import React, { useState, useEffect, useCallback } from "react";
import Login from "./pages/Login";
import Store from "./store";
import AwardInfo from "./pages/AwardInfo";
import Profile from "./pages/Profile";
import * as cache from "./models/LocalStorageCache";

import Header from "./components/Header";
import Awards from "./pages/Awards";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import "./App.css";
import "@brainhubeu/react-carousel/lib/style.css";

import { getData } from "./models/firebase";

const cachedState = cache.getValue("store");
const cachedStore = cachedState ? new Store(cachedState) : null;

function App() {
  const [store, setStore] = useState(cachedStore);

  useEffect(() => {
    if (cachedStore) {
      const phone = cachedStore.getRoller().phone;
      getData(phone).then((d) => {
        console.log("getting effect data", d);
        cache.setValue("store", d);

        setStore(new Store(d));
      });
    }
  }, []);

  const onLogin = useCallback(async (data) => {
    const userData = await getData(data.user.phoneNumber);
    cache.setValue("store", userData);
    console.log("login user:", userData);
    setStore(new Store(userData));
  }, []);

  return (
    <>
      <Router>
        <Header returnTo="/awards" roller={store ? store.getRoller() : null} />

        <Switch>
          <Route exact path="/">
            <Redirect to={{ pathname: store ? "/awards" : "/login" }} />
          </Route>
          <Route exact path="/login">
            <Login onLogin={onLogin} />
          </Route>
          {store ? (
            <>
              <Route exact path="/awards">
                <Awards
                  levels={store.getMappedAwardsByLevel()}
                  currentLevel={store.getCurrentLevel()}
                  nextLevel={store.getNextLevel()}
                />
              </Route>
              <Route exact path="/me">
                <Profile data={store.getRoller()} />
              </Route>

              <Route exact path="/awards/:id">
                <AwardInfo
                  getAward={(id) => store.getMappedAwardById(id)}
                  getLevel={(id) => store.getLevelById(id)}
                />
              </Route>
            </>
          ) : null}
        </Switch>
      </Router>
    </>
  );
}

export default App;
