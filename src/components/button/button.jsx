import React from 'react';

export function Button({ handleClick, title, styles }) {
  return (
    <button style={styles} onClick={handleClick}>
      {title}
    </button>
  );
}