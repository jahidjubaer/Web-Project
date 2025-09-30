import { Suspense } from "react";
import "./App.css";
import Bottles from "./components/bottles/bottles";

const bottlePromise = fetch("../public/water-bottle.json").then((res) =>
  res.json()
);

function App() {
  return (
    <>
      <h1>Water bottle</h1>
      <Suspense fallback="bottle is loading ....">
        <Bottles bottlePromise={bottlePromise}></Bottles>
      </Suspense>
    </>
  );
}

export default App;
