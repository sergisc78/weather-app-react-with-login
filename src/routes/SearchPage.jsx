import React from "react";
import { SearchComponent } from "../components/SearchComponent";
import { useAuth } from "../context/AuthContext";

export const SearchPage = () => {
  const { user, logout, loading } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("There is an error", error);
    }
  };

  if (loading) return <h1>Loading...</h1>;
  return (
    <>
      <div className="float-right mr-2 mt-4 ">
        <div className="bg-white rounded shadow-md text-black px-3 py-3">
          <h1 className="text-xl mb-1">
            Hello {user.displayName || user.email}
          </h1>
          <button
            className=" logout mb-3 px-4 py-2 rounded 
          m-2 bg-pink-600 hover:bg-pink-400
          text-white font-bold
          focus:outline-none
          focus:shadow-outline text-sm w-full "
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
      <SearchComponent></SearchComponent>
    </>
  );
};
