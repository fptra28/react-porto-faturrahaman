import { Route, Routes } from "react-router-dom";
import HomeUser from "./porto/pages/dasboard";
import Portofolio from "./porto/pages/portfolio";
import About from "./porto/pages/about";
import NotFound from "./porto/pages/404/404";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<HomeUser />} />
      <Route path="/portfolio" element={<Portofolio />} />
      <Route path="/about" element={<About />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
