import { Link } from "react-router";
import HeaderComponent from "../components/Header/Header";
export function News() {
  return (
    <>
	<HeaderComponent />
      <h1>News </h1>
      <button type="button">
        <Link to={"/"}>Home</Link>
      </button>
    </>
  );
}
