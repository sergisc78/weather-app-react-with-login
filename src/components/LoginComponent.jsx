import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { AlertComponent } from "../components/AlertComponent";

export const LoginComponent = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      setTimeout(() => {
        navigate('/search')
      }, 3000)
    } catch (error) {
      console.log(error.code);
      if (error.code === "auth/invalid-email") {
        setError("Invalid email");
      } else if (error.code === "auth/user-not-found") {
        setError("User not found !");
      } else if (error.code === "auth/wrong-password") {
        setError("Wrong password !");
      } else if (error.code === "auth/too-many-request") {
        setError("Too many failed attempts to login");
      }
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      navigate("/search");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div className="w-full max-w-xs m-auto">
        <div>
          {error && <AlertComponent message={error} />}

          <form
            onSubmit={handleSubmit}
            className="flex flex-col text-center bg-white mt-8"
          >
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block mt-4 text-gray-700 text-lg text-sm font-bold mb-2 font-sans"
              >
                Email
              </label>
              <input
                type="email"
                className="shadow appereance-none border rounded  py-2 px-3"
                name="email"
                placeholder="email@company.com"
                onChange={handleChange}
              />

              <label
                htmlFor="password"
                className="mt-3 text-gray-700 text-lg text-sm font-bold mb-2 flex flex-col "
              >
                Password
              </label>
              <input
                type="password"
                className="shadow appereance-none border rounded  py-2 px-3"
                name="password"
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
              Login
            </button>

          </form>

          <button className="bg-orange-600 hover:bg-orange-300 text-black shadow-md rounded border-2 border-gray-300 py-2 px-4 w-full mb-3 ">
            <Link
              to={"/register"}
              className="hover:no-underline hover:text-black"
            >
              Don't have an Account? Register
            </Link>
          </button>

          <button
            onClick={handleGoogleLogin}
            className="bg-cyan-700 hover:bg-cyan-200 text-black shadow-md rounded border-2 border-gray-300 py-2 px-4 w-full"
          >
            Login with Google
          </button>
        </div>
      </div>
    </>
  );
};
