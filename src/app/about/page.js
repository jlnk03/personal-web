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

    </>
  )
}
