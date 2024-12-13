import { ReactElement, useContext } from "react";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import { UserContext, userContextType } from "../../context/context";

const PageHeader = (): ReactElement => {
  const userContext =useContext<userContextType>(UserContext);
  const theme =sessionStorage.getItem('them');
  return (
    <div className="pageHeader">
      <h1><Link to="/">Payment Application</Link></h1>
      <Menu />
      {userContext.id !==0 && <p>Current user: {userContext.name} <button onClick={userContext.logout}>logout</button></p>}
      {theme &&<p>Theme preference is {theme}</p>}
    </div>
  );
};
export default PageHeader;
