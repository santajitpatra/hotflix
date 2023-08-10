import { Navbar } from "@/components";
import { selectUser } from "@/features/userSlice";
import { auth } from "@/firebase";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";

const Profile = () => {
  const user = useSelector(selectUser);
  const router = useRouter();

  return (
    <div className="h-screen text-white bg-gray-950">
      <Navbar />
      <div className="flex flex-col w-1/2 mx-auto pt-[8%] max-w-[800px]">
        <h2 className="text-6xl font-normal border-b-[1px] border-solid border-gray-600 mb-5 ">
          Edit Profile
        </h2>
        <div className="flex">
          <img
            className="h-24"
            src={"profile.png"}
            alt=""
          />
          <div className="text-white ml-6 flex-[1]  ">
            <h3 className="text-[15px] p-4 bg-gray-500 pl-5 ">{user?.email}</h3>
            <div className="mt-5">
              <h4 className="border-b-[1px] border-solid border-gray-600 mb-3">
                Plans
              </h4>
              <button
                className="py-3 px-5 text-xs mt-[5%] w-full text-white bg-[#00a7e6] font-semibold border-none cursor-pointer "
                onClick={() => signOut(auth).then(() => router.push("/"))}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
