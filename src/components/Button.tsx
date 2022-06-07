import React, { FC } from 'react';

interface Props {
  color: string;
  backgroundColor: string;
  text: string;
  borderRadius: string;
  size: string;
};

const Button: FC<Props> = ({ color, backgroundColor, text, borderRadius, size }) : JSX.Element => {
  return (
    <button
      type='button'
      style={{
        backgroundColor,
        color,
        borderRadius
      }}
      className={`text-${size} p-3 hover:drop-shadow-xl`}
    >
      {text}
    </button>
  );
};

export default Button;