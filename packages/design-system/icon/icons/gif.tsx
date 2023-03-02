import { buildColor } from "../../colors";
import { SVGProps } from "../types";

export const Gif = ({ color = "primary" }: SVGProps) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_315_1455)">
      <path
        d="M14.8333 0.5H1.16667C0.798477 0.5 0.5 0.798477 0.5 1.16667V14.8333C0.5 15.2015 0.798477 15.5 1.16667 15.5H14.8333C15.2015 15.5 15.5 15.2015 15.5 14.8333V1.16667C15.5 0.798477 15.2015 0.5 14.8333 0.5Z"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 12V8C10 7.73478 10.1054 7.48043 10.2929 7.29289C10.4804 7.10536 10.7348 7 11 7H12"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 10H11.5"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 12V7"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.5 10H6V11C6 11.2652 5.89464 11.5196 5.70711 11.7071C5.51957 11.8946 5.26522 12 5 12C4.73478 12 4.48043 11.8946 4.29289 11.7071C4.10536 11.5196 4 11.2652 4 11V8C4 7.73478 4.10536 7.48043 4.29289 7.29289C4.48043 7.10536 4.73478 7 5 7H6"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_315_1455">
        <rect width="16" height="16" fill="transparent" />
      </clipPath>
    </defs>
  </svg>
);
