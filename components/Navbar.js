"use client"
import { Button } from "@mui/material";
import Logo from "./Logo";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter()
  return (
    <header className="flex justify-between items-center bg-transparent  h-[70px] w-full left-0 px-3  lg:px-20 xl:px-24 sm:px-2">
      <Logo />

      <Button
      onClick={() => router.replace("/")}
        type="button"
        variant="contained"
        className=" bg-red-500 hover:bg-red-600 rounded-md px-5 py-1 h-[40px]  text-white"
      >
        Sign out
      </Button>
    </header>
  );
}
