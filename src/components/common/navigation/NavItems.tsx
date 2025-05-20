import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import type { NavItemsProps } from "../../../types/index";
import { cn } from "../../../lib/utils";
import { ChevronDown, ChevronRight } from "lucide-react";

export default function NavItems({ items, setOpen }: NavItemsProps) {
  const path = useLocation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleMenu = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  if (!items?.length) {
    return null;
  }

  return (
    <nav className="grid items-start gap-3">
      {items.map((item, index) => {
        const Icon = item.icon;
        const isActive =
          path.pathname === item.href ||
          item.items?.some((subItem) => path.pathname === subItem.href);
        return (
          <div key={index} className="text-muted-foreground">
            {item.items ? (
              // Render dropdown menu
              <div className="relative group">
                <span
                  className={cn(
                    "flex items-center rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-white hover:text-red-500 cursor-pointer",
                    isActive ? " text-white" : "transparent",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                  onClick={() => {
                    toggleMenu(index);
                  }}
                >
                  <Icon className="mr-2 h-4 w-4" />
                  <div className="flex justify-between w-full ">
                    <span>{item.title}</span>
                    {openIndex === index ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                  </div>
                </span>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300",
                    openIndex === index ? "block" : "hidden"
                  )}
                >
                  {item.items.map((subItem, subIndex) => {
                    const Icon = subItem.icon;
                    return (
                      <Link key={subIndex} to={subItem.href || "/"}>
                        <span
                          className={cn(
                            "ml-6 mt-2 flex items-center rounded-md px-3 py-2 text-sm text-white hover:bg-white hover:text-red-500 cursor-pointer",
                            path.pathname === subItem.href
                              ? "bg-white text-red-500"
                              : ""
                          )}
                          onClick={() => {
                            if (setOpen) setOpen(false);
                          }}
                        >
                          <Icon className="mr-2 h-4 w-4" />
                          {subItem.title}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ) : (
              // Render regular link
              item.href && (
                <Link
                  key={index}
                  to={item.disabled ? "/" : item.href}
                  onClick={() => {
                    if (setOpen) setOpen(false);
                  }}
                >
                  <span
                    className={cn(
                      "flex items-center rounded-md px-3 py-2 text-sm font-medium cursor-pointer text-white hover:bg-white hover:text-red-500",
                      path.pathname === item.href ||
                        path.pathname.startsWith(item.href)
                        ? "bg-white text-red-500"
                        : "transparent",
                      item.disabled && "cursor-not-allowed opacity-80"
                    )}
                  >
                    <Icon className="mr-2 h-4 w-4" />
                    <span>{item.title}</span>
                  </span>
                </Link>
              )
            )}
          </div>
        );
      })}
    </nav>
  );
}
