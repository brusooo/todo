import React from "react";
import { signOut } from "next-auth/client";
import { getSession, useSession } from "next-auth/client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";

const Profile = ({ session }) => {
  if (session) {
    toast("👍  Login Successful! ", { toastId: "Success" , theme : "dark" });
  }
  return (
    <>
      <ToastContainer />

      <div className="absolute w-full h-[8%] bg-[#333] top-0 left-0 flex justify-center items-center">
        <div className="absolute flex left-3 justify-center items-center">
          <Image
            src="/images/left/feather.svg"
            alt=""
            width={35}
            height={35}
          ></Image>
          <span className="text-white font-mochiy font-medium"> Brusooo </span>
        </div>

        <div className="absolute flex right-5 text-center text-white font-mochiy ">
          <div className="border-[2px] border-slate-100 mr-[5px]  py-1.5 px-4 rounded-[30px]">
            <span>{session.user.name} </span>
          </div>
          <button
            className=" bg-red-600 mr-[5px] py-1.5 px-3.5 rounded-[30px] border-[2px] border-slate-100"
            onClick={() => signOut()}
          >
            Sign Out
          </button>
        </div>
      </div>
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
