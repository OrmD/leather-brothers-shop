import { Link } from "react-router";
import HeaderComponent from "../components/Header/Header";
export function Products() {
  return (
    <>
      <HeaderComponent />
      <h1>Products </h1>
      <button type="button">
        <Link to={"/"}>Home</Link>
      </button>
    </>
  );
}
