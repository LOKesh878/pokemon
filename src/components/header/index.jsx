import React from 'react';

export function Header({ title }) {
  return (
    <>
      <h2
        style={{
          color: 'transparent',
          '-webkit-text-stroke': '2px white',
          fontSize: 68,
          position: 'absolute',
        }}
      >
        {title}
      </h2>
      <h2
        style={{
          color: 'white',
          fontSize: 68,
          position: 'absolute',
          animation: 'animate 4s ease-in-out infinite',
        }}
      >
        {title}
      </h2>
    </>
  );
}
