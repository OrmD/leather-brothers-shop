import { Link } from "react-router";
import HeaderComponent from "../components/Header/Header";

export function Contacts() {
  return (
    <>
	<HeaderComponent />
      <h1>Contacts </h1>
      <button type="button">
        <Link to={"/"}>Home</Link>
      </button>
    </>
  );
}
