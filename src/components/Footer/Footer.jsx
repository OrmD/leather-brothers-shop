import { Image } from "../Router";
import { Floor1 } from "./Floor1";
import { Floor2 } from "./Floor2";
import { Floor3 } from "./Floor3";
export function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__wrapper">
          <Image.FooterImg className="footer__img" />
          <Floor1 />
          <Floor2 />
          <Floor3 />
        </div>
      </footer>
    </>
  );
}
