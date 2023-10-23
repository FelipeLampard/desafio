import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar bg-black ">
      <div className="container"> 
        <Link to="/" className="navbar-brand text-white "> Pizzeria Mamma Mia 🧀 </Link>
        <div className="d-flex">
          <Link to="/pizza/:id:" className="mr-auto"></Link> 
          <Link to="/carrito" className="ml-auto">🛒</Link> 
        </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
