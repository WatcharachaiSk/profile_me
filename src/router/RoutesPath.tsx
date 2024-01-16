import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import PathRoutesPage from "./pathPage";
import TextPDF from "../pages/pdf/TextPDF";

//test
// import UpTestt from "../pages/upTest/UpTestt";

function RoutesPath() {
  return (
    <>
      <Routes>
        <Route path={PathRoutesPage.home} element={<HomePage />} />
        <Route path={'/'} element={<TextPDF />} />
      </Routes>
    </>
  );
}

export default RoutesPath;
