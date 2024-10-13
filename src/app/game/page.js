"use client";

import React, { useState, useEffect, useCallback } from "react";

const GAME_WIDTH = 400;
const GAME_HEIGHT = 600;
const GRAVITY = 0.9;
const JUMP_STRENGTH = -10;
const PIPE_WIDTH = 80;
const PIPE_GAP = 200;
const BIRD_SIZE = 40;
const BIRD_X = 50; // Fixed horizontal position of the bird

const PixelBird = ({ y }) => (
  <svg x={BIRD_X} y={y} width={BIRD_SIZE} height={BIRD_SIZE}>
    <defs>
      <pattern
        id='pixelPattern'
        width='8'
        height='8'
        patternUnits='userSpaceOnUse'
      >
        <rect width='8' height='8' fill='#FFA500' />
        <rect width='8' height='1' fill='#FFD700' />
        <rect y='7' width='8' height='1' fill='#FF8C00' />
      </pattern>
    </defs>
    <rect width={BIRD_SIZE} height={BIRD_SIZE} fill='url(#pixelPattern)' />
    <rect x='32' y='8' width='8' height='8' fill='black' />
    <rect x='32' y='24' width='8' height='8' fill='#FF6347' />
    <rect x='0' y='16' width='8' height='8' fill='#FF6347' />
    <rect x='8' y='8' width='8' height='24' fill='#FF8C00' opacity='0.7' />
  </svg>
);

const Pipe = ({ x, height, isTop }) => (
  <svg
    x={x}
    y={isTop ? 0 : GAME_HEIGHT - height}
    width={PIPE_WIDTH}
    height={height}
  >
    <defs>
      <linearGradient id='pipeGradient' x1='0%' y1='0%' x2='100%' y2='0%'>
        <stop offset='0%' stopColor='#228B22' />
        <stop offset='100%' stopColor='#32CD32' />
      </linearGradient>
      <pattern
        id='pipePattern'
        x='0'
        y='0'
        width='20'
        height='20'
        patternUnits='userSpaceOnUse'
      >
        <rect width='20' height='20' fill='url(#pipeGradient)' />
        <path
          d='M 0 0 L 20 0 L 20 20 L 0 20 Z'
          fill='none'
          stroke='#006400'
          strokeWidth='2'
        />
      </pattern>
    </defs>
    <rect width={PIPE_WIDTH} height={height} fill='url(#pipePattern)' />
    <rect
      x='0'
      y={isTop ? height - 30 : 0}
      width={PIPE_WIDTH}
      height='30'
      fill='#32CD32'
      stroke='#006400'
      strokeWidth='2'
    />
    <rect
      x='5'
      y={isTop ? height - 25 : 5}
      width={PIPE_WIDTH - 10}
      height='20'
      fill='#98FB98'
      opacity='0.5'
    />
  </svg>
);

const Cloud = ({ x, y, scale = 1 }) => (
  <svg x={x} y={y} width={100 * scale} height={60 * scale}>
    <path
      d='M25 50 Q35 20 50 30 Q65 5 80 30 Q95 20 100 40 Q100 50 90 50 L25 50'
      fill='white'
      opacity='0.8'
    />
  </svg>
);

const Sun = () => (
  <svg x={GAME_WIDTH - 80} y='20' width='60' height='60'>
    <circle cx='30' cy='30' r='25' fill='#FFD700' />
  </svg>
);

const Game = () => {
  const [birdY, setBirdY] = useState(GAME_HEIGHT / 2);
  const [birdVelocity, setBirdVelocity] = useState(0);
  const [pipes, setPipes] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0); // Initialize to 0

  const jump = useCallback(() => {
    if (!gameStarted) {
      setGameStarted(true);
    }
    setBirdVelocity(JUMP_STRENGTH);
  }, [gameStarted]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.code === "Space") {
        e.preventDefault(); // Prevent page scrolling
        jump();
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [jump]);

  useEffect(() => {
    if (!gameStarted) return;

    const gameLoop = setInterval(() => {
      // Update bird position and velocity
      setBirdY((y) => y + birdVelocity);
      setBirdVelocity((v) => v + GRAVITY);

      // Update pipes
      setPipes((currentPipes) => {
        // Move pipes to the left
        let newPipes = currentPipes.map((pipe) => ({ ...pipe, x: pipe.x - 2 }));

        // Add new pipe if needed
        if (
          newPipes.length === 0 ||
          newPipes[newPipes.length - 1].x < GAME_WIDTH - 200
        ) {
          const height = Math.random() * (GAME_HEIGHT - PIPE_GAP - 100) + 50;
          newPipes.push({ x: GAME_WIDTH, height, passed: false });
        }

        // Check for pipes that have been passed
        newPipes.forEach((pipe) => {
          if (!pipe.passed && pipe.x + PIPE_WIDTH < BIRD_X) {
            pipe.passed = true;
            setScore((s) => s + 1);
          }
        });

        // Remove pipes that are off-screen
        return newPipes.filter((pipe) => pipe.x > -PIPE_WIDTH);
      });

      // Collision Detection
      const collision = pipes.some(
        (pipe) =>
          pipe.x < BIRD_X + BIRD_SIZE &&
          pipe.x + PIPE_WIDTH > BIRD_X &&
          (birdY < pipe.height || birdY + BIRD_SIZE > pipe.height + PIPE_GAP)
      );

      if (birdY < 0 || birdY + BIRD_SIZE > GAME_HEIGHT || collision) {
        // Update best score if current score is higher
        if (score > bestScore) {
          setBestScore(score);
        }

        // Reset game state
        setGameStarted(false);
        setBirdY(GAME_HEIGHT / 2);
        setBirdVelocity(0);
        setPipes([]);
        setScore(0);
      }
    }, 20);

    return () => clearInterval(gameLoop);
  }, [gameStarted, birdY, birdVelocity, pipes, score, bestScore]);

  return (
    <section className='w-full h-full items-center justify-center flex pb-20'>
      <div
        onClick={jump}
        style={{ cursor: "pointer", fontFamily: "Arial, sans-serif" }}
      >
        <svg
          width={GAME_WIDTH}
          height={GAME_HEIGHT}
          style={{ border: "1px solid black" }}
        >
          <defs>
            <linearGradient id='skyGradient' x1='0%' y1='0%' x2='0%' y2='100%'>
              <stop offset='0%' stopColor='#87CEEB' />
              <stop offset='100%' stopColor='#E0F6FF' />
            </linearGradient>
          </defs>
          <rect
            width={GAME_WIDTH}
            height={GAME_HEIGHT}
            fill='url(#skyGradient)'
          />
          <Sun />
          <Cloud x='50' y='50' scale={0.8} />
          <Cloud x='200' y='100' scale={1.2} />
          <Cloud x='150' y='200' scale={1} />
          <PixelBird y={birdY} />
          {pipes.map((pipe, index) => (
            <React.Fragment key={index}>
              <Pipe x={pipe.x} height={pipe.height} isTop={true} />
              <Pipe
                x={pipe.x}
                height={GAME_HEIGHT - pipe.height - PIPE_GAP}
                isTop={false}
              />
            </React.Fragment>
          ))}
          <text x='10' y='30' fontSize='20' fill='#333' fontWeight='bold'>
            Score: {score}
          </text>
          <text x='10' y='60' fontSize='20' fill='#333' fontWeight='bold'>
            Best: {bestScore}
          </text>
          {!gameStarted && (
            <text
              x={GAME_WIDTH / 2}
              y={GAME_HEIGHT / 2}
              fontSize='20'
              fill='#333'
              fontWeight='bold'
              textAnchor='middle'
            >
              Click or press Space to start
            </text>
          )}
        </svg>
      </div>
    </section>
  );
};

export default Game;
