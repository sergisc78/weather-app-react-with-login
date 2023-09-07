import React from "react";
import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <div className=" text-white text-center text-3xl mt-28 font-sans" >
        <p className="mb-8">
          You can check the temperature and weather conditions of any city or
          town. Try it !
        </p>

        <NavLink
          className="mb-3 px-4 py-2 rounded 
                bg-blue-500 hover:bg-blue-700 
                text-white font-bold
                focus:outline-none
                focus:shadow-outline text-2xl hover:no-underline "
          to={"/register"}
        >
          Register{" "}
        </NavLink>
      </div>
    </div>
  );
};
