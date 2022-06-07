import { useState, useEffect } from "react";
import { signOut } from "next-auth/client";
import { getSession } from "next-auth/client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import Kanban from "../components/todo/Kanban";
import Load from "../components/todo/load";
import { GiFeather } from "react-icons/gi";
import Add from "../components/todo/Add";

const Profile = ({ session }) => {
  const [winReady, setwinReady] = useState(false);
  const [pencil, setPencil] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setwinReady(true);
    let sesCount = window.sessionStorage.getItem("sesCount");
    if (!sesCount) {
      window.sessionStorage.setItem("sesCount", 1);
      sesCount = 1;
    }
    setCount(sesCount)
  }, []);

  if (!count) {
    toast("👍  Login Successful! ", { toastId: "Success", theme: "dark" });
  }

  const handlePencil = () => {
    setPencil(!pencil);
  };

  return (
    <>
      <ToastContainer />
      <div className="z-0 absolute top-0 left-0 w-screen h-screen bg-gradient-to-r from-[#2C3E50] to-[#000000]"></div>
      <div className="absolute w-full h-[9%] bg-gradient-to-r from-[#4834D4] to-[#0C0C0C] top-0 left-0 flex justify-center items-center">
        <div className="absolute flex left-3 justify-center items-center">
          <Image
            src="/images/yellowFeather.svg"
            alt=""
            width={44}
            height={44}
          ></Image>
          <span className="text-white font-mochiy font-semibold text-2xl">
            {" "}
            Brusooo{" "}
          </span>
        </div>

        <div className="absolute flex right-5 text-center text-white font-mochiy ">
          <div className="border-[2px] border-slate-100 mr-[5px]  py-[4px] px-4 rounded-[30px]">
            <span>{session.user.name} </span>
          </div>
          <button
            className="bg-[#FE0944] mr-[5px] py-[4px] px-3.5 rounded-[30px] border-[2px] border-slate-100"
            onClick={() => signOut()}
          >
            Sign Out
          </button>
        </div>
      </div>
      <div
        className="absolute left-5 bottom-[70px] text-center cursor-pointer"
        onClick={handlePencil}
      >
        <GiFeather className="text-white bg-[#4834D4] p-2 rounded-[50%] text-5xl" />
      </div>
      
      {pencil ? <Add /> : winReady ? <Kanban /> : <Load />}
    </>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}

export default Profile;
