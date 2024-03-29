import { buildColor } from "../../colors";
import { SVGProps } from "../types";

export const Check = ({ color = "primary", size = 16 }: SVGProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_74_206)">
      <path
        d="M4 8.81534L5.63333 11.1333C5.69529 11.2259 5.77845 11.3023 5.8759 11.3562C5.97335 11.4101 6.08226 11.44 6.19358 11.4433C6.3049 11.4466 6.4154 11.4233 6.5159 11.3753C6.61639 11.3273 6.70396 11.256 6.77133 11.1673L12 4.552"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0.5 7.99933C0.5 9.98845 1.29018 11.8961 2.6967 13.3026C4.10322 14.7092 6.01088 15.4993 8 15.4993C9.98912 15.4993 11.8968 14.7092 13.3033 13.3026C14.7098 11.8961 15.5 9.98845 15.5 7.99933C15.5 6.01021 14.7098 4.10255 13.3033 2.69603C11.8968 1.2895 9.98912 0.499329 8 0.499329C6.01088 0.499329 4.10322 1.2895 2.6967 2.69603C1.29018 4.10255 0.5 6.01021 0.5 7.99933V7.99933Z"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_74_206">
        <rect width="16" height="16" fill="transparent" />
      </clipPath>
    </defs>
  </svg>
);
