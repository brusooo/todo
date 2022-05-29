import React from "react";
import { signOut } from "next-auth/client";
import { getSession } from "next-auth/client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = ({session}) => {
  if(session){ toast("👍  Login Successful! ",{ toastId: "Success" }); };  
  return (
    <>
      <ToastContainer />
      <div>profile</div>
      <br></br>
      <button className=" text-white bg-red-500" onClick={() => signOut()}>
        Sign Out
      </button>
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
