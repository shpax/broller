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

import { getData, updateRoller } from "./models/firebase";

const cachedState = cache.getValue("store");
const cachedStore = cachedState ? new Store(cachedState) : null;

function App() {
  const [store, setStore] = useState(cachedStore);
  const roller = store ? store.getRoller() : null;

  useEffect(() => {
    if (cachedStore) {
      const phone = cachedStore.getRoller().phone;
      getData(phone).then((d) => {
        cache.setValue("store", d);

        setStore(new Store(d));
      });
    }
  }, []);

  const onLogin = useCallback(async (data) => {
    const userData = await getData(data.user.phoneNumber);
    cache.setValue("store", userData);
    setStore(new Store(userData));
  }, []);

  const onLogout = useCallback(() => {
    cache.clearValue("store");
    setStore(null);
  }, []);

  const onUpdateProfile = useCallback(
    async (data) => {
      if (roller) {
        const updatedData = await updateRoller(roller.id, data);
        const newStore = store.updateRoller(updatedData);

        setStore(newStore);
      }
    },
    [roller, store]
  );

  return (
    <Router>
      <Header returnTo="/awards" roller={store ? store.getRoller() : null} />

      <Switch>
        <Route exact path="/">
          <Redirect to={{ pathname: store ? "/awards" : "/login" }} />
        </Route>
        <Route exact path="/login">
          {store ? <Redirect to="/awards" /> : <Login onLogin={onLogin} />}
        </Route>
        {store ? (
          <>
            <Route exact path="/awards">
              <Awards
                roller={store.getRoller()}
                levels={store.getMappedAwardsByLevel()}
                currentLevel={store.getCurrentLevel()}
                nextLevel={store.getNextLevel()}
              />
            </Route>
            <Route exact path="/me">
              <Profile
                data={store.getRoller()}
                onLogout={onLogout}
                onUpdate={onUpdateProfile}
              />
            </Route>

            <Route exact path="/awards/:id">
              <AwardInfo
                getAward={(id) => store.getMappedAwardById(id)}
                getLevel={(id) => store.getLevelById(id)}
              />
            </Route>
          </>
        ) : (
          <Redirect to="/login" />
        )}
      </Switch>
    </Router>
  );
}

export default App;
