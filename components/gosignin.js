import React, { useEffect } from "react";
import { signIn } from "next-auth/client";
import Image from "next/image";

const GoogleSignIn = ({ create }) => {
  return (
    <>
      <div className={`relative w-[100%] my-6 h-10 border-2 vs:w-[80%] ${create ? 'border-[#2fa8cc]' : 'border-[#09F315]'}`}>
        <div className="absolute flex justify-center items-center left-0 w-[15%] h-[100%]">
          <Image src="/images/left/google.svg" width={30} height={30} alt=""></Image>
        </div>

        <div
          onClick={() => signIn("google")}
          className={`flex justify-center items-center absolute cursor-pointer right-0 w-[85%] h-[100%] font-semibold ${create ? 'bg-[#2fa8cc]' : 'bg-[#09F315]'} text-white`}
        >
          <span>Sign in with Google</span>
        </div>
      </div>
    </>
  );
};

export default GoogleSignIn;
