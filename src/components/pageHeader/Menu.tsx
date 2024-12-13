import { ReactElement, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext, userContextType } from "../../context/context";
//import Demouseref from "../statticPages/Demouserref";

const Menu = (): ReactElement => {
  const userContext =useContext<userContextType>(UserContext)
  return (
    <ul className="nav">
      {/* <li> <Link to="/">Find a transaction</Link> </li> */}
      <li> <Link to="/find">Find a transaction</Link> </li>
      <li> <Link to="/add">New transaction</Link></li>
      {userContext.id ===0 && <li> <Link to="/login">Login</Link></li>}
      {/* <Demouseref/> */}
    </ul>
    
  );
};
export default Menu;
