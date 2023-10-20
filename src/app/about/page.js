'use client'


export default function Home() {

  return (
    <>
      <div className="absolute left-5 top-5 flex flex-row items-end">
        <div className='h-12 w-20 relative'>
          <div
            className={`absolute bg-[#072541] w-[70%] left-[15%] h-full rounded-t-full rounded-br-full relative`}
          >
            <div
              className={`bg-[#d6dbdc] w-[40%] h-[70%] rounded-t-full absolute bottom-0 left-[30%] pointer-events-none`}
            ></div>

            <div
              className={`bg-[#F4E869] w-[20%] aspect-square rounded-full absolute bottom-[15%] left-[50%] transform -translate-x-1/2`}
            ></div>

          </div>
        </div>

        <div className="relative -bottom-[0.5rem] -left-2"> {/* Adjust the bottom value as needed */}
          <span className='text-4xl font-medium'>bout</span>
        </div>
      </div>

      {/* main */}
      <div className="flex flex-col items-center justify-center w-full h-full px-5">
        <div className="bg-gradient-to-br from-orange-400/70 to-red-400/70 rounded-2xl sm:w-[50%] w-full shadow-lg shadow-black/20 p-5 relative">
          <div className="flex flex-col gap-5 mb-5">
            <img src="/profile.heic" className="w-24 h-24 rounded-xl" />
            <span className="text-2xl font-medium">Julian Link</span>
          </div>
          Hey there, I am Julian, a student from Germany. I am currently studying AI and Robotics at the Technical University of Munich. My passions are machine learning and web development. Check out my projects and feel free to contact me!
          <a href="https://www.linkedin.com/in/julian-link-b00297212" target="_blank" rel="noopener noreferrer" className="absolute top-0 right-0 mt-5 mr-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
          </a>
        </div>
      </div>

    </>
  )
}
