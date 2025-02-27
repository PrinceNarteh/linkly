import React from "react";
import { useSession } from "next-auth/react";
import Image from  'next/image'
import styles from "./Navbar.module.css";
const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

const Navbar = () => {
  const { data: session, status } = useSession();
  const button = status;
  console.log(button);
  return (
    <div>
      <div className="flex flex-row items-center justify-between px-12 py-4">
        {/* Logo */}
        <div>
          <h1 className="text-black font-bold"><span className="underline decoration-teal-500">
              shorten<span className="text-teal-500">.</span>it </span></h1>
        </div>

        {/* Links */}
        <div>
          <ul className="flex flex-row justify-between ">
            <a href="#" className="mx-6">
              <li>Features</li>
            </a>
            <a href="#" className="mx-6">
              <li>Use Cases</li>
            </a>
            <a href="#" className="mx-6">
              <li>Statistics</li>
            </a>
          </ul>
        </div>
        {/* Button */}
        <div>
          {button === "unauthenticated" ? (
            <button className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 px-4 py-3 w-full">
              {" "}
              Login
            </button>
          ) : (
            <button className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 px-4 py-3 w-full">
              {" "}
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
