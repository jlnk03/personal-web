'use client'


export default function Home() {

  return (
    <>

      <div className="absolute left-5 top-5 flex flex-row items-end">
        <div className='h-12 w-24 relative'>
          {/* red */}
          <div
            className={`absolute left-[25%] bg-[#F8BDEB] w-[20%] h-full rounded-bl-full`}
          ></div>
          {/* sky */}
          <div
            className={`absolute left-[45%] bg-[#5272F2] w-[30%] aspect-square rounded-full`}
          ></div>
        </div>

        <div className="relative -bottom-[0.5rem] -left-6"> {/* Adjust the bottom value as needed */}
          <span className='text-4xl font-medium'>rojects</span>
        </div>
      </div>

      {/* main */}

      <div className='grid grid-cols-2 gap-5'>
        <div className="w-96 h-56 bg-white rounded-xl"></div>
        <div className="w-96 h-56 bg-white rounded-xl"></div>
      </div>

    </>
  )
}
