import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";

function about() {
    return (
        <div className="bg-[#cdea68] rounded-t-2xl pt-20 pb-14 font-['neue_Montreal'] text-zinc-900">
            <div className="container m-auto ">
                <h1 className='text-[3.6vw] leading-none mb-20'>
                    Ochi is a strategic partner for fast-growing tech <br /> businesses that need to <a className="after:content-[''] relative after:absolute after:-bottom-0 after:h-[0.205vw] after:bg-zinc-900 after:w-full after:left-0" href="#">raise funds</a>, <a className="after:content-[''] relative after:absolute after:-bottom-0 after:h-[0.205vw] after:bg-zinc-900 after:w-full after:left-0" href="#">sell products</a>, <br /> <a className="after:content-[''] relative after:absolute after:-bottom-0 after:h-[0.205vw] after:bg-zinc-900 after:w-full after:left-0" href="#">explain complex ideas</a>, and <a className="after:content-[''] relative after:absolute after:-bottom-0 after:h-[0.205vw] after:bg-zinc-900 after:w-full after:left-0" href="#">hire great people</a>.
                </h1>
            </div>
            <div className="about-desc pt-7 pb-32 border-y-[1px] border-zinc-500">
                <div className="container m-auto">
                    <div className="grid text-lg text-zinc-900 grid-cols-12 ">
                        <div className="col-span-6">
                            <h4>What you can expect:</h4>
                        </div>
                        <div className="col-span-3 tracking-normal">
                            <p className="mb-10">We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.</p>
                            <p>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
                        </div>
                        <div className="col-span-2 flex justify-end items-end flex-col">
                            <ul className="w-5/12">
                                <li>S:</li>
                                {["Instagram", "Behance", "Facebook", "Linkedin"].map((items, index) => {
                                    return <li className={`${index === 0 && 'mt-4'}`}><a key={index} className="after:content-[''] after:h-[0.05vw] relative after:absolute after:left-0 after:-bottom-[0vw] after:bg-zinc-900 after:w-full">{items}</a></li>
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="approach-sect pt-5">
                <div className="container m-auto">
                    <div className="grid grid-cols-2">
                        <div className="left-part col-span-1">
                            <h2 className="text-zinc-900 text-6xl leading-none mb-5">Our approach:</h2>

                            <a href="#" className=" group flex items-center gap-6 max-w-48 rounded-full py-5 relative uppercase bg-zinc-900 hover:bg-black ease-linear px-6 text-slate-200 transition justify-between">
                                Read more
                                <div className="arrowWrapper bg-slate-200 text-zinc-900 group-hover:text-2xl h-fit w-fit rounded-full p-3 absolute right-4 group-hover:right-2 origin-center scale-[0.5] text-[0px] group-hover:scale-100 transition ease-linear ">
                                    <FiArrowUpRight />
                                </div>
                            </a>

                        </div>
                        <div className="right-part col-span-1">
                            <div className="about-image-wrapper overflow-hidden h-full w-full">
                                <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" className="h-full w-full rounded-xl object-cover arrowWrapper-hover:-scale-[0.85] object-center" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default about