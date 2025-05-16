import type { IconType } from "react-icons/lib";
import type { Dispatch, SetStateAction } from "react";

export interface NavItem {
  title: string;
  href: string;
  icon: IconType;
  disabled?: boolean;
  description?: string;
  items?: NavItem[];
}

export interface NavItemsProps {
  items: NavItem[];
  setOpen?: Dispatch<SetStateAction<boolean>>;
}
