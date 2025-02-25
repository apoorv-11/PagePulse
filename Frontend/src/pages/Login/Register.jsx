/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useAuth } from "../../Context/auth.context.jsx";

const Register = () => {
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { registerUser, signInWithGoogle } = useAuth();

  //Register User :

  const onSubmit = async (data) => {
    console.log(data);
    try {
      await registerUser(data.email, data.password);
      alert("user Registeration Successfull");
      navigate("/login");
    } catch (error) {
      setMessage("Please Provide a valid email and Password");
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      alert("Login Successfull");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-[calc(100vh-120px)] flex justify-center items-center">
      <div className="w-full max-w-sm mx-auto bg-neutral-100/85 shadow-md rounded px-8 pt-6 pb-8 mb-4 border">
        <h2 className="text-4xl text-center mt-2 py-4 font-semibold mb-4">
          Register
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <label
              className="block text-black text-md font-bold mb-2 "
              htmlFor="email"
            >
              Email :
            </label>
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              id="email"
              className="shadow appearance-none bg-neutral-100 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow border"
              {...register("email", { required: true })}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-black text-md font-bold mb-2 "
              htmlFor="email"
            >
              Password :
            </label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              id="password"
              className="shadow appearance-none bg-neutral-100 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow border"
              {...register("password", { required: true })}
            />
          </div>
          <div className="flex justify-center">
            <button className="bg-primary px-5 py-2 w-full text-xl rounded-md font-semibold border md:mt-2 sm:mt-3 hover:bg-blue-600 hover:text-white delay-150  ease-in-out">
              Register
            </button>

            {message && <p className="text-red-500 text-sm">{message}</p>}
          </div>
          <p className="mt-6 text-md font-semibold ">
            {" "}
            Already have an Account? Please{" "}
            <span className="text-Favourite hover:text-blue-300">
              <Link to={"/login"}>Login</Link>
            </span>
          </p>
          <div className="mt-4">
            <button
              onClick={handleGoogleSignIn}
              className="w-full flex flex-wrap gap-1 items-center justify-center bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
            >
              <FaGoogle className="mr-2" />
              Sign in with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Register;
