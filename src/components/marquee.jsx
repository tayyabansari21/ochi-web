import { motion } from 'framer-motion'
import React from 'react'

function marquee() {

    return (
        <div className="marquee-section pt-28 pb-16 w-full rounded-t-2xl bg-[#004d43] translate-y-0">
            <div className="text-marquee whitespace-nowrap flex py-6 border-y-[1px] border-zinc-200/50 font-['founders_grotesk_X_condensed'] overflow-hidden   ">
                {['WE ARE OCHI ', 'WE ARE OCHI ', 'WE ARE OCHI '].map((items) => (
                    <motion.h1 initial={{ x: "0%" }} animate={{ x: "-100%" }} transition={{ repeat: Infinity, ease: "linear", duration: 10 }} className='text-[26.5vw] pr-24 tracking-normal h-[16.7vw] uppercase text-zinc-100 font-bold leading-[14vw]'>
                        {items}
                    </motion.h1>
                ))}

            </div>
        </div>
    )
}

export default marquee