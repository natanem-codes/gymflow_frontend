import React from "react";
import { Link, NavLink } from "react-router-dom";
import Container from "./ui/Container";
import { useAuth } from "../contexts/AuthContext";

import {
  BiLogIn,
  BiLogOut,
  BiMailSend,
  BiRegistered,
  BiUser,
} from "react-icons/bi";
import Login from "../pages/Login";
import Icon from "./ui/Icon";

const Navbar = () => {
  const { logout, isAuthenticated } = useAuth();
  return (
    <nav className="bg-gray-700 text-white">
      <Container className="flex justify-between">
        <div>
          <Link to={"/"}>Gymflow</Link>
        </div>
        <ul className="flex gap-4">
          {isAuthenticated ? (
            <>
              <li
                onClick={logout}
                className="flex justify-center items-center cursor-pointer"
              >
                Logout
                <BiLogOut size={24} />
              </li>
              <NavLink
                to={"/me"}
                className="flex justify-center items-center cursor-pointer"
              >
                Profile
                <BiUser size={24} />
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                to={"/login"}
                className={"flex justify-center items-center cursor-pointer"}
              >
                Login <BiLogIn size={24} />
              </NavLink>
              <NavLink
                to={"/register"}
                className={"flex justify-center items-center cursor-pointer"}
              >
                Register <BiMailSend size={24} />
              </NavLink>
            </>
          )}
        </ul>
      </Container>
    </nav>
  );
};

export default Navbar;
