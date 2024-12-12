import { ReactElement } from "react";
import { Link } from "react-router-dom";

const Menu = (): ReactElement => {
  return (
    <ul className="nav">
      {/* <li> <Link to="/">Find a transaction</Link> </li> */}
      <li> <Link to="/find">Find a transaction</Link> </li>
      <li> <Link to="/add">New transaction</Link></li>
    </ul>
  );
};
export default Menu;
