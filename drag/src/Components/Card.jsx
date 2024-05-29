import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function Card({ data, refrence }) {
  return (
    <>
      <motion.div
        drag
        dragConstraints={refrence}
        whileDrag={{scale:1.1}}
        dragElastic={.1}
        dragTransition={{bounceDamping:30 , bounceStiffness: 100}}
        className="relative flex-shrink-0 bg-zinc-800/80 h-64 w-48 rounded-[30px] text-white px-5 py-8 overflow-hidden"
      >
        <FaRegFileAlt />
        <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p>
        <div className="footer absolute bottom-0 w-full left-0">
          <div className="flex justify-between items-center mb-5 px-5">
            <h5>{data.filesize}</h5>
            <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
              {data.close ? (
                <IoClose />
              ) : (
                <LuDownload size=".8rem" color="#fff" />
              )}
            </span>
          </div>
          {data.tag.isOpen && (
            <div
              className={`tag w-full py-2 ${
                data.tag.tagColor === "blue" ? "bg-blue-500" : "bg-green-500"
              } flex items-center justify-center`}
            >
              <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
}

export default Card;
