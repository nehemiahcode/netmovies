"use client";
import { Button } from "@mui/material";
import Logo from "./Logo";
import { usePathname } from "next/navigation";

export default function Footer() {
  const footerNavs = [
    {
      href: "#javascript:void()",
      name: "Terms",
    },
    {
      href: "#javascript:void()",
      name: "License",
    },
    {
      href: "#javascript:void()",
      name: "Privacy",
    },
    {
      href: "#javascript:void()",
      name: "About us",
    },
  ];
  const pathname = usePathname();
  return (
    <footer className="pt-10">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="space-y-6 sm:max-w-md sm:mx-auto sm:text-center">
          <Logo />
          {pathname === "/movies" ? (
            <p className=" text-white">You are all set for your downloads..</p>
          ) : (
            <p className=" text-white">
              Ready to start downloading about all the movies you&quot;ve been
              waiting for?
            </p>
          )}
          <div className="items-center gap-x-3 space-y-3 sm:flex sm:justify-center sm:space-y-0">
            <Button
              variant="contained"
              disabled={pathname === "/movies" ? true : false}
              
              className={`block capitalize py-2 px-4 text-center text-white font-medium bg-red-600 duration-150 hover:bg-red-500 active:bg-red-700 rounded-lg shadow-lg hover:shadow-none`}
            >
              Let &quot;s get started
            </Button>
          </div>
        </div>
        <div className="mt-10 py-10 border-t items-center text-white justify-between sm:flex">
          <p>© 2022 Netmovies UI Inc. All rights reserved.</p>
          <ul className="flex flex-wrap items-center gap-4 mt-6 sm:text-sm sm:mt-0">
            {footerNavs.map((item, idx) => (
              <li
                key={idx}
                className="text-white hover:text-gray-500 duration-150"
              >
                <p href={item.href}>{item.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
