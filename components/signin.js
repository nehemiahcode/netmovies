"use client";
import Link from "next/link";
import Logo from "./Logo";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";
import {CgSpinner} from "react-icons/cg"

function Signin() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError("All fields are required");
      return;
    } else {
      setError("");
    }

    try {
      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      if (res.ok) {
        const form = e.target;
        form.reset();
        setLoading(true);
        router.replace("/home");
      } else {
        console.log("user registration failed");
      }
    } catch (error) {
      console.log("error during registration", error);
    }
  };
  return (
    <div className="flex items-center flex-col justify-center h-screen w-screen  bg-slate-950">
      <Logo />
      <h1 className=" px-2 py-4 text-2xl text-center font-medium text-white">
        Sign in to Netmovies
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col border-[0.01rem] border-slate-900 w-[92%] sm:w-[70%] md:w-[50%] lg:w-[37%] bg-[rgb(11,15,29)] xl:w-[35%] mx-auto px-4 xl:py-3 py-6  shadow-2xl rounded-md"
      >
        {error ? (
          <div
            className={` py-2 px-3 rounded-md text-sm bg-red-600  text-white`}
          >
            {error}
          </div>
        ) : (
          ""
        )}
        <label htmlFor="name" className=" text-white">
          Fullname
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="rounded-md bg-transparent selection:bg-transparent text-white outline-none  focus:ring-2 
           focus:border-blue-500 border border-gray-600 px-2 py-2 w-full my-2"
          />
        </label>
        <label htmlFor="email" className=" text-white">
          Email
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="rounded-md focus:ring-2 border-gray-600 selection:bg-transparent text-white outline-none bg-transparent
             focus:border-blue-500 border px-2 py-2 w-full my-2"
          />
        </label>
        <label htmlFor="password" className=" text-white">
          Password
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="rounded-md selection:bg-transparent border-gray-600 text-white focus:ring-2 outline-none bg-transparent 
            focus:border-blue-500 border px-2 py-2 w-full my-3"
          />
        </label>
        {loading ? (
             <Button  className="text-white flex items-center gap-4 justify-center">
              <span className=" animate-spin text-blue-600 text-3xl"><CgSpinner/></span>
              Sending..
              </Button>
        ) : (
          <Button
          type="submit"
          className=" bg-green-700 text-[1rem] text-white rounded-md hover:bg-green-800 py-3 capitalize flex items-center justify-center"
        >
          Sign in
        </Button>
      
        )}
      </form>
      <div className=" py-5 rounded-md flex  justify-center items-center gap-3 my-3 border-[0.01rem] border-slate-900 w-[92%] sm:w-[70%] md:w-[50%] lg:w-[37%] bg-[rgb(11,15,29)] xl:w-[35%] ">
        <h1 className="font-medium text-sm text-white ">
          Already have an account?
        </h1>
        <Link href="/" className="text-sm text-blue-600 underline font-medium">
          Login
        </Link>
      </div>
    </div>
  );
}

export default Signin;
