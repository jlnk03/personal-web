'use client'
import Link from "next/link"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function MotionLink({ href, className }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link 
            href={href}
            className={`inline-flex items-center justify-center relative overflow-hidden ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative w-full h-6 flex items-center justify-center">
                <AnimatePresence mode="popLayout">
                    {!isHovered && (
                        <motion.span
                            className="absolute"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                            key="text"
                        >
                            Discover
                        </motion.span>
                    )}
                    {isHovered && (
                        <motion.svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth={3} 
                            stroke="currentColor" 
                            className="w-6 h-6 absolute"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                            key="arrow"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" 
                            />
                        </motion.svg>
                    )}
                </AnimatePresence>
            </div>
        </Link>
    )
} 