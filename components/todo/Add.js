import React , { useState } from "react";
import { toast } from "react-toastify";

const Add = () => {
  const [values, setValues] = useState({
    title: "",
    description: "",
    date: "",
  });

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  function handleSubmit(e){
    e.preventDefault();
    const rep = (values.title).replace(/["']/g, "")
    const resId = rep + "/" + values.date;
    const val = {
      id: resId,
      title: rep,
      description: (values.description).replace(/["]/g,"\'"),
      date : values.date
    }
    const data = JSON.parse(window.localStorage.getItem('localData'));
    data.columns[0].userIds.push(resId);
    data.users.push(val)
    window.localStorage.setItem('localData',JSON.stringify(data));
    toast("👍  Added Successfully! ", { toastId: "Added", theme: "dark" });
  }

  return (
    <>
      <div className="relative w-[350px] h-full py-10 px-6 border-8 border-[#333] bg-white">
        <form className="realtive flex flex-col" onSubmit={handleSubmit}>
          <label className="font-semibold">Title</label>
          <input
            type="text"
            name="title"
            value={values.title}
            onChange={handleChange}
            autoComplete={"off"}
            className="border-2 rounded-md w-full h-10 p-2 my-2 border-zinc-400"
          />
          <br />

          <label className="font-semibold">Description</label>
          <input
            type="text"
            name="description"
            value={values.description}
            onChange={handleChange}
            autoComplete={"off"}
            className="border-2 rounded-md w-full h-10 p-2 my-2 border-zinc-400"
          />
          <br />

          <label className="font-semibold">Date</label>
          <input
            type="date"
            name="date"
            onChange={handleChange}
            value={values.password}
            className="border-2 rounded-md w-full h-10 p-2 my-2 border-zinc-400"
          />
          <br />

          <button
            className="border border-slate-300 w-full py-2 rounded-lg bg-gradient-to-r from-[#2C69D1] to-[#0ABCF9] text-white  font-semibold text-center"
            disabled={
              isNaN(values.title) &&
              isNaN(values.description) &&
              isNaN(values.date)
                ? false
                : true
            }
          >
            ADD
          </button>
        </form>
      </div>
    </>
  );
};

export default Add;
