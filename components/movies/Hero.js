import Search from "../Search";


export default function Hero() {
  return (
    <section className="px-4 py-8 lg:px-16 xl:px-24 flex  flex-col-reverse lg:flex-row ">
      <div>
        <h1 className="font-bold text-3xl lg:text-5xl text-white">Action and Adventure</h1>
        <p className=" text-white py-3">
          {" "}
          Movies move us like nothing else can, whether they are scary, funny,
          dramatic, romantic or anywhere in-between. So many titles, so much to
          experience.
        </p>
      </div>
      <div className=" py-6 flex w-[100%] md:w-[60%] lg:w-[40%] lg:justify-center">
        <Search/>
      </div>
    </section>
  );
}
