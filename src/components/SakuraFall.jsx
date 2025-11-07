import React from 'react';

const petalColors = ['#ffb7c5', '#ffc1cc', '#ffd4dd', '#ff9db5'];

const Petal = ({ index }) => {
  const left = `${(index * 97) % 100}%`;
  const delay = `${(index * 0.73) % 5}s`;
  const duration = `${10 + (index % 6)}s`;
  const size = 10 + (index % 12);
  const rotate = `${(index * 37) % 360}deg`;
  const color = petalColors[index % petalColors.length];

  return (
    <svg
      className="absolute -top-10 pointer-events-none"
      style={{
        left,
        width: size,
        height: size,
        animation: `petal-fall ${duration} linear ${delay} infinite, petal-sway ${duration} ease-in-out ${delay} infinite`,
        transform: `rotate(${rotate})`,
        opacity: 0.9,
      }}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2c2.2 2.8 4.4 4.6 4.4 7.2 0 2.7-2 4.8-4.4 6.8-2.4-2-4.4-4.1-4.4-6.8C7.6 6.6 9.8 4.8 12 2z" fill={color} />
      <circle cx="12" cy="17" r="1.2" fill={color} opacity="0.7" />
    </svg>
  );
};

const SakuraFall = ({ count = 28 }) => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <style>{`
        @keyframes petal-fall {
          0% { transform: translateY(-10vh) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translateY(110vh) rotate(720deg); opacity: 0.9; }
        }
        @keyframes petal-sway {
          0% { margin-left: -10px; }
          50% { margin-left: 10px; }
          100% { margin-left: -10px; }
        }
      `}</style>
      {Array.from({ length: count }).map((_, i) => (
        <Petal key={i} index={i} />
      ))}
    </div>
  );
};

export default SakuraFall;
