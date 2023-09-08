"use client";
import Image from "next/image";
import BgImage from "../public/netflix-bg-image.jpg";
import {Button} from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function Homepage() {
  const router = useRouter();
  return (
   <section className="">
     <div className="  relative   overflow-y-hidden border-b-[7px] border-gray-700 ">
      <Image
        src={BgImage}
        alt="bg-image"
        className=" object-cover   w-full md:h-[400px] h-[430px]  "
      />
      <div className="gradient absolute    top-0  w-full h-full">
        <div className="flex justify-center px-4 flex-col py-[7rem] items-center w-full">
          <h1 className=" text-white  font-bold  text-center text-4xl">
            Unlimited movies, TV shows, and more
          </h1>
          <h1 className="text-xl text-center py-3 font-medium text-white">
            Watch anywhere. Cancel anytime.
          </h1>
          <Button
            onClick={() => router.replace("/movies")}
            className=" my-3 bg-red-600 rounded-md  hover:bg-red-700 py-2 font-normal text-lg px-4 text-white capitalize"
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
   </section>
  );
}
