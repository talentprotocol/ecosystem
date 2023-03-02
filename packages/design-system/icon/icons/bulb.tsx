import { buildColor } from "../../colors";
import { SVGProps } from "../types";

export const Bulb = ({ color = "primary" }: SVGProps) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_4529_6727)">
      <path
        d="M10 11.5V13C10 13.2652 9.89464 13.5196 9.70711 13.7071C9.51957 13.8946 9.26522 14 9 14H7C6.73478 14 6.48043 13.8946 6.29289 13.7071C6.10536 13.5196 6 13.2652 6 13V11.5"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 0.5V1.5"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 7.5H2"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 2.5L3.23333 3.20467"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 7.5H14"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.4999 2.5L12.7666 3.20467"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.94345 11.5H10.0568C10.7996 11.1313 11.4231 10.5601 11.8554 9.85243C12.2877 9.14471 12.5112 8.32923 12.5001 7.5C12.4791 6.31311 11.9982 5.18071 11.1588 4.34132C10.3194 3.50192 9.18701 3.02106 8.00011 3C6.81277 3.02108 5.67998 3.50231 4.84052 4.34227C4.00105 5.18224 3.52049 6.31531 3.50011 7.50267C3.48954 8.33145 3.71326 9.14636 4.14553 9.85356C4.5778 10.5608 5.20103 11.1315 5.94345 11.5V11.5Z"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 14V15.5"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 9V11.5"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 7.5L8 9L9.5 7.5"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_4529_6727">
        <rect width="16" height="16" fill="transparent" />
      </clipPath>
    </defs>
  </svg>
);
