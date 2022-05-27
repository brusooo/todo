import React , { useState } from "react";

const LoginForm = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }
  return (
    <>
      <div className="my-10">
        <form className="flex flex-col">
          <label className="font-semibold">Enter your Email</label>
          <br />
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            className="border-2 rounded-md w-[140%] h-10 pl-2 border-zinc-400"
          />
          <br />

          <label className="font-semibold">Password</label>
          <br />
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
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
