import { FaSave } from "react-icons/fa";

const Save = ({ username }) => {
  const handleSave = async () => {

    let post = {
        name: username,
        data: JSON.parse(window.localStorage.getItem("localData")),
      };
  
      let response = await fetch("http://localhost:3000/api/auth/usersData", {
        method: "POST",
        body: JSON.stringify(post),
      });


    // let result = await fetch(
    //   `http://localhost:3000/api/auth/usersData?name=Jeni`,
    //   {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );
    // let user = await result.json();

    // console.log(user);
  };

  return (
    <>
      <div
        className="absolute text-white bg-[#4834D4] p-3 rounded-[50%] left-5 bottom-[20%] text-center cursor-pointer"
        onClick={handleSave}
      >
        <FaSave className="text-2xl" />
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession(context);
  console.log(session);
}

export default Save;
