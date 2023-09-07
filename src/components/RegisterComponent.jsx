import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { AlertComponent } from "../components/AlertComponent";

export const RegisterComponent = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { singup } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await singup(user.email, user.password);
      setTimeout(() => {
        navigate('/search')
      }, 3000)
    } catch (error) {
      console.log(error.code);
      if (error.code === "auth/invalid-email") {
        setError("Invalid email");
      } else if (error.code === "auth/weak-password") {
        setError("Password too weak, at least 6 characters");
      } else if (error.code === "auth/email-already-in-use") {
        setError("User exists !!");
      }
    }
  };

  return (
    <div className="w-full max-w-xs m-auto">
      {error && <AlertComponent message={error} />}

      <form
        onSubmit={handleSubmit}
        className="flex flex-col text-center bg-white mt-8"
      >
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block mt-4 text-gray-700 text-lg text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="email@company.com"
            className="shadow appereance-none border rounded  py-2 px-3"
            onChange={handleChange}
          />

          <label
            htmlFor="password"
            className="block mt-4 text-gray-700 text-lg text-sm font-bold mb-2"
            
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            className="shadow appereance-none border rounded  py-2 px-3"
            placeholder="******"
            onChange={handleChange}
          />
        </div>

        <button
          className="mb-3 px-4 py-2 rounded 
        m-2 bg-blue-500 hover:bg-blue-700 
        text-white font-bold
        focus:outline-none
        focus:shadow-outline text-sm "
        >
          Register
        </button>

     
      </form>

      <button className="bg-orange-600 hover:bg-orange-300 text-black shadow-md rounded border-2 border-gray-300 py-2 px-4 w-full mb-3 ">
        <Link to={"/login"} className="hover:no-underline hover:text-black">
          Already have an Account? Login
        </Link>
      </button>
    </div>
  );
};
