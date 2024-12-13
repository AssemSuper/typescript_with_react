import { useState } from "react";


import "./App.css";
import PageHeader from "./components/pageHeader/PageHeader";
//import Search from "./components/Search/Search";
//import Transactions from "./components/Transactions/Transactions";
import AddTransactionPage from "./components/AddTransaction/AddTransactionPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FindTransactionPage from "./components/FindTransactionPage/FindTransactionPage";
import HomePage from "./components/statticPages/HomePage";
import PageNotFound from "./components/statticPages/PageNotFound";
import { UserContext, userType } from "./context/context";
import Login from "./components/statticPages/Login";

function App() {
  //const [count, setCount] = useState(0);
  const [user, setUser] = useState<userType>({ id: 0, name: "", role: "" });
  const login = (user: userType) => {
    setUser(user);
  };
  const logout = () => {
    setUser({ id: 0, name: "", role: "" });
    sessionStorage.removeItem('theme')
  };

  return (
    <UserContext.Provider value={{ ...user, login: login, logout: logout }}>
      <BrowserRouter>
        <PageHeader />
        <Routes>
          <Route path="/add" element={<AddTransactionPage />}></Route>
          <Route path="/find" element={<FindTransactionPage />}></Route>
          <Route
            path="/find/:orderId"
            element={<FindTransactionPage />}
          ></Route>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
    // <>
    //   <PageHeader />
    //   <Search />
    //   <Transactions />
    //   <AddTransactionPage/>
    // </>
  );
}

export default App;
