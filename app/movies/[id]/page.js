"use client";
import Layout from "@/components/layout";
import { getAllPost } from "@/components/server";
import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Modal from "@/components/Modal";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Movies from "@/components/movies/Movies";


export default function Page({ params }) {
   const [show, setShow] = useState(false);
  const [disable, setDisable] = useState(false);

  function handleShow() {
    setShow(!show);
    setDisable(true);
  }

  const { id } = params;
  const post = getAllPost(id);

  const path = usePathname();

  return (
    <Layout>
      {show && <Modal show={() => setShow(false)} />}
      <section className=" flex items-center justify-center px-2 my-5  lg:px-16 xl:px-24">
        {post.map((p) => (
          <div
            key={p.id}
            className=" grid grid-cols-1 sm:px-16 md:p-0 md:grid-cols-2"
          >
            <div className=" flex items-center justify-center">
              <Image
                src={p.download}
                alt="image"
                className=" h-[400px] w-[90%] md:w-[380px]   "
              />
            </div>

            <div className=" flex px-5 justify-start flex-col">
              <h1 className=" text-white font-bold text-3xl py-3">{p.name}</h1>
              <p className=" text-white text-[1rem]">{p.title}</p>

              {disable ? (
                <Button className=" my-2">no action</Button>
              ) : (
                <Button
                  onClick={handleShow}
                  variant="contained"
                  // disabled={disable}
                  className=" text-white capitalize my-2 py-2 px-4 bg-red-600 hover:bg-red-700"
                >
                  <Link
                    href={p.download}
                    aria-disabled
                  >
                    download
                  </Link>
                </Button>
              )}
              {/* {show ? "" : <p className="  text-white">Links for download</p>} */}
            </div>
          </div>
        ))}
      </section>
      <Movies/>
    </Layout>
  );
}

export async function generateStaticParams() {
  const mypost = getAllPost();

  return mypost.map((post) => ({
    id: mypost.id,
    fallback: false,
  }));
}
