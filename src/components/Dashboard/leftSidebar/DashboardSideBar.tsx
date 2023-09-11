import { MdLogout, MdOutlineMenuOpen } from "react-icons/md";
import Profile from "./Profile";
import Image from "next/image";
import menu from "@/assets/dashboard/menu_open.svg";
import DashboardMenu from "./DashboardMenu";
import SimpleBtn from "@/components/shared/btn/SimpleBtn";
import { signOut, useSession } from "next-auth/react";
import {
  adminLinks,
  buyerLinks,
  importanceLinks,
  sellerLinks,
} from "./DashboardLinks";

const DashboardSideBar = ({
  isSidebarVisible,
  toggleSidebar,
}: {
  isSidebarVisible: boolean;
  toggleSidebar: () => void;
}) => {
  // use session
  const { data: session } = useSession();
  const role = session?.user?.role;

  // filtered links by user role
  let filteredLinks;

  // switch (role) {
  //   case "admin":
  //     filteredLinks = adminLinks;
  //     break;
  //   case "buyer":
  //     filteredLinks = buyerLinks;
  //   default:
  //     filteredLinks = sellerLinks;
  //     break;
  // }
  if (role == "admin") {
    filteredLinks = adminLinks;
  } else if (role == "buyer") {
    filteredLinks = buyerLinks;
  } else if (role == "seller") {
    filteredLinks = sellerLinks;
  }
  return (
    <div
      className={`w-60 bg-white dark:bg-multi-title dark:text-white fixed h-screen top-0  flex-col justify-between px-6 py-3 overflow-y-auto ${
        isSidebarVisible ? "flex z-50" : "hidden sm:flex"
      }`}
    >
      <div className="text-black">
        <div>
          <div className="flex  justify-between items-center">
            <h2 className="font-bold text-xl dark:text-white">Dashboard</h2>
            <Image
              onClick={toggleSidebar}
              alt="image"
              className="cursor-pointer block lg:hidden"
              src={menu}
            />
            <Image
              alt="image"
              className="cursor-pointer hidden lg:block"
              src={menu}
            />
          </div>
          <div className="divider after:dark:bg-multi-secondary before:dark:bg-multi-secondary"></div>
          <Profile />
        </div>
      </div>
      <div>
        <p className="font-bold my-4">
          <span className="capitalize">{role}</span> Menu
        </p>
        <DashboardMenu links={filteredLinks} />
      </div>
      <div>
        <div className="divider after:dark:bg-multi-secondary before:dark:bg-multi-secondary"></div>
        <p className="font-bold my-4">Important Links</p>
        <DashboardMenu links={importanceLinks} />
      </div>
      <div>
        <div className="divider after:dark:bg-multi-secondary before:dark:bg-multi-secondary"></div>
        <div className="flex items-center justify-center">
          <SimpleBtn>
            <span
              onClick={() => signOut()}
              className="flex items-center justify-between gap-4"
            >
              Log out <MdLogout />
            </span>
          </SimpleBtn>
        </div>
      </div>
    </div>
  );
};

export default DashboardSideBar;
