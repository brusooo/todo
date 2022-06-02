import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Right from "../components/right";
import Left from "../components/left";

const create = () => {
  setTimeout(() => {
    toast("Create an Account", {
      toastId: "create",
    });
  }, 500);

  return (
    <>
      
      <div className="max-w-full min-h-screen">
        <Left
          sentence="Already Registered? "
          create={false}
          control=" Sign in"
          login={false}
          imgone="/images/left/feathergreen.svg"
        />

        <Right
          imgone="/images/right/remaingreen.svg"
          imgtwo="/images/right/arrow.svg"
          imgthree="/images/right/greenman.svg"
          
        />
      </div>
    </>
  );
};

export default create;
