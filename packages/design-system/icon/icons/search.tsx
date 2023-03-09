import { buildColor } from "../../colors";
import { SVGProps } from "../types";

export const Search = ({ color = "primary", size = 16 }: SVGProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_212_608)">
      <path
        d="M0.981388 8.90465C1.60815 10.3794 2.7951 11.5448 4.28112 12.1445C5.76714 12.7441 7.43049 12.7289 8.90527 12.1021C10.3801 11.4753 11.5454 10.2884 12.1451 8.80236C12.7447 7.31634 12.7295 5.65299 12.1027 4.17821C11.4759 2.70343 10.289 1.53803 8.80298 0.938398C7.31696 0.338762 5.6536 0.354004 4.17882 0.98077C2.70405 1.60754 1.53865 2.79448 0.939016 4.2805C0.33938 5.76652 0.354622 7.42988 0.981388 8.90465V8.90465Z"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.814 10.8133L15.5 15.5"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_212_608">
        <rect width={size} height={size} fill="transparent" />
      </clipPath>
    </defs>
  </svg>
);
