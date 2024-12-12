import { ReactElement } from "react";
import Menu from "./Menu";
import { Link } from "react-router-dom";

const PageHeader = (): ReactElement => {
  return (
    <div className="pageHeader">
      <h1><Link to="/">Payment Application</Link></h1>
      <Menu />
    </div>
  );
};
export default PageHeader;
