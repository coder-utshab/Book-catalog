import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/listed-books">Listed Books</NavLink>
      </li>

      <li>
        <NavLink to="/pages-to-read">Pages to Read</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 py-5">
      <div className="navbar-start">
        <a className="text-3xl font-bold">Book Vibe</a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold">
          {links}
        </ul>
      </div>

      <div className="navbar-end gap-3">
        <button className="btn bg-[#23BE0A] text-white">
          Sign In
        </button>

        <button className="btn bg-[#59C6D2] text-white">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;