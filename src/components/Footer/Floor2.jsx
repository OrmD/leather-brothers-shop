import { useState } from "react";
import { socialIcon } from "../../data/footer-links.js";
import { pagesLinks } from "../../data/footer-links.js";
import { contactInfo } from "../../data/footer-links.js";
import { policiesLinks } from "../../data/footer-links.js";
import { Image } from "../Router";

const iconMap = {
  Facebook: Image.Facebook,
  Instagram: Image.Instagram,
  Youtube: Image.Youtube,
  Twiter: Image.Twiter,
};

export function Floor2(params) {
  const [close, setClose] = useState(false);
  const [closePolice, setClosePolice] = useState(false);
  const [closeContact, setCloseContact] = useState(false);
  return (
    <div className="floor-2">
      <div className="floor-2__block-social">
        <Image.LogoText className="floor-2__logo" />
        <p className="floor-2__text">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
          unknown.
        </p>
        <div className="floor-2__icons">
          {socialIcon.map((el, index) => {
            const IconComponent = iconMap[el.icon];
            return (
              <a key={index} href={el.url}>
                {IconComponent && <IconComponent />}
              </a>
            );
          })}
        </div>
      </div>
      <div className={`floor-2__block-pages menu ${close ? "f-close" : ""}`}>
        <h6 className="floor-2__title" onClick={() => setClose(!close)}>
          Pages
        </h6>
        <ul className="floor-2__list">
          {pagesLinks.map((el, index) => {
            return (
              <li className="floor-2__list-element" key={index}>
                {el.text}
              </li>
            );
          })}
        </ul>
      </div>
      <div className={`floor-2__block-policies menu ${closePolice ? "f-close" : ""}`}>
        <h6 className="floor-2__title" onClick={() => setClosePolice(!closePolice)}>
          Policies
        </h6>
        <ul className="floor-2__list">
          {policiesLinks.map((el, index) => {
            return (
              <li className="floor-2__list-element" key={index}>
                {el.text}
              </li>
            );
          })}
        </ul>
      </div>
      <div className={`floor-2__block-contact-info menu ${closeContact ? "f-close" : ""}`}>
        <h6 className="floor-2__title" onClick={() => setCloseContact(!closeContact)}>
          CONTACT INFO
        </h6>
        <ul className="floor-2__list">
          <li className="floor-2__list-element">
            Address:
            <p>{contactInfo.address}</p>
          </li>
          <li className="floor-2__list-element">
            Email:
            <p>{contactInfo.email}</p>
          </li>
          <li className="floor-2__list-element">
            Customer Support
            <p>{contactInfo.numberPhone}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
