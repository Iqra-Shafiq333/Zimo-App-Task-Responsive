import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FirstPage from "./components/1stPage.jsx";
import SecondPage from "./components/2ndPage.jsx";
import ThirdPage from "./components/3rdPage.jsx";
import FourthPage from "./components/4rthPage.jsx";
import FifthPage from "./components/5thPage.jsx";
import SixthPage from "./components/6thPage.jsx";
import SeventhPage from "./components/7thPage.jsx";
import EightPage from "./components/8thPage.jsx";
import NinthPage from "./components/9thPage.jsx";
import TenthPage from "./components/10thPage.jsx";
import EleventhPage from "./components/11thPage.jsx";
import TwelvethPage from "./components/12thPage.jsx";
import ThirteenthPage from "./components/13thPage.jsx";
import FourteenthPage from "./components/14thPage.jsx";
import FifteenthPage from "./components/15thPage.jsx";
import SixteenthPage from "./components/16thPage.jsx";
import SeventeenthPage from "./components/17thPage.jsx";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <FirstPage />
                <SecondPage />
                <ThirdPage />
                <FourthPage />
                <FifthPage />
                <SixthPage />
                <SeventhPage />
                <EightPage />
                <NinthPage />
                <TenthPage />
                <EleventhPage />
                <TwelvethPage />
                <ThirteenthPage />
                <SeventeenthPage />
               
              </>
            }
          />
          <Route path="/fourteenth" element={<FourteenthPage />} />
          <Route path="/fifteenth" element={<FifteenthPage />} />
          <Route path="/sixteenth" element={<SixteenthPage />} />
        </Routes>

    </div>
  );
}

export default App;