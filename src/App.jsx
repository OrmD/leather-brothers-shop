import { useState } from "react";

import { Image } from "./components/Router";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Image.HeaderBg />
      <Image.Category01 />
      <Image.Category02 />
      <Image.Category03 />
      <Image.AboutUsImg />
      <Image.AboutUsBag01 />
      <Image.AboutUsBag02 />
      <Image.FeedbackImg />
      <Image.FeedbackUser />
      <Image.FooterImg />
      <Image.Product01 />
      <Image.Product02 />
      <Image.Product03 />
      <Image.Product04 />
      <Image.VideoPreview />
      <Image.ArrowButton />
      <Image.Facebook />
      <Image.Instagram />
      <Image.LogoText />
      <Image.Quotes />
      <Image.SearchIcon />
      <Image.Transition01 />
      <Image.Twiter />
      <Image.Youtube />
      <Image.VideoPlay />
    </>
  );
}

export default App;
