import * as React from "react";
import { Header } from "../components/header/header";
import { Breadcrum } from "../components/breadcrum/breadcrum";

export function App() {
  return (
    <div className="app">
      <Header></Header>
      <main className="container">
        <Breadcrum  categories={['Electronica, Audio y Video', 'iPod', 'Reproductores', 'iPod touch', '32 GB']}></Breadcrum>
      </main>
    </div>
  );
}
