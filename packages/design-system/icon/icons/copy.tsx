import { buildColor } from "../../colors";
import { SVGProps } from "../types";

export const Copy = ({ color = "primary" }: SVGProps) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_70_45)">
      <path
        d="M1.5 12.5C1.23478 12.5 0.98043 12.3946 0.792893 12.2071C0.605357 12.0196 0.5 11.7652 0.5 11.5V1.5C0.5 1.23478 0.605357 0.98043 0.792893 0.792893C0.98043 0.605357 1.23478 0.5 1.5 0.5H11.5C11.7652 0.5 12.0196 0.605357 12.2071 0.792893C12.3946 0.98043 12.5 1.23478 12.5 1.5"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 3.5H4.5C3.94772 3.5 3.5 3.94772 3.5 4.5V14.5C3.5 15.0523 3.94772 15.5 4.5 15.5H14.5C15.0523 15.5 15.5 15.0523 15.5 14.5V4.5C15.5 3.94772 15.0523 3.5 14.5 3.5Z"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_70_45">
        <rect width="16" height="16" fill="transparent" />
      </clipPath>
    </defs>
  </svg>
);
