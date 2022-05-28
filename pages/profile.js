import React from "react";
import { signOut } from "next-auth/client";
import { getSession } from "next-auth/client";

const Profile = ({session}) => {
  return (
    <>
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
      props : { session }
  }
}

export default Profile;
