import { buildColor } from "../../colors";
import { SVGProps } from "../types";

export const Edit = ({ color = "primary", size = 16 }: SVGProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_951_5199)">
      <path
        d="M14.7933 1.20667C14.5662 0.980543 14.2966 0.80165 14 0.680328C13.7033 0.559006 13.3856 0.497657 13.0651 0.499827C12.7447 0.501996 12.4278 0.567641 12.1328 0.692968C11.8379 0.818295 11.5707 1.00082 11.3467 1.23L1.68 10.8967L0.5 15.5L5.10333 14.3193L14.77 4.65267C14.9992 4.42876 15.1818 4.16163 15.3072 3.86672C15.4326 3.57181 15.4982 3.25498 15.5004 2.93454C15.5026 2.6141 15.4412 2.2964 15.3198 1.99982C15.1985 1.70324 15.0195 1.43367 14.7933 1.20667V1.20667Z"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.0708 1.50667L14.4935 4.92933"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.68066 10.896L5.10666 14.316"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_951_5199">
        <rect width="16" height="16" fill="transparent" />
      </clipPath>
    </defs>
  </svg>
);
