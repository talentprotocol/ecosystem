import { buildColor } from "../../colors";
import { SVGProps } from "../types";

export const Arrow = ({ color = "primary", size = 16 }: SVGProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_681_3239)">
      <path
        d="M0.5 8H15.5"
        stroke="#536471"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.5 15L15.5 8L8.5 1"
        stroke={buildColor(color)}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_681_3239">
        <rect width={size} height={size} fill="transparent" />
      </clipPath>
    </defs>
  </svg>
);
