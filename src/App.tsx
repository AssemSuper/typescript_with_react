import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PageHeader from "./components/pageHeader/PageHeader";
import Search from "./components/Search/Search";
import Transactions from "./components/Transactions/Transactions";
import AddTransactionPage from "./components/AddTransaction/AddTransactionPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FindTransactionPage from "./components/FindTransactionPage/FindTransactionPage";
import HomePage from "./components/statticPages/HomePage";
import PageNotFound from "./components/statticPages/PageNotFound";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
    <PageHeader/>
    <Routes>
      <Route path="/add" element={<AddTransactionPage/>}></Route>
      <Route path="/find" element={<FindTransactionPage/>}></Route>
      <Route path="/find/:orderId" element={<FindTransactionPage/>}></Route>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="*" element={<PageNotFound/>}></Route>
    </Routes>
    </BrowserRouter>
    // <>
    //   <PageHeader />
    //   <Search />
    //   <Transactions />
    //   <AddTransactionPage/>
    // </>
  );
}

export default App;
