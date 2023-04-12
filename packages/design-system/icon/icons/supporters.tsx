import { buildColor } from "../../colors";
import { SVGProps } from "../types";

export const Supporters = ({ color = "primary", size = 16 }: SVGProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_4144_6537)">
      <path
        d="M7.55936 1.54332L0.892697 13.9847C0.851916 14.0608 0.831569 14.1463 0.83364 14.2326C0.83571 14.319 0.860127 14.4034 0.90451 14.4775C0.948893 14.5516 1.01173 14.613 1.08689 14.6556C1.16205 14.6982 1.24696 14.7206 1.33336 14.7207H14.6667C14.7527 14.7204 14.8372 14.6979 14.912 14.6555C14.9868 14.613 15.0494 14.5519 15.0937 14.4782C15.138 14.4045 15.1626 14.3205 15.165 14.2345C15.1673 14.1486 15.1475 14.0634 15.1074 13.9873L8.4407 1.54599C8.39821 1.46615 8.33486 1.39934 8.2574 1.35265C8.17994 1.30597 8.09127 1.28117 8.00083 1.2809C7.91039 1.28063 7.82157 1.30489 7.74383 1.3511C7.66609 1.39731 7.60234 1.46375 7.55936 1.54332Z"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 1.27933V9.72066"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0.844727 14.3207L8.00006 9.72066"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.1553 14.3207L8 9.72066"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_4144_6537">
        <rect width="16" height="16" fill="transparent" />
      </clipPath>
    </defs>
  </svg>
);
