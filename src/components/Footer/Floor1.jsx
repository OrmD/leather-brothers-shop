import { Image } from "../Router";
export function Floor1(params) {
  return (
    <div className="1-floor ">
      <div className="1-floor-block">
        <h3 className="1-floor-title">
          Subscribe to our <strong>Newsletter</strong>
        </h3>
        <p className="1-floor-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type specimen book.{" "}
        </p>
        <input className="1-floor" placeholder="Input your emaill address in here"></input>
        <Image.ArrowButton />
      </div>
    </div>
  );
}
