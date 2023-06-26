import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";

import { Route } from "react-router-dom";

import Menu from "./components/Menu/Menu";
import Splash from "./components/Splash/Splash";
import PizzaForm from "./components/PizzaForm/PizzaForm";
import Pizza from "./components/Pizza/Pizza";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Menu />
      {/* Splash */}
      <Route>
        <Splash />
      </Route>
      {/* Pizza Form */}
      <Route>
        <PizzaForm />
      </Route>
      {/* Pizza Result */}
      <Route>
        <Pizza />
      </Route>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
