import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

export let useAuthUser = function () {
  let { user, dispatch } = useContext(LoginContext);
  let userLogin = async function (email) {
    let url = "https://dummyapi.online/api/users";
    let res = await fetch(url);
    let data = await res.json();
    // console.log(data);

    if (!res.ok) {
      console.log("error in api");
    }
    if (res.ok) {
      console.log("Data");
      localStorage.setItem("userData", JSON.stringify(data));
      let x = localStorage.getItem("userData");

      console.log(dispatch);
      dispatch({ type: "LOGIN", payload: data });
      console.log("h1");
      if (user) {
        console.log("renter");
        // let y = user.find(email);
        // console.log(y);
      }
    }
  };
  return { userLogin };
};
