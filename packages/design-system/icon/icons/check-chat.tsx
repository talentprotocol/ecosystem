import { buildColor } from "../../colors";
import { SVGProps } from "../types";

export const CheckChat = ({ color = "primary", size = 16 }: SVGProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_431_2720)">
      <path
        d="M15.5 0.499329L5.43867 14.872C5.30592 15.0627 5.12974 15.2192 4.92465 15.3285C4.71956 15.4378 4.49143 15.4968 4.25907 15.5007C4.0267 15.5045 3.79675 15.4531 3.58816 15.3506C3.37957 15.2482 3.19832 15.0976 3.05933 14.9113L0.5 11.4993"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_431_2720">
        <rect width={size} height={size} fill="transparent" />
      </clipPath>
    </defs>
  </svg>
);
