import { buildColor } from "../../colors";
import { SVGProps } from "../types";

export const Mailbox = ({ color = "primary", size = 40 }: SVGProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_11895_48181)">
      <path
        d="M21.25 31.25V38.75"
        stroke={buildColor(color)}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.25 13.75H33.75C35.0761 13.75 36.3479 14.2768 37.2855 15.2145C38.2232 16.1521 38.75 17.4239 38.75 18.75V30C38.75 30.3315 38.6183 30.6495 38.3839 30.8839C38.1495 31.1183 37.8315 31.25 37.5 31.25H11.25V18.75C11.25 17.4239 10.7232 16.1521 9.78553 15.2145C8.84785 14.2768 7.57608 13.75 6.25 13.75Z"
        stroke={buildColor(color)}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.25 31.25H2.5C2.16848 31.25 1.85054 31.1183 1.61612 30.8839C1.3817 30.6495 1.25 30.3315 1.25 30V18.75C1.25 17.4239 1.77678 16.1521 2.71447 15.2145C3.65215 14.2768 4.92392 13.75 6.25 13.75C7.57608 13.75 8.84785 14.2768 9.78553 15.2145C10.7232 16.1521 11.25 17.4239 11.25 18.75V31.25Z"
        stroke={buildColor(color)}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.75 18.75V1.25"
        stroke={buildColor(color)}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.75 8.75H27.5C28.4946 8.75 29.4484 8.35491 30.1516 7.65165C30.8549 6.94839 31.25 5.99456 31.25 5C31.25 4.00544 30.8549 3.05161 30.1516 2.34835C29.4484 1.64509 28.4946 1.25 27.5 1.25H18.75V8.75Z"
        stroke={buildColor(color)}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_11895_48181">
        <rect width={size} height={size} fill="transparent" />
      </clipPath>
    </defs>
  </svg>
);
