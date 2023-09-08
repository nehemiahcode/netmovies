"use client";
import Logo from "./Logo";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";
import { Navbar } from "@nextui-org/react";

export default function Navigation() {
  const router = useRouter();
  return (
    <Navbar shouldHideOnScroll>
      <header className="flex justify-between items-center bg-transparent  h-[70px] w-full  px-3  lg:px-20 xl:px-24 sm:px-2">
        <Logo />

        <Button
          onClick={() => router.replace("/")}
          type="button"
          className=" bg-red-500 hover:bg-red-600 rounded-md px-5 py-1 h-[40px]  text-white"
        >
          Sign out
        </Button>
      </header>
    </Navbar>
  );
}
