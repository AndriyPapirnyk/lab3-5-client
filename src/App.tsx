import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import MyCars from "./components/MyCars/MyCars";
import CreateCar from "./components/CreateCar/CreateCar";
import EditCar from "./components/EditCar/EditCar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<h1>404 Not Found</h1>} />
        <Route path="/" element={<Home />} />
        <Route path="/my-cars" element={<MyCars />} />
        <Route path="/create-car" element={<CreateCar />} />
        <Route path="/edit-car" element={<EditCar />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
