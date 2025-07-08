// import React from "react";
// import { FaBootstrap, FaHtml5 } from "react-icons/fa";
// import { FaCss3Alt } from "react-icons/fa6";
// import { motion } from "framer-motion";
// import {
//   RiJavascriptLine,
//   RiReactjsLine,
//   RiTailwindCssFill,
// } from "react-icons/ri";

// const Technologies = () => {
//   return (
//     <div className="pb-24">
//       <motion.h2
//         whileInView={{ opacity: 1, y: 0 }}
//         initial={{ opacity: 0, y: -100 }}
//         transition={{ duration: 1 }}
//         className="my-20 text-center text-4xl"
//       >
//         Technologies
//       </motion.h2>
//       <motion.div
//         whileInView={{ opacity: 1, x: 0 }}
//         initial={{ opacity: 0, x: -100 }}
//         transition={{ duration: 1.5 }}
//         className="flex flex-wrap items-center justify-center gap-4"
//       >
//         <div className="flex items-center p-4 w-64">
//           <RiReactjsLine className="text-7xl text-cyan-400" />
//           <p className="text-2xl px-1">React</p>
//         </div>

//         <div className="flex items-center p-4 w-64">
//           <RiTailwindCssFill className="text-7xl text-cyan-600" />
//           <p className="text-2xl px-1">Tailwind CSS</p>
//         </div>
//         <div className="flex items-center p-4 w-64">
//           <FaBootstrap className="text-7xl text-purple-600" />
//           <p className="text-2xl px-1">Bootstrap</p>
//         </div>
//         <div className="flex items-center p-4 w-64">
//           <RiJavascriptLine className="text-7xl text-yellow-400" />
//           <p className="text-2xl px-1">JavaScript</p>
//         </div>
//         <div className="flex items-center p-4 w-64">
//           <FaCss3Alt className="text-7xl text-blue-600" />
//           <p className="text-2xl px-1">CSS</p>
//         </div>
//         <div className="flex items-center p-4 w-64">
//           <FaHtml5 className="text-7xl text-orange-500" />
//           <p className="text-2xl px-1">HTML</p>
//         </div>

//       </motion.div>
//     </div>
//   );
// };

// export default Technologies;

import React from "react";
import { FaBootstrap, FaHtml5, FaNodeJs } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { motion } from "framer-motion";
import {
  RiJavascriptLine,
  RiReactjsLine,
  RiTailwindCssFill,
} from "react-icons/ri";

const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <div className="flex items-center p-4 w-64">
          <RiReactjsLine className="text-7xl text-cyan-400" />
          <p className="text-2xl px-1">React</p>
        </div>

        <div className="flex items-center p-4 w-64">
          <RiTailwindCssFill className="text-7xl text-cyan-600" />
          <p className="text-2xl px-1">Tailwind CSS</p>
        </div>

        <div className="flex items-center p-4 w-64">
          <FaBootstrap className="text-7xl text-purple-600" />
          <p className="text-2xl px-1">Bootstrap</p>
        </div>

        <div className="flex items-center p-4 w-64">
          <RiJavascriptLine className="text-7xl text-yellow-400" />
          <p className="text-2xl px-1">JavaScript</p>
        </div>

        <div className="flex items-center p-4 w-64">
          <FaCss3Alt className="text-7xl text-blue-600" />
          <p className="text-2xl px-1">CSS</p>
        </div>

        <div className="flex items-center p-4 w-64">
          <FaHtml5 className="text-7xl text-orange-500" />
          <p className="text-2xl px-1">HTML</p>
        </div>

        <div className="flex items-center p-4 w-64">
          <FaNodeJs className="text-7xl text-green-600" />
          <p className="text-2xl px-1">Node.js</p>
        </div>

        <div className="flex items-center p-4 w-64">
          <SiExpress className="text-7xl text-red-800" />
          <p className="text-2xl px-1">Express</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Technologies;
