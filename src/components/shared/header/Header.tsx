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
  console.log(session);

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

  // navLinks for authenticated user
  const loggedUserLinks = (
    <>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <div className="indicator">
            <FaBell className="h-6 w-6" />
            <span className="badge badge-sm indicator-item">8</span>
          </div>
        </label>
        <div
          tabIndex={0}
          className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
        >
          <div className="card-bod">
            <ul className="menu bg-base-200 w-56 rounded-box">
              <li>
                <Link href="#">
                  <FaMessage />
                  Your order has been updated
                </Link>
              </li>
              <li>
                <Link href="#">
                  <FaMessage />
                  Buyer messages
                </Link>
              </li>
              <li>
                <Link href="#">
                  <FaMessage />
                  Check order
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <div className="indicator">
            <FaMessage className="h-6 w-6" />
            <span className="badge badge-xs badge-primary bg-multi-secondary indicator-item"></span>
          </div>
        </label>
        <div
          tabIndex={0}
          className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
        >
          <div className="card-bod">
            <ul className="menu bg-base-200 w-56 rounded-box">
              <li>
                <Link href="#">
                  <FaMessage />
                  Your order has been updated
                </Link>
              </li>
              <li>
                <Link href="#">
                  <FaMessage />
                  Buyer messages
                </Link>
              </li>
              <li>
                <Link href="#">
                  <FaMessage />
                  Check order
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img
              src={
                session?.user?.image ||
                "https://avatars.githubusercontent.com/u/91216500?v=4"
              }
            />
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
    </>
  );

  const [isScrolled, setIsScrolled] = useState(false);

  // is used for scrolling
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
    <>
      <div
        className={`bg-multi-icon-bg dark:bg-multi-title text-black dark:text-white sticky top-0 z-50 bg-opacity-90 transition duration-500 ease-in-out ${
          isScrolled ? "py-0 shadow-2xl border-b-2" : "py-2"
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
                      <div className="flex items-center gap-4">
                        <ThemeSwitcher />
                        <SimpleBtn className="mr-4 bg-transparent hidden lg:block hover:text-white text-black">
                          <Link
                            className="text-black hover:text-white dark:text-white"
                            href="/registration"
                          >
                            Register
                          </Link>
                        </SimpleBtn>
                        <SimpleBtn className="hidden lg:block text-white">
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
                    <SimpleBtn className="mr-4 bg-transparent hidden lg:block hover:text-white">
                      <Link
                        className="text-black hover:text-white dark:text-white"
                        href="/registration"
                      >
                        Register
                      </Link>
                    </SimpleBtn>
                    <SimpleBtn className="hidden lg:block text-white">
                      <Link href="/login">Sign in</Link>
                    </SimpleBtn>
                  </div>
                )}
              </div>
              <a className="btn btn-ghost normal-case bg-transparent text-xl block lg:hidden">
                Solutions
              </a>
            </div>
          </div>
        </RootContainer>
      </div>
      {/* bottom navbar */}
      <div className="bg-multi-bg border-y-[1px] py-2 border-multi-primary border-opacity-50">
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
