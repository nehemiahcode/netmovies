"use client";
import { PiTelevisionSimple } from "react-icons/pi";
import { AiOutlineFieldTime } from "react-icons/ai";
import { useState, useEffect } from "react";
import { Zoom } from "react-awesome-reveal";


export default function Section2() {
  const [icon, setIcon] = useState(false);

  useEffect(() => {
    const Timer = setInterval(() => {
      setIcon((nexticon) => !nexticon);
    }, 3000);
    return () => {
      clearInterval(Timer);
    };
  }, []);
  return (
    <section className="px-3 py-8 lg:px-16 xl:px-24 grid grid-cols-1 lg:grid-cols-2 border-b-[7px] border-gray-700">
      <div>
        <h1 className="font-bold text-white text-3xl text-center lg:text-left lg:text-5xl">
          Watch everywhere
        </h1>
        <p className="text-lg font-medium  text-center pt-3 lg:text-left text-white">
          Stream unlimited movies and TV shows on your phone, tablet, laptop,
          and TV.
        </p>
      </div>
      <div className=" py-7">
        {icon ? (
          <Zoom>
            <div className=" flex items-center justify-center">
              <span className=" text-8xl flex flex-col items-center text-blue-500">
                <PiTelevisionSimple />
                <span className=" text-white text-lg">Everywhere</span>
              </span>
            </div>
          </Zoom>
        ) : (
          <Zoom>
            <div className=" flex items-center justify-center">
              <span className=" text-8xl  flex flex-col items-center text-white">
                <AiOutlineFieldTime />
                <span className=" text-white text-lg">Anytime</span>
              </span>
            </div>
          </Zoom>
        )}
      </div>
    </section>
  );
}
