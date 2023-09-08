"use client"
import Image from "next/image";
import Image1 from "@/public/shang-chi.jpg";
import Image2 from "@/public/justice-league.jpg";
import Image3 from "@/public/spiderman.jpg";
import Image4 from "@/public/smallville.jpg";
import Image5 from "@/public/the-flash.jpg";
import Image6 from "@/public/endgame.jpg";
import Image7 from "@/public/blue-bettle.jpg";
import Image8 from "@/public/black-adam.jpg";
import Image9 from "@/public/man-of-steal.jpg";
import Image10 from "@/public/after-earth.jpg";
import { useRouter } from "next/navigation";





export default function Movies() {
  const Shows = [
    {image:Image1, title:"Shang-chi and...", url:"/movies/shang-chi"},
    {image:Image2, title:"Justice League", url:"/movies/justice-league"},
    {image:Image3, title:"Spiderman across the spider", url:"/movies/spiderman-into"},
    {image:Image4, title:"Smallville", url:"/movies/smallville"},
    {image:Image5, title:"The Flash", url:"/movies/the-flash"},
    {image:Image6, title:"Avengers End Game", url:"/movies/end-game"},
    {image:Image7, title:"Blue Bettle", url:"/movies/blue-bettle"},
    {image:Image8, title:"Black Adam", url:"/movies/black-adam"},
    {image:Image9, title:"Man of Steal", url:"/movies/man-of-steal"},
    {image:Image10, title:"After Earth", url:"/movies/after-earth"}
  ]
  const router = useRouter()
  return (
    <div>
     
      
      <h1 className=" text-white  lg:px-24 px-5 font-semibold py-2 text-left">Action Movies</h1>
      <div className="flex  justify-center">
      <div className=" scroll flex overflow-x-auto  md:scrollbar-default scrollbar-hide   space-x-8 w-[90%] lg:w-[85%]">
       {Shows.map((show, index) => (
         <div key={index} className=" flex flex-col items-center flex-shrink-0   h-auto w-auto ">
         <Image
         onClick={() => router.push(show.url)}
           src={show.image}
           alt={''}
           className=" h-[200px]  w-[200px] "
         />
         <h1 onClick={() => router.push(show.url)} className=" cursor-default md:cursor-pointer hover:text-blue-500 text-white">{show.title}</h1>
       </div>
       ))}
      </div>
    </div>
    </div>
  );
}
