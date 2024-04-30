import { createContext, useReducer } from "react";
import { useEffect } from "react";

export let LoginContext = createContext();

export let loginReducer = function (state, action) {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};
let LoginContextProvider = function ({ children }) {
  let [state, dispatch] = useReducer(loginReducer, { user: null });
  useEffect(() => {
    let userlocalData = JSON.parse(localStorage.getItem("userData"));
    console.log(userlocalData);
    if (userlocalData) {
      dispatch({ type: "LOGIN" });
    }
  }, []);
  return (
    <LoginContext.Provider value={{ ...state, dispatch }}>
      {children}
    </LoginContext.Provider>
  );
};
export default LoginContextProvider;
