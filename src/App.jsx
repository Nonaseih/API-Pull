/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 20/11/2025 - 16:49:19
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 20/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CatsPage from "./pages/CatsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cats" element={<CatsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
