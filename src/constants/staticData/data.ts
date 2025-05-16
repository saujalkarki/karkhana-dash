import { GoHome } from "react-icons/go";
import type { NavItem } from "../../types/index";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoBriefcaseOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { FaFileAlt, FaVideo, FaImage } from "react-icons/fa";

export const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard/home",
    icon: GoHome,
  },
  {
    title: "Notification Management",
    href: "/dashboard/notification",
    icon: IoMdNotificationsOutline,
  },
  {
    title: "Content Management",
    icon: IoBriefcaseOutline,
    href: "",
    items: [
      {
        title: "All Content",
        href: "/dashboard/content/all",
        icon: FaFileAlt,
      },
      {
        title: "Video Content",
        href: "/dashboard/content/video",
        icon: FaVideo,
      },
      {
        title: "Images/Slide Content",
        href: "/dashboard/content/image",
        icon: FaImage,
      },
      {
        title: "Text Content",
        href: "/dashboard/content/text",
        icon: FaFileAlt,
      },
    ],
  },
  {
    title: "User Management",
    href: "/dashboard/user",
    icon: FaRegUser,
  },
  {
    title: "Setting",
    href: "/dashboard/setting",
    icon: IoSettingsOutline,
  },
];
