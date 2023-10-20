'use client'

import { useState } from 'react'

import MenuButton from '@/components/MenuButton'
import HomeLink from '@/components/HomeLink'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Link from 'next/link'


export default function Navigation({ children }) {
    const [menuOpen, setMenuOpen] = useState(false)
    const pathname = usePathname()

    const navItems = {
        closed: {
            scale: 0.9,
            translateY: '70%',
            transition: {
                type: 'easeInOut',
                duration: 0.4,
            }
        },
        open: {
            scale: 1,
            translateY: 0,
            transition: {
                type: 'easeInOut',
                duration: 0.4,
            }
        }
    }


    const impressum = {
        closed: {
            opacity: 0,
            transition: {
                type: 'easeInOut',
                duration: 0.1,
                delay: 0
            }
        },
        open: {
            opacity: 1,
            transition: {
                type: 'easeInOut',
                duration: 0.4,
                delay: 0.4
            }
        }
    }


    return (
        <main className="flex min-h-screen flex-col justify-center">
            <motion.div
                className='bg-gradient-to-br from-[#d6dbdc] to-white h-[100svh] w-full z-20 grid place-items-center'
                animate={{ y: menuOpen ? '-50%' : '0' }}
                transition={{ type: 'easeInOut', duration: 0.4 }}
            >

                {children}

            </motion.div>

            <nav className='absolute bottom-0 left-0 w-full h-1/2'>

                <motion.div
                    initial='closed'
                    animate={menuOpen ? 'open' : 'closed'}
                    variants={navItems}
                    className='flex flex-row gap-5 px-5 pt-5 overflow-auto hide-scrollbar'
                >

                    <HomeLink
                        title='HOME'
                        href='/'
                        setMenuOpen={setMenuOpen}
                        current={pathname === '/'}
                    >
                        <div
                            className="aspect-[1.618] w-[70%] relative group-hover:rotate-3 transition-transform"
                        >
                            <div
                                className={`absolute bg-green-400 left-0 top-1/2 w-[30%] h-1/2 rounded-r-full`}
                            ></div>
                            {/* yellow */}
                            <div
                                className={`absolute bg-[#F4E869] left-[30%] top-1/2 w-[20%] h-1/2 rounded-bl-full`}
                            ></div>
                            {/* blue */}
                            <div
                                className={`absolute bg-[#072541] left-[70%] top-1/2 w-[30%] h-1/2 rounded-br-full`}
                            ></div>
                            {/* red */}
                            <div
                                className={`absolute bg-[#F8BDEB] left-0 top-0 w-[20%] h-1/2 rounded-bl-full`}
                            ></div>
                            {/* sky */}
                            <div
                                className={`absolute bg-[#5272F2] left-[20%] top-0 w-[30%] h-1/2 rounded-full`}
                            ></div>
                            <div
                                className={`absolute bg-gray-300 left-[50%] top-0 w-[20%] h-1/2`}
                            ></div>
                        </div>
                    </HomeLink>

                    <HomeLink
                        title='PROJECTS'
                        href='/projects'
                        setMenuOpen={setMenuOpen}
                        current={pathname === '/projects'}
                    >
                        <div
                            className="aspect-[1.618] w-[70%] relative group-hover:-rotate-3 transition-transform justify-center flex flex-none overflow-hidden"
                        >
                            <div className='h-full w-full'>
                                {/* red */}
                                <div
                                    className={`absolute left-[25%] bg-[#F8BDEB] w-[20%] h-full rounded-bl-full`}
                                ></div>
                                {/* sky */}
                                <div
                                    className={`absolute left-[45%] bg-[#5272F2] w-[30%] aspect-square rounded-full`}
                                ></div>
                            </div>

                        </div>
                    </HomeLink>

                    <HomeLink
                        title='ABOUT'
                        href='/about'
                        setMenuOpen={setMenuOpen}
                        current={pathname === '/about'}
                    >
                        <div
                            className="aspect-[1.618] w-[70%] relative group-hover:scale-105 transition-transform justify-center flex flex-none overflow-hidden"
                        >
                            <div className='h-full w-full'>
                                <div
                                    className={`absolute bg-[#072541] w-[70%] left-[15%] h-full rounded-t-full rounded-br-full relative`}
                                >
                                    <div
                                        className={`bg-white w-[40%] h-[70%] rounded-t-full absolute bottom-0 left-[30%]`}
                                    ></div>

                                    <div
                                        className={`bg-[#F4E869] w-[20%] aspect-square rounded-full absolute bottom-[15%] left-[50%] transform -translate-x-1/2`}
                                    ></div>

                                </div>

                            </div>
                        </div>

                    </HomeLink>

                    

                </motion.div>

            </nav>

            <motion.span
                className='absolute left-5 bottom-5 text-gray-300 text-sm'
                initial='closed'
                animate={menuOpen ? 'open' : 'closed'}
                variants={impressum}
            >
                <Link href='/impressum' onClick={() => setMenuOpen(false)}>
                Impressum
                </Link>
            </motion.span>

            <MenuButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        </main>
    )
}
