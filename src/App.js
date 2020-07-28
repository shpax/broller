import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Awards from "./pages/Awards";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
            <Route path="/awards">
              <Awards />
            </Route>
          </Switch>
        </Router>
      ) : null}
    </>
  );
}

export default App;
