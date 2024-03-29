import { buildColor } from "../../colors";
import { SVGProps } from "../types";

export const Bold = ({ color = "primary", size = 16 }: SVGProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_4658_6716)">
      <path
        d="M2.5 15.4987H9C10.1935 15.4987 11.3381 15.0246 12.182 14.1806C13.0259 13.3367 13.5 12.1921 13.5 10.9987C13.5 9.80518 13.0259 8.66059 12.182 7.81668C11.3381 6.97276 10.1935 6.49866 9 6.49866H9.5C9.89397 6.49866 10.2841 6.42106 10.6481 6.2703C11.012 6.11953 11.3427 5.89855 11.6213 5.61998C11.8999 5.3414 12.1209 5.01068 12.2716 4.64671C12.4224 4.28273 12.5 3.89262 12.5 3.49866C12.5 3.10469 12.4224 2.71458 12.2716 2.35061C12.1209 1.98663 11.8999 1.65591 11.6213 1.37734C11.3427 1.09876 11.012 0.877783 10.6481 0.727019C10.2841 0.576254 9.89397 0.498657 9.5 0.498657H2.5"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.5 0.498657V15.4987"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 6.49866H4.5"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_4658_6716">
        <rect width="16" height="16" fill="transparent" />
      </clipPath>
    </defs>
  </svg>
);
