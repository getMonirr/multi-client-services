"use client";
import { useState, useEffect } from "react";
import RootContainer from "../RootContainer";
import { navLinks } from "@/constant/Constant";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SimpleBtn from "../btn/SimpleBtn";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import useAuth from "@/hooks/useAuth";

const Header = () => {
  
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

  const [isScrolled, setIsScrolled] = useState(false);

  // ...rest of your code

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`bg-multi-primary text-white sticky top-0 z-50 bg-opacity-90 transition duration-500 ease-in-out ${
        isScrolled ? "py-0 shadow-2xl border-b-2" : "py-2"
      }`}
    >
      <RootContainer>
        {/**   <div className="flex items-center justify-between py-4">
          <div>
            <h1 className="text-xl font-bold uppercase">Solutions</h1>
          </div>
          <nav className=" items-center gap-4 hidden lg:flex">{Links}</nav>

          {/* mobile nav  
          {isShow && (
            <nav className=" w-full bg-gray-400 absolute left-0 top-12 items-center gap-8 flex-col justify-center text-center z-50 lg:hidden block">
              {Links}
            </nav>
          )}

          <div className="flex items-center">
            <SimpleBtn className="lg:block hidden mr-4 bg-transparent">
              <Link href="/registration">Sing up</Link>
            </SimpleBtn>
            <SimpleBtn className="lg:block hidden">
              <Link href="/login">Sign in</Link>
            </SimpleBtn>
            <button onClick={() => setIsShow((prev) => !prev)}>
              {isShow ? (
                <MdClose className="h-8 w-8 cursor-pointer block lg:hidden" />
              ) : (
                <FiMenu className="h-8 w-8 cursor-pointer block lg:hidden" />
              )}
            </button>
          </div>
        </div>

      */}

        {/* /// test  */}
        <div className="navbar backdrop-blur-xl ">
          <div className="navbar-start">
            <div className="dropdown z-50">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-multi-primary rounded-box w-52"
              >
                {Links}
                <SimpleBtn className="mr-4 bg-transparent">
                  <Link href="/registration">Sing up</Link>
                </SimpleBtn>
                <SimpleBtn className="">
                  <Link href="/login">Sign in</Link>
                </SimpleBtn>
              </ul>
            </div>
            <Link
              className="bg-none font-bold text-xl hidden lg:block uppercase"
              href="/"
            >
              Solutions
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{Links}</ul>
          </div>
          <div className="navbar-end">
            <SimpleBtn className="mr-4 bg-transparent hidden lg:block">
              <Link href="/registration">Sing up</Link>
            </SimpleBtn>
            <SimpleBtn className="hidden lg:block">
              <Link href="/login">Sign in</Link>
            </SimpleBtn>
            <a className="btn btn-ghost normal-case bg-transparent text-xl block lg:hidden">
              Solutions
            </a>
          </div>
        </div>
      </RootContainer>
    </div>
  );
};

export default Header;
