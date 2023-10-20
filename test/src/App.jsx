import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Shop from "./views/Shop";
import Navbar from "./components/Navbar";
import Notfound from "./views/Notfound";
import Pizza from "./views/Pizza";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pizza/:id" element={<Pizza />} />
        <Route path="/carrito:" element={<Shop />} />
        <Route path="*" element={<Notfound />} />

      </Routes>
    </>
  );
}

export default App;

