import { useEffect, useState } from "react";
import { providers, getSession } from "next-auth/client";
import { useRouter } from "next/router";
import Router from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Right from "../components/right";
import Left from "../components/left";

function Home({ session }) {
  
  if(!session){
    setTimeout(() => {
      toast("✨ Log in to Continue", {
        toastId: "login",
        theme: "dark"
      });
    }, 500);
  }

  useEffect(() => {
    if (session) {
      Router.push("/profile");
    }
  }, [session]);

  const { error } = useRouter().query;
  if (error) {
    toast.error("Invalid Credentials", {
      toastId: error,
      theme: "dark"
    });
  }

  if (session) return <></>;
  return (
    <>
    <ToastContainer />
      <div className="max-w-full min-h-screen">
        <Left
          sentence="Don't Have an account? "
          create={true}
          control=" Sign up"
          login={true}
          imgone="/images/left/feather.svg"
        />

        <Right
          imgone="/images/right/remainder.svg"
          imgtwo="/images/right/arrow.svg"
          imgthree="/images/right/man.svg"
        />
      </div>
    </>
  );
}

Home.getInitialProps = async (context) => {
  return {
    session: await getSession(context),
  };
};

export default Home;
