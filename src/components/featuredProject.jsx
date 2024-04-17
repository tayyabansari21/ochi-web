import { motion, useAnimation } from 'framer-motion';
import React from 'react'
import { FaCircle } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";



function featuredProject() {

    const cards = [useAnimation(), useAnimation(), useAnimation(), useAnimation()];

    const handleHover = (index) => {
        cards[index].start({ y: "0%" });
    }

    const handleHoverEnd = (index) => {
        cards[index].start({ y: "100%" });
    }


    return (
        <div className="min-h-screen w-full bg-[#f1f1f1] rounded-t-2xl pt-32">
            <div className="font-['neue_montreal'] border-b-[0.100vw] border-zinc-400 pb-12">
                <div className="container m-auto">
                    <div className="heading">
                        <h2 className="text-6xl text-zinc-900">Featured projects</h2>
                    </div>
                </div>
            </div>
            <div className="featuredBox-grid py-28 font-['neue_montreal']">
                <div className="container m-auto gap-y-16 flex flex-col">
                    <div className="boxCard-wrapper grid grid-cols-2 gap-x-5 relative">

                        {/* <<<======== box 1 ========>>> */}

                        <motion.div onHoverStart={() => { handleHover(0) }} onHoverEnd={() => { handleHoverEnd(0) }} className="box flex flex-col gap-4 col-span-1">
                            <h4 className="flex uppercase items-center justify-start font-normal mb-1">
                                <span className="text-xs mr-3"><FaCircle /></span> FYDE
                            </h4>
                            <div className="image-wrapper group">
                                <div className="w-full h-[38.2vw] overflow-hidden group-hover:scale-95 rounded-xl ease-in-out transition-all duration-500">
                                    <img src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" className="w-full h-full object-cover object-center group-hover:scale-110 rounded-xl ease-in-out transition-all duration-500" />
                                </div>

                                <div className="anim-heading absolute w-fit flex justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-['founders_grotesk_X_condensed'] font-semibold overflow-hidden z-50">
                                    <h1 className="text-[9vw] leading-[5.4vw] h-[6.4vw] text-[#cdea68] ">
                                        {'FYDE'.split("").map((item, index) => (
                                            <motion.span
                                                initial={{ y: "100%" }}
                                                animate={cards[0]}
                                                transition={{ ease: [0.76, 0, 0.24, 1], delay: index * .02 }}
                                                className="h-full relative inline-flex bottom-0">
                                                {item}
                                            </motion.span>
                                        ))}
                                    </h1>
                                </div>

                            </div>
                            <div className="tags-wrapper flex w-full gap-2 font-['neue_montreal']">
                                {["Audit", "Copywriting", "sales deck", "slides Design"].map((items, index) => {
                                    return <a href={index} className="tag py-[0.5vw] leading-none px-[0.75vw] uppercase text-[0.965vw] tracking-wide rounded-full inline-block border-[0.105vw] border-zinc-900 hover:bg-zinc-900 hover:text-zinc-100 transition-all duration-100 ease-linear">
                                        {items}
                                    </a>
                                })}
                            </div>

                        </motion.div>

                        {/* <<<======== box 2 ========>>> */}

                        <motion.div onHoverStart={() => { handleHover(1) }} onHoverEnd={() => { handleHoverEnd(1) }} className="box flex flex-col gap-4 col-span-1">
                            <h4 className="flex uppercase items-center justify-start font-normal mb-1">
                                <span className="text-xs mr-3"><FaCircle /></span> VISE
                            </h4>
                            <div className="image-wrapper group">
                                <div className="w-full h-[38.2vw] overflow-hidden group-hover:scale-95 rounded-xl ease-in-out transition-all duration-500">
                                    <img src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" className="w-full h-full object-cover object-center group-hover:scale-110 rounded-xl ease-in-out transition-all duration-500" />
                                </div>

                                <div className="anim-heading absolute w-fit flex justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-['founders_grotesk_X_condensed'] font-semibold overflow-hidden z-50">
                                    <h1 className="text-[9vw] leading-[5.4vw] h-[6.4vw] text-[#cdea68] ">
                                        {'VISE'.split("").map((item, index) => (
                                            <motion.span
                                                initial={{ y: "100%" }}
                                                animate={cards[1]}
                                                transition={{ ease: [0.76, 0, 0.24, 1], delay: index * .02 }}
                                                className="h-full relative inline-flex bottom-0">
                                                {item}
                                            </motion.span>
                                        ))}
                                    </h1>
                                </div>

                            </div>
                            <div className="tags-wrapper flex w-full gap-2 font-['neue_montreal']">
                                {["Agency", "company presentation"].map((items, index) => {
                                    return <a href={index} className="tag py-[0.5vw] leading-none px-[0.75vw] uppercase text-[0.965vw] tracking-wide rounded-full inline-block border-[0.105vw] border-zinc-900 hover:bg-zinc-900 hover:text-zinc-100 transition-all duration-100 ease-linear">
                                        {items}
                                    </a>
                                })}
                            </div>

                        </motion.div>
                    </div>



                    <div className="boxCard-wrapper grid grid-cols-2 gap-x-5 relative">

                        {/* <<<======== box 3 ========>>> */}

                        <motion.div onHoverStart={() => { handleHover(2) }} onHoverEnd={() => { handleHoverEnd(2) }} className="box flex flex-col gap-4 col-span-1">
                            <h4 className="flex uppercase items-center justify-start font-normal mb-1">
                                <span className="text-xs mr-3"><FaCircle /></span> TRAWA
                            </h4>
                            <div className="image-wrapper group">
                                <div className="w-full h-[38.2vw] overflow-hidden group-hover:scale-95 rounded-xl ease-in-out transition-all duration-500">
                                    <img src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" className="w-full h-full object-cover object-center group-hover:scale-110 rounded-xl ease-in-out transition-all duration-500" />
                                </div>

                                <div className="anim-heading absolute w-fit flex justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-['founders_grotesk_X_condensed'] font-semibold overflow-hidden z-50">
                                    <h1 className="text-[9vw] leading-[5.4vw] h-[6.4vw] text-[#cdea68] ">
                                        {'TRAWA'.split("").map((item, index) => (
                                            <motion.span
                                                initial={{ y: "100%" }}
                                                animate={cards[2]}
                                                transition={{ ease: [0.76, 0, 0.24, 1], delay: index * .02 }}
                                                className="h-full relative inline-flex bottom-0">
                                                {item}
                                            </motion.span>
                                        ))}
                                    </h1>
                                </div>

                            </div>
                            <div className="tags-wrapper flex w-full gap-2 font-['neue_montreal']">
                                {["Brand Identity", "Design Research", "Investor Deck"].map((items, index) => {
                                    return <a href={index} className="tag py-[0.5vw] leading-none px-[0.75vw] uppercase text-[0.965vw] tracking-wide rounded-full inline-block border-[0.105vw] border-zinc-900 hover:bg-zinc-900 hover:text-zinc-100 transition-all duration-100 ease-linear">
                                        {items}
                                    </a>
                                })}
                            </div>

                        </motion.div>

                        {/* <<<======== box 4 ========>>> */}

                        <motion.div onHoverStart={() => { handleHover(3) }} onHoverEnd={() => { handleHoverEnd(3) }} className="box flex flex-col gap-4 col-span-1">
                            <h4 className="flex uppercase items-center justify-start font-normal mb-1">
                                <span className="text-xs mr-3"><FaCircle /></span> PREMIUM BLEND
                            </h4>
                            <div className="image-wrapper group">
                                <div className="w-full h-[38.2vw] overflow-hidden group-hover:scale-95 rounded-xl ease-in-out transition-all duration-500">
                                    <img src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png" className="w-full h-full object-cover object-center group-hover:scale-110 rounded-xl ease-in-out transition-all duration-500" />
                                </div>

                                <div className="anim-heading absolute w-fit flex justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-['founders_grotesk_X_condensed'] font-semibold overflow-hidden z-50">
                                    <h1 className="text-[9vw] leading-[5.4vw] h-[6.4vw] text-[#cdea68] ">
                                        {'PREMIUMBLEND'.split("").map((item, index) => (
                                            <motion.span
                                                initial={{ y: "100%" }}
                                                animate={cards[3]}
                                                transition={{ ease: [0.76, 0, 0.24, 1], delay: index * .02 }}
                                                className={`h-full relative inline-flex bottom-0 ${index === 6 && 'mr-7'} `}>
                                                {item}
                                            </motion.span>
                                        ))}
                                    </h1>
                                </div>

                            </div>
                            <div className="tags-wrapper flex w-full gap-2 font-['neue_montreal']">
                                {["Branded Template"].map((items, index) => {
                                    return <a href={index} className="tag py-[0.5vw] leading-none px-[0.75vw] uppercase text-[0.965vw] tracking-wide rounded-full inline-block border-[0.105vw] border-zinc-900 hover:bg-zinc-900 hover:text-zinc-100 transition-all duration-100 ease-linear">
                                        {items}
                                    </a>
                                })}
                            </div>

                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center pb-24 font-['neue_Montreal']">
                <a href="#" className=" group flex items-center gap-6 min-w-72 rounded-full py-5 relative uppercase bg-zinc-900 hover:bg-zinc-900 ease-linear px-8 text-slate-200 transition justify-between">
                    View all case studies
                    <div className="arrowWrapper bg-slate-200 text-zinc-900 group-hover:text-2xl h-fit w-fit rounded-full p-3 absolute right-4 group-hover:right-2 origin-center scale-[0.5] text-[0px] group-hover:scale-100 transition ease-linear ">
                        <FiArrowUpRight />
                    </div>
                </a>
            </div>
        </div>
    )
}

export default featuredProject