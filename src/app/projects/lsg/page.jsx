'use client'
import Link from "next/link"
import { useEffect, useRef } from "react"

export default function Page() {

    const blobRef = useRef(null);


    useEffect(() => {
        const blob = blobRef.current;
        
        document.body.onpointermove = function (e) {
            blob.style.left = e.pageX + 'px';
            blob.style.top = e.pageY + 'px';
        };

        // Clean up the event listener when the component unmounts
        return () => {
            // card.removeEventListener('mousemove', handleMouseMove);
            document.body.onpointermove = null;
        };
    }, []);


    return (
        <>
        <div className="w-full h-full flex justify-center pt-10 overflow-y-auto z-[-3]">
            <div className="max-w-5xl w-full px-5 flex flex-col gap-3">

                <h1 className="sm:text-9xl text-6xl font-bold">LSG</h1>
                <span className="text-xl">LLM + Patents</span>

                <Link href="https://lsg.eu" className="w-fit px-6 py-3 bg-orange-400 text-black rounded-full my-10">
                    Go to LSG
                </Link>

                {/* <img src="/swinglab_app.png" alt="swinglab" className="w-full" /> */}

                <span className="pb-48">
                    LSG is a Munich based law firm that specializes on patents. They have a team of over 20 lawyers and patent attorneys that work with clients from all over the world.
                    In this project I worked on building an application that integrates LLMs to automate parts of the patent application process.
                </span>

            </div>

            <div className='backdrop-filter backdrop-blur-sm z-[-2] blur-[150px] w-96 h-96 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-red-200 to-purple-400' ref={blobRef}></div>

        </div>

        {/* <div className="w-full h-full absolute backdrop-filter backdrop-blur-sm z-[-2]"></div> */}

        </>
    )
}