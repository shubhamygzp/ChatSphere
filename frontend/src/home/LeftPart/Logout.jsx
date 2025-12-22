import React from "react";
import { BiLogOut } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";

function Logout() {
  return (
    <div className="h-[10vh]">
      <div>
        <BiLogOut className="text-5xl text-white hover:bg-slate-700 duration-300 cursor-pointer rounded-full p-2 ml-2 mt-1" />
      </div>
    </div>
  );
}

export default Logout;
