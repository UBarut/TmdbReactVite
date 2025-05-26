import { NavLink, Link } from "react-router-dom";
import './style.scss';

const Navbar = () => {
  return (
    <>
      <header className="container xl mx-auto">
        <nav>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="movie-list">Movies</NavLink></li>
            <li><NavLink to="series-list">Series</NavLink></li>
            <li><NavLink to="about">About</NavLink></li>
          </ul>
        </nav>
      </header>
      {/* <main><Outlet /></main> */}
    </>
  );
};

export default Navbar;
