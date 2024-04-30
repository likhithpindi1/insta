import React, { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

const Home = () => {
  let { user, dispatch } = useContext(LoginContext);

  return (
    <div>
      {user &&
        user.map((item) => {
          return <h1>{item.name}</h1>;
        })}
    </div>
  );
};

export default Home;
