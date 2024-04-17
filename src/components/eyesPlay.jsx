import React from 'react'
import Eyes from "./eyes";

function eyesPlay() {

    return (
        <div className="w-full h-screen overflow-hidden">
            <div data-scroll data-scroll-speed="-0.8" className="image-wrapper flex items-center justify-center w-full h-screen bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1.jpg')] bg-cover bg-top bg-no-repeat">
                <div className="container m-auto">
                    <Eyes />
                </div>
            </div>
        </div>
    )
}

export default eyesPlay