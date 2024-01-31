import { Link } from "react-router-dom";

import './styles.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-primary main-nav">
      <div className="container-fluid">
            <Link to="/" className="nav-logo-text">
               <h4>Github API</h4>
            </Link>
         </div>
    </nav>
  );
};

export default Navbar;
