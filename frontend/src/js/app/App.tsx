import * as React from "react";
import { Header } from "../components/header/header";
import { Breadcrum } from "../components/breadcrum/breadcrum";
// import { ItemDetails } from "../components/itemDetails/itemDetails";
import { ItemsList } from "../components/itemsList/itemsList";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ItemDetails } from "../components/itemDetails/itemDetails";

export function App() {
  return (
    <Router>
      <div className="app">
        <Header></Header>
        <main className="container">
          <Breadcrum
            categories={[
              "Electronica, Audio y Video",
              "iPod",
              "Reproductores",
              "iPod touch",
              "32 GB",
            ]}
          ></Breadcrum>
          <Switch>
            <Route path="/items" component={ItemsList}/>
            <Route path="/items/:id" component={ItemDetails}/>
          </Switch>
        </main>
      </div>
    </Router>
  );
}
