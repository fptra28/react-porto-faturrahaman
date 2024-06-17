import { Route, Routes } from "react-router-dom";
import HomeUser from "./porto/pages/dasboard";
import Portofolio from "./porto/pages/portfolio";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<HomeUser />} />
      <Route path="/portfolio" element={<Portofolio />} />
    </Routes>
  );
}

export default App;
