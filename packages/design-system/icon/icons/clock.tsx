import { buildColor } from "../../colors";
import { SVGProps } from "../types";

export const Clock = ({ color = "primary", size = 16 }: SVGProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_12669_2635)">
      <path
        d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"
        stroke={buildColor(color)}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8 8V5.5"
        stroke={buildColor(color)}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8 8L11.1247 11.1253"
        stroke={buildColor(color)}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_12669_2635">
        <rect width={size} height={size} fill="transparent" />
      </clipPath>
    </defs>
  </svg>
);
