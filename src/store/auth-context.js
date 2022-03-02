import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logOut: () => {},
});

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);

  const userIsLogedIn = !!token;

  const logedInHandler = (token) => {
    setToken(token);
  };
  const logedOutHandler = () => {
    setToken(null);
  };
  const contextValue = {
    token: token,
    isLoggedIn: userIsLogedIn,
    login: logedInHandler,
    logOut: logedOutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
