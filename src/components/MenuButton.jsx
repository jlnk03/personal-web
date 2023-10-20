'use client'

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'


function MenuButton({ menuOpen, setMenuOpen }) {

    const pathname = usePathname()

    return (
        <>
            <div className='absolute bottom-14 flex w-full justify-center'>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setMenuOpen(!menuOpen)}
                    className={`w-20 h-20 rounded-full shadow-lg shadow-black/30 z-30 transition-colors duration-500 ${menuOpen ? 'bg-indigo-600' : 'bg-yellow-600'}`}
                >
                    <svg width="120" height="120" className="z-30 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <defs>
                            <path id="textPath" d="M 10 60 A 50 50 0 1 1 110 60 A 50 50 0 1 1 10 60" />
                        </defs>

                        {menuOpen ? (

                            <text dy="5" fill="white">
                                <textPath href="#textPath" startOffset="40%">
                                    CLOSE
                                </textPath>
                            </text>
                        ) : (
                            <text dy="5" fill={`${pathname.includes("muunai") ? "white" : "black"}`}>
                                <textPath href="#textPath" startOffset="40%">
                                    MENU
                                </textPath>
                            </text>
                        )}
                    </svg>

                </motion.button>
            </div>

        </>
    )
}

export default MenuButton