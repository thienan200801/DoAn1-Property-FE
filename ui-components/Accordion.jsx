import React, { useState } from "react";
import { IconChevronDown, IconChevronUp } from "@tabler/icons";
const Accordion = ({ header, detail }) => {
  const [display, setDisplay] = useState("hidden");
  const handleDisplay = () => {
    setDisplay(display === "hidden" ? "block" : "hidden");
  };

  return (
    <div>
      <div className="bg-white mx-auto">
        <div
          onClick={handleDisplay}
          className={`px-4 py-4 transition duration-500 cursor-pointer font-semibold text-lg rounded flex justify-start items-center gap-4  ${
            display === "hidden"
              ? "text-primary hover:bg-primary hover:text-white border-t"
              : "text-white bg-primary"
          }`}
        >
          {display === "hidden" ? <IconChevronDown /> : <IconChevronUp />}
          <span> {header} </span>
        </div>
        <p
          className={`text-gray-700 text-base leading-5 mt-4 px-8 pb-4 ${display}`}
        >
          {detail}
        </p>
      </div>
    </div>
  );
};

export default Accordion;
