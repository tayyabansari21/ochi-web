import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";
import Eyes from './eyes';

function start() {
    return (
        <div className="bg-[#cdea68] rounded-t-2xl min-h-screen w-full pt-52 pb-36">
            <div className="container m-auto">
                <div className="flex justify-center items-center h-full w-full flex-col gap-12 relative">
                    <h1 className="text-[15vw] leading-[7.8vw] font-['founders_grotesk_X_condensed'] flex flex-col justify-center items-center gap-[1.25vw] font-bold text-zinc-800">
                        <span className="h-[9.6vw] pt-[2px] ">READY</span>
                        <span className="h-[9.6vw] pt-[2px] ">TO START</span>
                        <span className="h-[9.6vw] pt-[2px] ">THE PROJECT?</span>
                    </h1>
                    <div className="buttons-wrapper flex flex-col gap-3 font-['neue_montreal'] uppercase text-[1.2vw] text-center">
                        <a href="#" className=" group flex items-center gap-6 min-w-64 rounded-full py-4 relative uppercase bg-zinc-800 hover:bg-zinc-950 ease-linear px-7 text-slate-200 transition border-[0.100vw] border-zinc-900 justify-between text-base text-left">
                            Start the project
                            <div className="arrowWrapper bg-slate-200 text-zinbg-zinc-800 group-hover:text-2xl h-fit w-fit rounded-full p-[0.55vw] absolute right-5 group-hover:right-[0.35vw] group-hover:text-zinc-900 origin-center scale-[0.5] text-[0px] group-hover:scale-100 transition ease-linear ">
                                <FiArrowUpRight />
                            </div>
                        </a>
                        or
                        <a href="#" className=" group flex items-center gap-6 min-w-64 rounded-full py-4 relative uppercase bg-transparent hover:bg-zinc-800 ease-linear px-7 text-zinc-900 border-[0.100vw] border-zinc-900 transition hover:text-white justify-between text-base text-left">
                            HELLO@OCHI.DESIGN
                            <div className="arrowWrapper bg-zinc-800 group-hover:bg-zinc-100 text-zinbg-zinc-800 group-hover:text-2xl h-fit w-fit rounded-full p-[0.6vw] absolute right-5 group-hover:right-[0.35vw] group-hover:text-zinc-900 origin-center scale-[0.5] text-[0px] group-hover:scale-100 transition ease-linear ">
                                <FiArrowUpRight />
                            </div>
                        </a>
                    </div>
                    <div className="eyeballContainer absolute h-fit w-fit">
                        <Eyes />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default start