import { buildColor } from "../../colors";
import { SVGProps } from "../types";

export const Talent = ({ color = "primary" }: SVGProps) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_53_90)">
      <path
        d="M0.5 4.50067V1.5C0.5 1.23478 0.605357 0.98043 0.792893 0.792893C0.98043 0.605357 1.23478 0.5 1.5 0.5H4.5"
        stroke={buildColor(color)}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.5 4.50067V1.5C15.5 1.23478 15.3946 0.98043 15.2071 0.792893C15.0196 0.605357 14.7652 0.5 14.5 0.5H11.5"
        stroke={buildColor(color)}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M0.5 11.5V14.5C0.5 14.7652 0.605357 15.0196 0.792893 15.2071C0.98043 15.3946 1.23478 15.5 1.5 15.5H4.5"
        stroke={buildColor(color)}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.5 11.5V14.5C15.5 14.7652 15.3946 15.0196 15.2071 15.2071C15.0196 15.3946 14.7652 15.5 14.5 15.5H11.5"
        stroke={buildColor(color)}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.25 5.75C5.25 6.47935 5.53973 7.17882 6.05546 7.69454C6.57118 8.21027 7.27065 8.5 8 8.5C8.72935 8.5 9.42882 8.21027 9.94454 7.69454C10.4603 7.17882 10.75 6.47935 10.75 5.75C10.75 5.02065 10.4603 4.32118 9.94454 3.80546C9.42882 3.28973 8.72935 3 8 3C7.27065 3 6.57118 3.28973 6.05546 3.80546C5.53973 4.32118 5.25 5.02065 5.25 5.75V5.75Z"
        stroke={buildColor(color)}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.2247 12.5C11.9188 11.6235 11.3477 10.8638 10.5908 10.3263C9.83383 9.78882 8.92844 9.50006 8.00006 9.50006C7.07168 9.50006 6.16628 9.78882 5.40933 10.3263C4.65238 10.8638 4.08136 11.6235 3.77539 12.5"
        stroke={buildColor(color)}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_53_90">
        <rect width="16" height="16" fill="transparent" />
      </clipPath>
    </defs>
  </svg>
);
