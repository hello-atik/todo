import { useNavigate } from "react-router-dom";
import { useState, createContext } from "react";

const MainContext = createContext();

const MainContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);

  const navigate = useNavigate();

  const logIn = () => {
    setAuth(true);
    navigate("/todos");
  };

  const logOut = () => {
    setAuth(false);
    navigate("/login");
  };

  const signUp = () => {};

  const state = {
    auth,
    logIn,
    logOut,
    signUp,
  };

  return <MainContext.Provider value={state}>{children}</MainContext.Provider>;
};

export { MainContext, MainContextProvider };
