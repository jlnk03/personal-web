"use client";

import { useEffect, useRef } from "react";
// import { Mail, GithubLogoIcon, LinkedinIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const cardRef = useRef(null);

  const tiltAngle = 5;

  const skills = [
    "Python",
    "PyTorch",
    "Next.js",
    "TailwindCSS",
    "Flask",
    "Docker",
  ];

  useEffect(() => {
    const card = cardRef.current;
    let isAnimating = false;

    const handleMouseMove = (ev) => {
      if (card && !isAnimating) {
        const rect = card.getBoundingClientRect();
        
        // Check if mouse is actually within the card bounds
        if (
          ev.clientX < rect.left ||
          ev.clientX > rect.right ||
          ev.clientY < rect.top ||
          ev.clientY > rect.bottom
        ) {
          handleMouseLeave();
          return;
        }

        const x = ev.clientX - rect.left;
        const y = ev.clientY - rect.top;

        const xc = card.clientWidth / 2;
        const yc = card.clientHeight / 2;

        const offsetX = ((x - xc) / xc) * tiltAngle;
        const offsetY = ((y - yc) / yc) * tiltAngle;

        card.style.transition = "transform 100ms ease-out";
        card.style.setProperty("--rotate-x", `${-offsetY}deg`);
        card.style.setProperty("--rotate-y", `${offsetX}deg`);
      }
    };

    const handleMouseLeave = () => {
      if (card && !isAnimating) {
        isAnimating = true;
        card.style.transition = "transform 400ms ease-out";
        card.style.setProperty("--rotate-x", "0deg");
        card.style.setProperty("--rotate-y", "0deg");
        
        // Reset the animation flag after transition completes
        setTimeout(() => {
          isAnimating = false;
        }, 400);
      }
    };

    // Use mouseover instead of mousemove for better performance
    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <div className='absolute left-5 top-5 flex flex-row items-end'>
        <div className='h-12 w-20 relative'>
          <div
            className={`absolute bg-[#072541] w-[70%] left-[15%] h-full rounded-t-full rounded-br-full`}
          >
            <div
              className={`bg-[#d6dbdc] w-[40%] h-[70%] rounded-t-full absolute bottom-0 left-[30%] pointer-events-none`}
            ></div>

            <div
              className={`bg-[#F4E869] w-[20%] aspect-square rounded-full absolute bottom-[15%] left-[50%] transform -translate-x-1/2`}
            ></div>
          </div>
        </div>

        <div className='relative -bottom-[0.5rem] -left-2'>
          {" "}
          {/* Adjust the bottom value as needed */}
          <span className='text-4xl font-medium'>bout</span>
        </div>
      </div>

      {/* main */}
      <div className='flex flex-col items-center justify-center w-full h-full px-5'>
        <div
          ref={cardRef}
          className='card-anim bg-orange-50 rounded-3xl sm:w-1/2 w-full shadow-lg shadow-black/20 p-10 relative'
        >
          <div className='flex flex-col gap-5 mb-5'>
            <Image
              src='/profile.png'
              className='rounded-xl'
              width={64}
              height={64}
            />
            <span className='text-2xl font-medium'>Julian Link</span>
          </div>
          Hey there, I am Julian, a student from Germany. I am currently
          studying AI and Robotics at the Technical University of Munich. My
          passions are machine learning and web development. Check out my
          projects and feel free to contact me!
          <div className='absolute top-0 right-0 mt-10 mr-10 flex flex-row gap-0'>
            <Link
              href='https://www.linkedin.com/in/julian-link-b00297212'
              target='_blank'
              rel='noopener noreferrer'
              className='p-2 hover:scale-110 transition-all duration-300'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
              >
                <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
              </svg>
            </Link>

            <Link
              href='https://github.com/jlnk03'
              target='_blank'
              rel='noopener noreferrer'
              className='p-2 hover:scale-110 transition-all duration-300'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                class='lucide lucide-github'
              >
                <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4' />
                <path d='M9 18c-4.51 2-5-2-7-2' />
              </svg>
            </Link>
          </div>
          {/* <div className='mt-4 flex space-x-3'>
            <a
              href='https://www.linkedin.com/in/julian-link-b00297212'
              target='_blank'
              rel='noopener noreferrer'
              className='text-indigo-600 hover:text-indigo-800'
            >
              <LinkedinIcon size={24} />
            </a>
            <a href='#' className='text-indigo-600 hover:text-indigo-800'>
              <GithubLogoIcon size={24} />
            </a>
            <a
              href='mailto:julian.link@example.com'
              className='text-indigo-600 hover:text-indigo-800'
            >
              <Mail size={24} />
            </a>
          </div> */}
        </div>

        <section className='w-full sm:w-1/2 mt-10'>
          <h3 className='font-medium text-lg mb-4'>
            Some of the tech I work with:
          </h3>

          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            {skills.map((skill, index) => (
              <div key={index} className='bg-gray-300 rounded-lg p-4'>
                <h4 className='font-medium text-lg mb-2'>{skill}</h4>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
