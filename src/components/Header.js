import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="nav-header flex w-full bg-gray-400 shadow-md block py-4 px-8 shadow-md backdrop-saturate-200 backdrop-blur-2xl bg-opacity-80 border border-white/80 bg-white">
      <ul className="nav-menu flex gap-6 w-full justify-center ">
        <li className="nav-list">
          <Link to="/">Home Page</Link>
        </li>
        <li className="nav-list">
          <Link to="/message">Message</Link>
        </li>
      </ul>
      <div className="login-logout flex gap-4">
        <div>Login</div>
        <div>Logout</div>
      </div>
    </div>
  );
};

export default Header;
