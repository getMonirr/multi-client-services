import Image from "next/image";
import person from "@/assets/dashboard/avatar.jpg";
import unfold_more from "@/assets/dashboard/unfold_more.svg";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Profile = () => {
  const { data: session } = useSession();
  const user = session?.user;
  const fullName =
    typeof user?.name === "object"
      ? `${user?.name?.firstName} ${user?.name?.lastName}`
      : user?.name;
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <div>
            <div className="avatar">
              <div className="w-10 rounded-full ring ring-multi-secondary ring-offset-base-100 ring-offset-2">
                <Image
                  alt="image"
                  width={20}
                  height={20}
                  className="w-full h-full"
                  src={user?.profilePicture || person}
                />
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-bold text-gray-800 text-xs mb-1 dark:text-white">
              {fullName}
            </h2>
            <p className="text-gray-400 text-[11px]">{user?.email}</p>
          </div>
        </div>

        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="">
            <div className="w-10 rounded-full">
              <Image alt="image" className="cursor-pointer" src={unfold_more} />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/dashboard/profile">Profile</Link>
            </li>
            <li>
              <Link href="/dashboard/update_profile">Settings</Link>
            </li>
            <li>
              <p onClick={() => signOut()}>Logout</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="divider after:dark:bg-multi-secondary before:dark:bg-multi-secondary"></div>
    </div>
  );
};

export default Profile;
