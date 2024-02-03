import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  LogOutIcon,
  MoreVertical,
} from "lucide-react";

import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);
  const [activeNavIndex, setActiveNavIndex] = useState(0);
  const [openOptions, setopenOptions] = useState(false);

  const navigate = useNavigate();

  return (
    <aside className="h-screen w-max ">
      <nav className="flex h-full flex-col gap-10 border-r bg-white1 shadow-sm">
        <div
          className={`flex items-center p-4 pb-2 ${expanded ? "justify-between" : "justifycenter"}`}
        >
          {/* <img
            src="https://img.logoipsum.com/243.svg"
            alt="logo"
            className={`cursor-pointer overflow-hidden transition-all ${expanded ? "w-32" : "w-0"}`}
            onClick={() => navigate("/")}
          /> */}

          <h2
            className={`cursor-pointer overflow-hidden font-outfit text-[21px] font-bold text-blue1 transition-all ${expanded ? "w-32" : "w-0"}`}
            onClick={() => navigate("/")}
          >
            DataSpeaks
          </h2>

          <button
            className="rounded-lg bg-gray-50 p-1.5 hover:bg-gray-100"
            onClick={() => {
              setopenOptions(false);
              setExpanded((curr) => !curr);
            }}
          >
            {expanded ? <ChevronLeft /> : <ChevronRight />}
          </button>
        </div>

        <SidebarItem
          activeNavIndex={activeNavIndex}
          setActiveNavIndex={setActiveNavIndex}
          expanded={expanded}
        />

        <div className="relative flex gap-[5px] border-t p-3">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt="user"
            className="h-10 w-10 rounded-full"
          />
          <div
            className={`flex items-center justify-between overflow-hidden transition-all ${expanded ? "ml-3 w-40" : "w-0"}`}
          >
            <div className="leading-4">
              <h4 className="font-semibold">John Doe</h4>
              <span className="text-xs text-gray-600">johndoe@gmail.com</span>
            </div>

            <button
              className="rounded-full p-1.5 hover:bg-gray-100"
              onClick={() => setopenOptions((prev) => !prev)}
            >
              <MoreVertical size={20} />
            </button>
          </div>

          {/* Logout Modal */}
          <div
            className={`absolute bottom-20 left-2 rounded-xl text-white2 ${openOptions && expanded ? "visible w-56 bg-blue1" : "invisible "}`}
          >
            <button
              className="flex cursor-pointer items-center space-x-3 p-4 font-outfit text-lg font-normal text-white2"
              onClick={() => console.log("Implement Log out.")}
            >
              <LogOutIcon size={20} />
              <p>Log out</p>
            </button>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;