import React, { useEffect, useState } from 'react'

function eyes() {


    const [rotate, setRotate] = useState(0);

    useEffect(() => {

        window.addEventListener('mousemove', (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;

            let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle - 180);
        })
    })

    return (
        <div className="flex justify-center items-center gap-10 overflow-hidden">
            <div className="eyeBall w-[14vw] h-[14vw] relative rounded-full bg-zinc-100 font-['neue_montreal'] flex justify-center items-center">
                <h3 className="text-center absolute left-1/2 w-full text-zinc-100 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 uppercase text-xl">Play</h3>
                <div className="h-3/5 w-3/5 rounded-full bg-zinc-800 relative">
                    <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className="eyeBall-line h-1/6 w-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="h-full w-1/6  rounded-full bg-zinc-100"></div>
                    </div>
                </div>
            </div>

            <div className="eyeBall w-[14vw] h-[14vw] relative rounded-full bg-zinc-100 font-['neue_montreal'] flex justify-center items-center">
                <h3 className="text-center absolute left-1/2 w-full text-zinc-100 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 uppercase text-xl">Play</h3>
                <div className="h-3/5 w-3/5 rounded-full bg-zinc-800 relative">
                    <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className="eyeBall-line h-1/6 w-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="h-full w-1/6  rounded-full bg-zinc-100"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default eyes