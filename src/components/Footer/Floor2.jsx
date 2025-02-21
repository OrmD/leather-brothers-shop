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
  return (
    <div className="2-floor">
      <div className="2-floor__block-social">
        <Image.LogoText />
        <p className="2-floor__text">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
          unknown.
        </p>
        <div className="2-floor__icons">
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
      <div className="2-floor__block-pages">
        <h6 className="2-floor__title">Pages</h6>
        <ul className="2-floor__list">
          {pagesLinks.map((el, index) => {
            return (
              <li className="2-floor__list-element" key={index}>
                {el.text}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="2-floor__block-policies">
        <h6 className="2-floor__title">Pages</h6>
        <ul className="2-floor__list">
          {policiesLinks.map((el, index) => {
            return (
              <li className="2-floor__list-element" key={index}>
                {el.text}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="2-floor__block-contact-info">
        <h6 className="2-floor__title">Pages</h6>
        <ul className="2-floor__list">
          <li className="2-floor__list-element">{contactInfo.address}</li>
          <li className="2-floor__list-element">{contactInfo.email}</li>
          <li className="2-floor__list-element">{contactInfo.numberPhone}</li>
        </ul>
      </div>
    </div>
  );
}
