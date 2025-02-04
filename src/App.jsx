import { useState } from "react";
import { Image } from "./components/Router";
import viteLogo from "/vite.svg";
import Header from "./components/Header/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="wrapper">
      <Header />
    </div>
  );
}

export default App;
