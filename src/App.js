import React, { useState } from "react";
import Login from "./pages/Login";
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

  if (!store)
    // temporary test code
    getData("recKeRRQvLmLlbKpd").then((d) => {
      console.log(d);

      setStore(d);
    });

  return (
    <>
      <Header />

      {store ? (
        <Router>
          <Switch>
            <Route exact path="/awards">
              <Awards />
            </Route>

            <Route exact path="/login">
              <Login />
            </Route>

            <Route path="/">
              <Redirect to={{ pathname: "/login" }} />
            </Route>
          </Switch>
        </Router>
      ) : null}
    </>
  );
}

export default App;
