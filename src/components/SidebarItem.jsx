import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Edit as EditIcon,
  LayoutDashboard,
  FolderDot,
  UserCircle,
  Video,
  Settings as SettingsIcon,
  LifeBuoy,
} from "lucide-react";

const navLinks = [
  {
    icon: <LayoutDashboard size={28} />,
    text: "Dashboard",
    link: "/",
  },
  {
    icon: <FolderDot size={28} />,
    text: "Projects",
    link: "/projects",
  },
  {
    icon: <EditIcon size={28} />,
    text: "Edit",
    link: "/edit",
  },
  {
    icon: <Video size={28} />,
    text: "Videos",
    link: "/videos",
  },
  {
    icon: <UserCircle size={28} />,
    text: "Profile",
    link: "/profile",
  },
  {
    icon: <SettingsIcon size={28} />,
    text: "Settings",
    link: "/settings",
  },
  {
    icon: <LifeBuoy size={28} />,
    text: "Help",
    link: "/help",
  },
];

const SidebarItem = ({ activeNavIndex, setActiveNavIndex, expanded }) => {
  const navigate = useNavigate();
  return (
    <ul className="flex-1 space-y-3 px-3">
      {navLinks.map(({ icon, text, link, alert }, index) => (
        <li
          key={index}
          className={`group relative my-1 flex cursor-pointer items-center rounded-md px-3 py-2 font-medium transition-colors ${activeNavIndex === index ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-blue1" : "text-gray-600 hover:bg-indigo-50 "}`}
          onClick={() => {
            setActiveNavIndex(index);
            navigate(link);
          }}
        >
          {icon}
          <span
            className={`overflow-hidden text-lg transition-all ${expanded ? "w-51 ml-3" : "w-0"}`}
          >
            {text}
          </span>
          {/* {alert && (
            <div
              className={`absolute right-2 top-2 h-2 w-2 rounded-full bg-indigo-400 ${expanded ? "" : "top-2"}}`}
            ></div>
          )} */}

          {!expanded && (
            <div
              className={`invisible absolute left-full ml-6 -translate-x-3 rounded-md bg-indigo-100 px-2 py-1 text-sm text-blue1 opacity-20 transition-all group-hover:visible group-hover:translate-x-0 group-hover:opacity-100`}
            >
              {text}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default SidebarItem;