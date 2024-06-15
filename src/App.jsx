import { Route, Routes } from "react-router-dom";
import HomeUser from "./porto/pages/dasboard";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<HomeUser />} />
    </Routes>
  );
}

export default App;
