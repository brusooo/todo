import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import Router from "next/router";
import { providers, getSession } from "next-auth/client";
import LoginForm from "../components/loginform";
import GoogleSignIn from "../components/gosignin";

function Home({ providers, session }) {
  useEffect(() => {
    if (session) Router.push("/profile");
  }, [session]);

  if (session) return <></>;
  return (
    <>
      <div className="max-w-full min-h-screen">
        <div className="w-[31%] lg:w-[38%] md:w-[46%] vs:w-[100%] min-h-screen my-10 mx-8 bg-white left-0 absolute flex justify-start items-start">
          <div className="w-[80%]  min-h-full flex justify-start items-start flex-col">
            <div className="relative flex justify-center items-center">
              <Image
                src="/images/feather.svg"
                alt=""
                width={50}
                height={50}
              ></Image>
              <h1 className="font-comforter mt-4 ml-2 text-4xl tracking-wider font-extrabold">
                Brusooo
              </h1>
            </div>

            <GoogleSignIn providers={providers} session={session} />

            <div className="flex justify-center items-center vs:w-[80%] w-full h-[0.15rem] bg-slate-500">
              <span className="bg-white p-2 rounded-[50%] font-semibold">
                or
              </span>
            </div>

            <LoginForm />

            <p className="md:text-[15px]">
              Don't have an account ?
              <Link href="/create_account">
                <a className="font-semibold text-[#004e92]"> Sign up</a>
              </Link>
            </p>
          </div>
          <div className='absolute hidden right-0 bottom-0 vs:flex'>
            <Image 
              src='/images/girl.svg'
              width={ 350}
              height={350}
            >
            </Image>
          </div>
        </div>

        <div className="w-[69%] lg:w-[62%] md:w-[54%] sm:w-[40%] vs:hidden min-h-screen bg-gradient-to-r from-[#000428] to-[#004e92] right-0 absolute flex justify-center items-center">
          <div>
            <div className="absolute right-0 lg:-right-6 -bottom-11 lg:scale-[.85] md:hidden">
              <Image
                src="/images/remainder.svg"
                alt=""
                width={450}
                height={450}
              />
            </div>
            <div className="absolute left-12 sm:left-3 top-12  text-white ">
              <p className="font-mochiy sm:text-[15px] leading-snug md:text-2xl text-3xl font-semibold tracking-wider">
                Join our Community to <br /> ease your Work
              </p>
              <br />
              <p className="sm:text-[12px]">
                One of the secrets of getting more <br /> done is to make a
                TO-DO List every day,
                <br /> keep it visible, and use it as a guide
                <br /> to action as you go through the day.
              </p>
            </div>
            <div className="lg:hidden  absolute left-10 bottom-1 md:bottom-3">
              <Image src="/images/arrow.svg" alt="" width={90} height={90} />
            </div>
          </div>
          <div className='absolute sm:scale-y-125 right-0 bottom-0 hidden md:flex'>
            <Image
              src="/images/man.svg"
              alt=""
              width= {350}
              height={350}
            />
          </div>
        </div>
      </div>
    </>
  );
}

Home.getInitialProps = async (context) => {
  return {
    providers: await providers(context),
    session: await getSession(context),
  };
};


export default Home;
