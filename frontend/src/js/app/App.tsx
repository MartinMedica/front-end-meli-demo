import * as React from "react";
import { Header } from "../components/header/header";
import { ItemDetails } from "../components/itemDetails/itemDetails";
import { ItemsList } from "../components/itemsList/itemsList";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export function App() {
  return (
    <Router>
      <div className="app">
        <Header></Header>
        <main className="container">
          <Switch>
            <Route path="/items/:id" component={ItemDetails}/>
            <Route path="/items" component={ItemsList}/>
          </Switch>
        </main>
      </div>
    </Router>
  );
}
