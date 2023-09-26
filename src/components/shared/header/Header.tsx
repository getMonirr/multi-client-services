"use client";
import { useState, useEffect } from "react";
import RootContainer from "../RootContainer";
import { navLinks } from "@/constant/Constant";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SimpleBtn from "../btn/SimpleBtn";
import useAuth from "@/hooks/useAuth";
import { signOut, useSession } from "next-auth/react";
import { FaBell } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import NotifyProfile from "./NotifyProfile";
import { ThemeSwitcher } from "@/components/Theme/ThemeSwitcher";

const Header = () => {
  const pathname = usePathname();

  // use auth
  const { data: session } = useSession();
  // console.log(session);

  // const {user}: null | any = useAuth();
  // console.log(typeof user);

  // nav links generate
  // filter public and private links
  const filterLinks = (
    links: { name: string; path: string }[],
    hasSession: boolean
  ) => {
    if (hasSession) {
      return links;
    } else {
      return links.filter((link) => link.path !== "/dashboard");
    }
  };

  // filter link that needs user authentication
  const filteredLinks = filterLinks(navLinks, !!session);

  const Links = filteredLinks.map(({ name, path }) => {
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

  // category link generate
  const categoryLink = [
    {
      link: "graphics",
      text: "graphics",
    },
    {
      link: "react",
      text: "react",
    },
    {
      link: "development",
      text: "development",
    },
    {
      link: "digital marketing",
      text: "digital marketing",
    },
  ];

  const [isScrolled, setIsScrolled] = useState(0);

  // is used for scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(100);
      } else {
        setIsScrolled(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`bg-multi-icon-bg dark:bg-multi-title text-black dark:text-white sticky top-0 z-50 bg-opacity-90 transition duration-500 ease-in-out ${
          isScrolled > 100  ? "py-0 shadow-2xl border-b-2" : "py-2"
        }`}
      >
        <RootContainer>
          {/* /// test  */}
          <div className="navbar backdrop-blur-3xl ">
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
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-300 rounded-box w-52"
                >
                  {Links}
                  <div>
                    {session ? (
                      <div className="flex items-center gap-4">
                        <ThemeSwitcher />
                        <NotifyProfile />
                      </div>
                    ) : (
                      <div className="flex items-center gap-4 flex-col">
                        <ThemeSwitcher />
                        <SimpleBtn className="bg-transparent block lg:hidden hover:text-white text-black">
                          <Link
                            className="text-black hover:text-white dark:text-white"
                            href="/registration"
                          >
                            Register
                          </Link>
                        </SimpleBtn>
                        <SimpleBtn className="block lg:hidden text-white">
                          <Link href="/login">Sign in</Link>
                        </SimpleBtn>
                      </div>
                    )}
                  </div>
                </ul>
              </div>
              <Link
                className="bg-none font-bold text-xl hidden lg:block uppercase"
                href="/"
              >
                Solution
              </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{Links}</ul>
            </div>
            <div className="navbar-end">
              <div className="hidden sm:flex">
                {session ? (
                  <div className="flex items-center gap-4">
                    <ThemeSwitcher />
                    <NotifyProfile />
                  </div>
                ) : (
                  <div className="flex items-center gap-4">
                    <ThemeSwitcher />
                    <SimpleBtn className="bg-transparent hidden lg:block hover:text-white">
                      <Link
                        className="text-black hover:text-white dark:text-white"
                        href="/registration"
                      >
                        Register
                      </Link>
                    </SimpleBtn>
                    <SimpleBtn className="hidden lg:block text-white">
                      <Link
                        className=" hover:text-white text-white"
                        href="/login"
                      >
                        Log in
                      </Link>
                    </SimpleBtn>
                  </div>
                )}
              </div>
              <Link
                href="/"
                className="btn btn-ghost normal-case bg-transparent text-xl flex items-center lg:hidden"
              >
                Solutions
              </Link>
            </div>
          </div>
        </RootContainer>
      </div>
      {/* bottom navbar */}
      <div className="bg-multi-bg dark:bg-black dark:text-white border-y-[1px] py-2 border-multi-primary border-opacity-50">
        <RootContainer>
          <div className="flex items-center justify-center gap-4 text-xs font-medium">
            {categoryLink.map(({ link, text }) => (
              <Link
                key={link}
                href={link}
                className="hover:text-multi-secondary capitalize"
              >
                {text}
              </Link>
            ))}
          </div>
        </RootContainer>
      </div>
    </>
  );
};

export default Header;
