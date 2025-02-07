import { Link } from "react-router";
import HeaderComponent from "../components/Header/Header";
export function LabelSDS() {
  return (
    <>
	<HeaderComponent />
      <h1>LabelSDS </h1>
      <button type="button">
        <Link to={"/"}>Home</Link>
      </button>
    </>
  );
}
