import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext, userContextType } from "../../context/context";

const Login = (): JSX.Element => {
  const userContext = useContext<userContextType>(UserContext);
  const navigate = useNavigate();
  const handleClick = () => {
    userContext.login({ id: 1, name: "sonal", role: "trainer" });
    sessionStorage.setItem("theme","dark")
    navigate("/");
  };
  return (
    <p>
      This is where the login form world go
      <h3> Dummy</h3>
      <button onClick={handleClick}>login</button>
    </p>
  );
};
export default Login;
