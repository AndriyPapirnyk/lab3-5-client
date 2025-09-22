import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import MyCars from "./components/MyCars/MyCars";
import CreateCar from "./components/CreateCar/CreateCar";
import EditCar from "./components/EditCar/EditCar";
import { SearchProvider } from './SearchContext';

function App() {
    return (
        <SearchProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="*" element={<h1>404 Not Found</h1>} />
                    <Route path="/" element={<Home />} />
                    <Route path="/my-cars" element={<MyCars />} />
                    <Route path="/create-car" element={<CreateCar />} />
                    <Route path="/edit-car/:id" element={<EditCar />} />
                </Routes>
            </BrowserRouter>
        </SearchProvider>
    );
}

export default App;
