import * as React from "react";

const İnstagram = (props) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M23 31H9c-4.4 0-8-3.6-8-8V9c0-4.4 3.6-8 8-8h14c4.4 0 8 3.6 8 8v14c0 4.4-3.6 8-8 8Z"
      stroke="#ffffff"
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 23a7 7 0 1 0 0-14 7 7 0 0 0 0 14ZM24 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      stroke="#ffffff"
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default İnstagram;
