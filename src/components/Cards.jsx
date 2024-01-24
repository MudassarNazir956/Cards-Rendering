import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineDownloading } from "react-icons/md";
import { MdCloseFullscreen } from "react-icons/md";
import { motion } from "framer-motion"


const Cards = ({data, reference}) => {
  return (
    <>
        <motion.div 
            drag 
            dragConstraints={reference} 
            whileDrag={{scale: 1.2}} 
            dragElastic={.1}  
            dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }} 
            className='w-60 h-72 relative rounded-[30px] mt-4 p-5 bg-zinc-700/70 overflow-hidden'>
            <FaRegFileAlt color='white' size={18}/>
            <p className='text-zinc-200 mt-3'>{data.desc}</p>
            <div className='h-14 w-full absolute left-0 bottom-12 py-3 flex justify-between px-2 items-center'>
                <h3 className='ml-2 text-white bottom-0'>{data.fileSize}</h3>
                <span className='items-center mr-2 cursor-pointer'>
                    {data.close ? <MdOutlineDownloading color='white' size={23}/> : <MdCloseFullscreen 
                    color='white' size={15} />}
               </span>
            </div>

            {data.tag.isOpen && (
                <div className={`absolute ${data.tag.tagColor === "blue" ?" bg-blue-600": "bg-green-700"} h-14 w-full left-0 bottom-0 flex items-center justify-center text-white cursor-pointer`}>
                <h3>{data.tag.tagLine}</h3>
            </div>
            )}
        </motion.div>
    </>
  )
}

export default Cards