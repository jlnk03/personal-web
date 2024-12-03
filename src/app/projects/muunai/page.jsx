'use client'
import Link from "next/link"
import { useRef, useState } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import MotionLink from "@/components/MotionLink"

export default function Page() {
    const [isHovered, setIsHovered] = useState(false);
    const containerRef = useRef(null);
    
    const { scrollYProgress } = useScroll({
        container: containerRef,
        offset: ["start", "end start"]
    });

    // Transform values with tighter ranges for quicker completion
    const reportY = useTransform(scrollYProgress, 
        [0, 0.15, 0.2, 1],
        [200, 0, 0, 0]
    );
    const reportScale = useTransform(scrollYProgress, 
        [0, 0.1, 0.15, 1],
        [0.9, 0.95, 1, 1]
    );
    const reportOpacity = useTransform(scrollYProgress, 
        [0.05, 0.10, 0.2, 1],
        [0, 1, 1, 1]
    );
    
    // First image moves less and completes earlier
    const firstImageY = useTransform(scrollYProgress, 
        [0, 0.15, 0.2, 1],
        [0, 50, 50, 50]
    );
    const firstImageScale = useTransform(scrollYProgress, 
        [0, 0.15, 0.2, 1],
        [1, 0.98, 0.98, 0.98]
    );
    const firstImageRotate = useTransform(scrollYProgress, 
        [0, 0.15, 0.2, 1],
        [0, -5, -5, -5]
    );

    return (
        <div 
            ref={containerRef}
            className="w-full h-full bg-blue-950 text-white flex justify-center overflow-y-auto pt-10 z-[-3] relative"
        >
            {/* Background gradients */}
            <div className="absolute inset-0 z-[-1]">
                <div className="absolute top-[-10%] left-[-20%] w-[70%] h-[40%] rounded-full bg-blue-500/20 blur-[100px]" />
                <div className="absolute top-[20%] right-[-10%] w-[50%] h-[60%] rounded-full bg-purple-500/20 blur-[100px]" />
                <div className="absolute bottom-[-20%] left-[10%] w-[60%] h-[50%] rounded-full bg-cyan-500/20 blur-[100px]" />
            </div>

            <div className="max-w-5xl w-full px-5 flex flex-col gap-3">
                <motion.h1 
                    className="sm:text-9xl text-6xl font-bold"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    muunai
                </motion.h1>
                
                <motion.span 
                    className="text-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    medical report automation
                </motion.span>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <MotionLink 
                        href="https://muunai.com" 
                        className="px-6 py-3 bg-sky-400 text-black rounded-full my-10 w-[140px] hover:bg-sky-300 transition-colors"
                    />
                </motion.div>

                <div className="relative h-[900px] mb-20">
                    {/* First image */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.6 }}
                        style={{ 
                            y: firstImageY,
                            scale: firstImageScale,
                            rotate: firstImageRotate,
                            transformOrigin: "left top"
                        }}
                        className="sticky top-20 w-full"
                    >
                        <img 
                            src="/muunai_app.png" 
                            alt="muunai app" 
                            className="w-full rounded-xl shadow-xl"
                        />
                    </motion.div>
                    
                    {/* Report image */}
                    <motion.div 
                        className="absolute w-full left-0 top-0"
                        style={{ 
                            y: reportY,
                            scale: reportScale,
                            opacity: reportOpacity,
                        }}
                    >
                        <img 
                            src="/muunai_report.png" 
                            alt="muunai report" 
                            className="w-full rounded-xl shadow-2xl"
                        />
                    </motion.div>
                </div>

                <motion.div 
                    className="relative z-10 p-8 pb-48 mt-24"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <span className="block text-lg leading-relaxed">
                        Physicians spend a significant amount of time writing medical reports. muunai automates this process by recording the conversation between doctors and patients. With modern AI-technology, the conversation is transcribed and converted to a structured report. By using muunai, doctors can focus on what is most important: the patient.
                    </span>
                </motion.div>
            </div>
        </div>
    )
}