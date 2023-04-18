import React, { useState } from "react";
import { Navbar, Welcome, Footer, Services, Transactions } from "./components";
import Market from "./components/Market";
import News from "./components/News";
import "./index.css";

const pageMapping = {
  0: <Welcome />,
  1: <Market />,
  2: <News />
};
const App = () => {
  const [curPage, setCurPage] = useState(0);
  return (
    <div className="min-h-screen">
      <div className="blak">
        <Navbar setCurPage={setCurPage} />
        {pageMapping[curPage]}
      </div>
      {curPage === 0 ? (
        <>
          <Services />
          <Transactions />
        </>
      // eslint-disable-next-line react/jsx-no-useless-fragment
      ) : <></>}
      <Footer />
    </div>
  );
};

export default App;
