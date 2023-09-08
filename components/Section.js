"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
    MdOutlineDownloading,
    MdOutlineFileDownloadDone,
} from "react-icons/md";
import Images from "../public/mobile.jpg";

export default function Section() {
  const [icon, setIcon] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIcon((prevIcon) => !prevIcon);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="px-3 py-5 lg:px-16 xl:px-24 grid grid-cols-1 lg:grid-cols-2 border-b-[7px] border-gray-700">
      <div className="flex items-center justify-center relative py-3 ">
        <Image src={Images} alt="" className="lg:h-[350px] h-[300px] w-auto" />
        <div className="absolute bottom-5 ring-2 left-[25%] w-[50%] ring-blue-600 rounded-md py-3 px-3">
          {icon ? (
            <span className=" text-blue-600 text-2xl flex-col flex items-center">
              <MdOutlineDownloading />
              <span className=" text-sm text-white">Downloading...</span>
            </span>
          ) : (
            <span className=" text-white text-2xl flex-col  flex items-center">
              <MdOutlineFileDownloadDone />
              <span className=" text-sm text-white">Downloaded</span>
            </span>
          )}
        </div>
      </div>
      <div className="flex items-center justify-center py-3 flex-col">
        <h1 className="font-bold md:text-left text-center text-3xl lg:text-5xl text-white">
          Download your shows to watch offline
        </h1>
        <p className="text-lg font-medium md:text-left pt-3 text-center text-white">
          Save your favorites easily and always have something to watch.
        </p>
      </div>
    </section>
  );
}
