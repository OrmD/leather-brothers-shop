import { Link } from "react-router";
import HeaderComponent from "../components/Header/Header";

export function AboutUs() {
  return (
    <>
      <HeaderComponent />
      <h1>About Us</h1>
      <button type="button">
        <Link to={"/"}>Home</Link>
      </button>
    </>
  );
}
