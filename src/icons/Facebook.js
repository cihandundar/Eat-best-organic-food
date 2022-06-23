import * as React from "react";

const Facebook = (props) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="M22.446 5.72h3.132V.003h-5.69c-.475-.02-6.262-.13-7.762 5.59-.021.059-.5 1.42-.5 4.597l-5.204.015v5.996l5.21-.015V32h7.958V16.2h5.267v-6.012H19.59V8.297c0-1.176.495-2.577 2.856-2.577Zm1.094 5.784v3.378h-5.267v15.801h-5.324V14.865l-5.21.015v-3.362l5.224-.015-.014-.67c-.069-3.365.411-4.78.433-4.849 1.294-4.925 6.237-4.678 6.449-4.665l4.43.002v3.083h-1.815c-3.076 0-4.172 2.01-4.172 3.892v3.208h5.266Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h32v32H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default Facebook;
