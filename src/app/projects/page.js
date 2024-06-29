"use client";

import Link from "next/link";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  const randomChar = () =>
    chars[Math.floor(Math.random() * (chars.length - 1))];
  const randomString = (length) =>
    Array.from(Array(length)).map(randomChar).join("");

  useEffect(() => {
    const card = document.querySelector(".card");
    const letters = card.querySelector(".card-letters");

    const handleOnMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      letters.style.setProperty("--x", `${x}px`);
      letters.style.setProperty("--y", `${y}px`);

      letters.innerText = randomString(1500);
    };

    card.addEventListener("mousemove", handleOnMove);
    card.addEventListener("touchmove", (e) => handleOnMove(e.touches[0]));

    return () => {
      card.removeEventListener("mousemove", handleOnMove);
      card.removeEventListener("touchmove", (e) => handleOnMove(e.touches[0]));
    };
  }, []);

  return (
    <>
      <div className="absolute left-5 top-5 flex flex-row items-end">
        <div className="h-12 w-24 relative">
          {/* red */}
          <div
            className={`absolute left-[25%] bg-[#F8BDEB] w-[20%] h-full rounded-bl-full`}
          ></div>
          {/* sky */}
          <div
            className={`absolute left-[45%] bg-[#5272F2] w-[30%] aspect-square rounded-full`}
          ></div>
        </div>

        <div className="relative -bottom-[0.5rem] -left-6">
          {" "}
          <span className="text-4xl font-medium">rojects</span>
        </div>
      </div>

      {/* main */}

      <div className="grid sm:grid-cols-2 grid-cols-1 gap-5 pb-12 sm:pb-0">
        <Link
          href="/projects/muunai"
          className="w-96 h-56 bg-blue-950 text-blue-100 rounded-xl overflow-hidden text-4xl font-bold items-center flex flex-col justify-center"
        >
          <div className="card-track">
            <div className="card-wrapper">
              <div className="card">
                <div className="w-96 h-56 items-center justify-center flex flex-col z-10">
                  muunai
                  <span className="text-sm font-normal mt-2">
                    medical report automation
                  </span>
                </div>
                <div className="card-gradient"></div>
                <div className="card-letters"></div>
              </div>
            </div>
          </div>
        </Link>

        <Link
          href="/projects/swinglab"
          id="points-cont"
          className="group relative w-96 h-56 bg-white rounded-xl overflow-hidden text-4xl font-bold items-center flex flex-col justify-center"
        >
          <span className="z-10">swinglab</span>
          <span className="text-sm font-normal mt-2 z-10">
            3D golf swing analysis
          </span>

          <div
            className="group-hover:scale-110 transition w-full h-full absolute"
            id="points"
          >
            <span className="bg-orange-400 rounded-full w-4 h-4 absolute top-[90%] right-[80%]"></span>
            <span className="bg-orange-400 rounded-full w-4 h-4 absolute top-[10%] right-[70%]"></span>
            <span className="bg-orange-400 rounded-full w-3 h-3 absolute top-[20%] right-[30%]"></span>
            <span className="bg-orange-400 rounded-full w-5 h-5 absolute top-[30%] right-[20%]"></span>
            <span className="bg-orange-400 rounded-full w-3 h-3 absolute top-[60%] right-[60%]"></span>
            <span className="bg-orange-400 rounded-full w-4 h-4 absolute top-[80%] right-[40%]"></span>

            <span className="bg-sky-400 rounded-full w-4 h-4 absolute top-[92%] right-[63%]"></span>
            <span className="bg-sky-400 rounded-full w-3 h-3 absolute top-[33%] right-[77%]"></span>
            <span className="bg-sky-400 rounded-full w-5 h-5 absolute top-[15%] right-[35%]"></span>
            <span className="bg-sky-400 rounded-full w-4 h-4 absolute top-[60%] right-[20%]"></span>
            <span className="bg-sky-400 rounded-full w-3 h-3 absolute top-[64%] right-[90%]"></span>
            <span className="bg-sky-400 rounded-full w-3 h-3 absolute top-[85%] right-[10%]"></span>
          </div>
        </Link>

        <Link
          href="/projects/lsg"
          id="points-cont"
          className="group parent relative w-96 h-56 bg-yellow-50 rounded-xl overflow-hidden text-4xl font-bold items-center flex flex-col justify-center"
        >
          <span className="z-10">LSG</span>
          <span className="text-sm font-normal mt-2 z-10">
            LLM + Patents
          </span>

          <div
            className="w-full h-full absolute lightbulb "
          >
          </div>

        </Link>
      </div>
    </>
  );
}
