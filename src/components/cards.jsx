import React from 'react'

function cards() {
    return (
        <div className="pt-0 pb-24 bg-[#f1f1f1] h-4/5 w-full">
            <div className="container m-auto h-full w-full">
                <div className="grid grid-cols-12 gap-x-4 gap-y-4 h-4/6 w-full font-['neue_Montreal']">
                    <div className="col-span-6 bg-[#004d43] rounded-xl flex justify-center items-center relative w-full h-full">
                        <div className="flex justify-center items-center w-full h-full">
                            <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" className="w-36" />
                        </div>
                        <div className="card-info absolute left-10 bottom-9 border-[0.100vw] border-[#cdea68] text-[#cdea68] font-normal text-base px-3 py-2 leading-none rounded-full">
                            &copy;2019-2022
                        </div>
                    </div>
                    <div className="col-span-3 bg-[#212121] rounded-xl flex justify-center items-center relative w-full h-full">
                        <a href="#" className="w-full h-full ">
                            <div className="flex justify-center items-center w-full h-full">
                                <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" className="w-36" />
                            </div>
                            <div className="card-info absolute left-10 bottom-9 border-[0.100vw] border-zinc-100 text-zinc-100 font-normal text-base px-3 py-2 leading-none rounded-full">
                                RATING 5.0 ON CLUTCH
                            </div>
                        </a>
                    </div>
                    <div className="col-span-3 bg-[#212121] rounded-xl flex justify-center items-center relative w-full h-full">
                        <a href="#" className="w-full h-full ">
                            <div className="flex justify-center items-center w-full h-full">
                                <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" className="w-28" />
                            </div>
                            <div className="card-info absolute left-10 bottom-9 border-[0.100vw] border-zinc-100 text-zinc-100 font-normal text-base px-3 py-2 leading-none rounded-full">
                                BUSINESS BOOTCAMP ALUMNI
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default cards