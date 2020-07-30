import React, { useState, useEffect } from "react";
import Login from "./pages/Login";
import Store from "./store";
import AwardInfo from "./pages/AwardInfo";
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
        {store ? (
          <>
            <Switch>
              <Route exact path="/awards/*">
                <Header returnTo="/awards" roller={store.getRoller()} />
              </Route>
              <Route path="*">
                <Header roller={store.getRoller()} />
              </Route>
            </Switch>
            <Switch>
              <Route exact path="/awards">
                <Awards
                  levels={store.getMappedAwardsByLevel()}
                  currentLevel={store.getCurrentLevel()}
                  nextLevel={store.getNextLevel()}
                />
              </Route>

              <Route exact path="/awards/:id">
                <AwardInfo getAward={(id) => store.getMappedAwardById(id)} />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>

              <Route path="/">
                <Redirect to={{ pathname: "/login" }} />
              </Route>
            </Switch>
          </>
        ) : null}
      </Router>
    </>
  );
}

export default App;
