import { useEffect, useState } from 'react';

type Snowflake = {
  id: number;
  left: number;
  animationDuration: number;
  opacity: number;
  size: number;
};

export function Snowfall() {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    const flakes: Snowflake[] = [];
    for (let i = 0; i < 50; i++) {
      flakes.push({
        id: i,
        left: Math.random() * 100,
        animationDuration: 5 + Math.random() * 10,
        opacity: 0.3 + Math.random() * 0.7,
        size: 2 + Math.random() * 4,
      });
    }
    setSnowflakes(flakes);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute top-0 text-white animate-fall"
          style={{
            left: `${flake.left}%`,
            animation: `fall ${flake.animationDuration}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`,
            opacity: flake.opacity,
            fontSize: `${flake.size}px`,
          }}
        >
          ❄
        </div>
      ))}
      <style>{`
        @keyframes fall {
          0% {
            transform: translateY(-10vh) rotate(0deg);
          }
          100% {
            transform: translateY(110vh) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
