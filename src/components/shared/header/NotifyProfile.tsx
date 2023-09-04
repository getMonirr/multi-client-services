import person from "@/assets/dashboard/avatar.jpg";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { AiOutlineMessage } from "react-icons/ai";
import { BsBell } from "react-icons/bs";

const NotifyProfile = ({ className }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <button className="btn btn-ghost btn-circle bg-multi-icon-bg btn-sm">
        <div className="indicator">
          <BsBell size={20} />
          <span className="badge badge-xs badge-primary indicator-item"></span>
        </div>
      </button>
      <button className="btn btn-ghost btn-circle bg-multi-icon-bg btn-sm">
        <div className="indicator">
          <AiOutlineMessage size={20} />
          <span className="badge badge-xs badge-primary indicator-item"></span>
        </div>
      </button>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-7 rounded-full ring ring-primary ring-offset-2 ">
            <img src={person.src} />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-multi-bg rounded-box w-52"
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
  );
};

export default NotifyProfile;
