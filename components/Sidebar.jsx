"use client";
import { useState } from "react";

const Sidebar = () => {
  const [showMenu, setshowMenu] = useState(true);
  const Svg = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
      <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
    </svg>
  );
  const Demo = (
    <svg
      fill="#ffffff"
      height="24px"
      width="24px"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 330 330"
    >
      <g strokeWidth="0"></g>
      <g strokeLinecap="round" strokeLinejoin="round"></g>
      <g>
        <path
          id="XMLID_222_"
          d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"
        ></path>
      </g>
    </svg>
  );
  return (
    <>
      <div
        className={` bg-gray-800 text-white h-screen p-4 transition-all duration-300  z-30 relative ${
          showMenu ? "w-64" : "w-16"
        }`}
      >
        <button
          onClick={() => {
            setshowMenu(!showMenu);
          }}
          className={`absolute hidden lg:block bg-white text-black p-1 rounded-full left-[-12px] transition-all duration-300  top-10 ${
            showMenu ? "" : "rotate-180"
          }`}
        >
          {Svg}
        </button>
        <a href="/dashboard" className=" text-xl font-bold mb-4  hover:bg-gray-700">
              {showMenu ? <p>Sidebar</p> : Demo}
            </a>
        <ul>
          <li>
            <a href="/dashboard" className="block py-2 px-4 hover:bg-gray-700">
              {showMenu ? <p>Dashboard</p> : Demo}
            </a>
          </li>
          <li>
            <a href="/widgets" className="block py-2 px-4 hover:bg-gray-700">
              {showMenu ? <p>Widgets</p> : Demo}
            </a>
          </li>
          <li>
            <a href="/settings" className="block py-2 px-4 hover:bg-gray-700">
              {showMenu ? <p>Settings</p> : Demo}
            </a>
          </li>
          <li>
            <a href="/login" className="block py-2 px-4 hover:bg-gray-700">
              {showMenu ? <p>Login</p> : Demo}
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
