import { Image } from "../Router";
export function Floor1(params) {
  return (
    <div className="floor-1 ">
      <div className="floor-1__block">
        <h3 className="floor-1__title">
          Subscribe to our <strong>Newsletter</strong>
        </h3>
        <p className="floor-1__text">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type specimen book.{" "}
        </p>
        <div className="floor-1__container-inp">
          <input className="floor-1__input" placeholder="Input your emaill address in here"></input>
          <Image.ArrowButton className="floor-1__button" />
        </div>
      </div>
    </div>
  );
}
