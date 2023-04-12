import { buildColor } from "../../colors";
import { SVGProps } from "../types";

export const Calendar = ({ color = "primary", size = 16 }: SVGProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_535_2677)">
      <path
        d="M14.5012 2.5H1.50122C0.948936 2.5 0.501221 2.94772 0.501221 3.5V14.5C0.501221 15.0523 0.948936 15.5 1.50122 15.5H14.5012C15.0535 15.5 15.5012 15.0523 15.5012 14.5V3.5C15.5012 2.94772 15.0535 2.5 14.5012 2.5Z"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0.501221 6.5H15.5012"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.50122 4V0.5"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.5012 4V0.5"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_535_2677">
        <rect width="16" height="16" fill="transparent" />
      </clipPath>
    </defs>
  </svg>
);
