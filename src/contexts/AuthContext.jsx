import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import axiosInstance from "../utils/axios";

const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
};

const ACTION_TYPES = {
  login: "LOGIN",
  logout: "LOGOUT",
};

const authReducer = (state, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.login:
      return { ...state, user: payload, isAuthenticated: true };
    case ACTION_TYPES.logout:
      return { ...state, user: null, isAuthenticated: false };

    default:
      return state;
  }
};

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    authReducer,
    JSON.parse(localStorage.getItem("currentUser")) || initialState
  );

  const register = async (formData) => {
    const { data } = await axiosInstance.post("/auth/register", formData);
    dispatch({ type: ACTION_TYPES.login, payload: data });
    localStorage.setItem(
      "currentUser",
      JSON.stringify({ user: data, isAuthenticated: true })
    );
  };

  const login = async (formData) => {
    const { data } = await axiosInstance.post("/auth/login", formData);
    dispatch({ type: ACTION_TYPES.login, payload: data });
    localStorage.setItem(
      "currentUser",
      JSON.stringify({ user: data, isAuthenticated: true })
    );
  };

  const logout = () => {
    localStorage.removeItem("currentUser");
    dispatch({ type: ACTION_TYPES.logout });
  };

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};

export default AuthContextProvider;
