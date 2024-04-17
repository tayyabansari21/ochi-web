import { motion } from 'framer-motion';
import React from 'react'
import { LuArrowUpRight } from "react-icons/lu";


function landingPage() {

    return (
        <div data-scroll data-scroll-speed="-.6" className="w-full h-screen pt-48">
            <div className="container m-auto flex flex-col gap-5">
                {['We Create', 'Eye opening', 'Presentations'].map((items, index) => {
                    return <div className="masker overflow-hidden">
                        <div className="w-fit flex items-center">
                            {index === 1 && (
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: "9vw" }}
                                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                                    className='w-[9vw] h-[6vw] mr-4 rounded-md overflow-hidden relative'>
                                    <img src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" className='object-cover object-center h-full w-full' />
                                </motion.div>
                            )}
                            <h1 className="text-[9vw] font-bold uppercase leading-[5vw] h-[6vw] font-['founders_grotesk_X_condensed']  ">
                                {items}
                            </h1>
                        </div>
                    </div>
                })}
            </div>
            <div className="bannerBottom border-t-zinc-400 border-t-[1px] mt-48 font-['Neue_Montreal']">
                <div className="container m-auto py-4 flex items-start justify-between">

                    {["For public and private companies", "From the first pitch to IPO"].map((items) => (
                        <p className='text-xl font-normal text-zinc-900 tracking-tight'>{items}</p>
                    ))}

                    <div className=" group bannerBottom_start-btn flex gap-1 transition">

                        <a href="#" className='h-9 transition ease-in-out px-4 flex items-center group-hover:text-slate-100 group-hover:bg-zinc-900 justify-center leading-normal uppercase font-normal rounded-full text-zinc-900 text-base border-zinc-900 border-[1px]'>Start the Project</a>

                        <a href="#" className=" w-9 h-9 transition ease-in-out text-2xl font-thin flex justify-center items-center group-hover:text-slate-100 group-hover:bg-zinc-900 rounded-full border-zinc-900 border-[1px]">
                            <LuArrowUpRight />
                        </a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default landingPage