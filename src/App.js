import React, { useState, useEffect } from "react";
import Login from "./pages/Login";
import Store from "./store";
import AwardInfo from "./pages/AwardInfo";
import Profile from "./pages/Profile";
import "./App.css";
import Header from "./components/Header";
import Awards from "./pages/Awards";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { getData } from "./models/firebase";

function App() {
  const [store, setStore] = useState(null);

  useEffect(() => {
    console.log("getting effect data");
    getData("recKeRRQvLmLlbKpd").then((d) => {
      setStore(new Store(d));
    });
  }, []);

  return (
    <>
      <Router>
        <Header returnTo="/awards" roller={store ? store.getRoller() : null} />

        <Route exact path="/login">
          <Login />
        </Route>

        <Route>
          <Redirect to={{ pathname: store ? "/awards" : "/login" }} />
        </Route>
        {store ? (
          <Switch>
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
              <AwardInfo getAward={(id) => store.getMappedAwardById(id)} />
            </Route>
          </Switch>
        ) : null}
      </Router>
    </>
  );
}

export default App;
