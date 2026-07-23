import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav>
      <h2>Book Vibe</h2>

      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/listed-books">Listed Books</NavLink>
        </li>

        <li>
          <NavLink to="/pages-to-read">Pages to Read</NavLink>
        </li>
      </ul>

      <div>
        <button>Sign In</button>
        <button>Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;