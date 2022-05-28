import React, { useState } from "react";
import { signIn } from "next-auth/client";
import { useRouter } from "next/router";

const LoginForm = () => {
  const router = useRouter();
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      username : values.username,
      email: values.email,
      password: values.password,
    });

    
  };

  return (
    <>
      <div className="my-10">
        <form className="flex flex-col" onSubmit={handleFormSubmit}>
          <label className="font-semibold">Username</label>
          <input
            type="text"
            name="username"
            value={values.username}
            onChange={handleChange}
            className="border-2 rounded-md w-[140%] h-10 pl-2 border-zinc-400"
          />
          <br />

          <label className="font-semibold">Email</label>  
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            className="border-2 rounded-md w-[140%] h-10 pl-2 border-zinc-400"
          />
          <br />

          <label className="font-semibold">Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={values.password}
            className="border-2 rounded-md w-[140%] h-10 pl-2 border-zinc-400"
          />
          <br />

          <button
            className="border border-slate-300 w-[50%] p-2 rounded-lg bg-[#2fa8cc] text-white  font-semibold"
            disabled={values.email && values.password ? false : true}
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
