"use client";
import { useState } from "react";
import RootContainer from "../RootContainer";
import { navLinks } from "@/constant/Constant";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SimpleBtn from "../btn/SimpleBtn";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

const Header = () => {
  // for navbar toggle
  const [isShow, setIsShow] = useState(false);

  // path name
  const pathname = usePathname();

  // nav links generate
  const Links = navLinks.map(({ name, path }) => {
    const isActiveLinks = pathname == path;
    return (
      <li key={name} className="list-none">
        <Link
          href={path}
          className={`${isActiveLinks && "text-multi-secondary"}`}
        >
          {name}
        </Link>
      </li>
    );
  });

  return (
    <div className="bg-multi-primary text-white">
      <RootContainer>
        <div className="flex items-center justify-between py-4">
          <div>
            <h1 className="text-xl font-bold uppercase">Solutions</h1>
          </div>
          <nav className=" items-center gap-4 hidden lg:flex">{Links}</nav>

          {/* mobile nav  */}
          {isShow && (
            <nav className=" w-full bg-gray-400 absolute left-0 top-12 items-center gap-8 flex-col justify-center text-center z-50">
              {Links}
            </nav>
          )}

          <div className="flex items-center">
            <SimpleBtn className="lg:block hidden">Login</SimpleBtn>
            <button onClick={() => setIsShow((prev) => !prev)}>
              {isShow ? (
                <MdClose className="h-8 w-8 cursor-pointer block lg:hidden" />
              ) : (
                <FiMenu className="h-8 w-8 cursor-pointer block lg:hidden" />
              )}
            </button>
          </div>
        </div>
      </RootContainer>
    </div>
  );
};

export default Header;
