import { Link, NavLink } from "react-router-dom";

import Logo from "../Assets/Logo.svg.svg";
import { useState } from "react";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../RealFireBase/config";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const [isAuth, setIsAuth] = useState(
    JSON.parse(localStorage.getItem("isAuth")) || false
  );
  const activeClass = "mr-2 bg-green-300 rounded p-2 text-white shadow-md";
  const inActiveClass = "mr-2 shadow-md p-2 rounded";
  const navigate = useNavigate();

  function handleLogin() {
    signInWithPopup(auth, provider).then((result) => {
      console.log(auth);
      setIsAuth(true);
      localStorage.setItem("isAuth", true);
      navigate("/");
    });
  }

  function handleLogOut() {
    signOut(auth);
    setIsAuth(false);
    localStorage.setItem("isAuth", false);
    navigate("/");
  }
  return (
    <header className="flex justify-between max-w-6xl m-auto shadow-md h-20 items-center p-1">
      <div>
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
      </div>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? activeClass : inActiveClass)}
        >
          Home
        </NavLink>
        {isAuth && (
          <NavLink
            to="/create"
            className={({ isActive }) =>
              isActive ? activeClass : inActiveClass
            }
          >
            Create
          </NavLink>
        )}

        {isAuth ? (
          <button
            onClick={handleLogOut}
            className="mr-2 bg-blue-600 p-1 rounded text-white shadow-md"
          >
            <i className="bi bi-arrow-right-square mr-2"></i>Log Out
          </button>
        ) : (
          <button
            onClick={handleLogin}
            className="mr-2 bg-blue-600 p-1 rounded text-white shadow-md"
          >
            <i className="bi bi-google"></i> Sign In
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;
