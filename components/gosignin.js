import React, { useEffect } from "react";
import { signIn } from "next-auth/client";
import Image from "next/image";


const GoogleSignIn = ({ providers, session }) => {
  
  return (
    <>
      <div className="relative w-[100%] my-6 h-10 border-2 vs:w-[80%] border-cyan-500">
        <div className="absolute flex justify-center items-center left-0 w-[15%] h-[100%]">
          <Image src="/images/google.svg" width={30} height={30} alt=""></Image>
        </div>
        <div
          onClick={() => signIn(providers.google.id)}
          className="flex justify-center items-center absolute cursor-pointer right-0 w-[85%] h-[100%] font-semibold bg-cyan-500 text-white"
        >
          <span>Sign in with Google</span>
        </div>
      </div>
    </>
  );
};

export default GoogleSignIn;
