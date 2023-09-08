"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { useState } from "react";

export default function Accordions() {
  const [selectedKeys, setSelectedKeys] = useState(new Set(["1"]));
  const Accord1 =
    "Netmovies is a web streaming site where you browse and download your favourite movies";
  const Accord2 =
    "It cost nothing, Netmovies is free and open source for everyone";
  const Accord3 =
    "Yes it is fast and responsive, because it is builed with  known and fast technologies";

  return (
    <div className=" w-[93%] sm:w-[80%] md:w-[60%] lg:w-[70%] xl:w-[65%] py-10 mx-auto">
      <Accordion
        variant="splitted"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        <AccordionItem
          key="1"
          className="text-white hover:bg-gray-900 bg-gray-600 font-medium"
          aria-label="Accordion 1"
          title="What is Netmovies?"
        >
          <div className=" text-white">{Accord1}</div>
        </AccordionItem>
        <AccordionItem
          key="2"
          className="text-white hover:bg-gray-900 bg-gray-600 font-medium"
          aria-label="Accordion 2"
          title="How much does Netmovies cost?"
        >
          <div className=" text-white">{Accord2}</div>
        </AccordionItem>

        <AccordionItem
          key="3"
          className="text-white hover:bg-gray-900 bg-gray-600 font-medium"
          aria-label="Accordion 3"
          title="Is Netmovies fast and responsive?"
        >
          <div className=" text-white">{Accord3}</div>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
