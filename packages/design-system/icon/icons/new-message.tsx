import { buildColor } from "../../colors";
import { SVGProps } from "../types";

export const NewMessage = ({ color = "primary" }: SVGProps) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_1723_4812)">
      <path
        d="M7.5 11.5C7.5 12.5609 7.92143 13.5783 8.67157 14.3284C9.42172 15.0786 10.4391 15.5 11.5 15.5C12.5609 15.5 13.5783 15.0786 14.3284 14.3284C15.0786 13.5783 15.5 12.5609 15.5 11.5C15.5 10.4391 15.0786 9.42172 14.3284 8.67157C13.5783 7.92143 12.5609 7.5 11.5 7.5C10.4391 7.5 9.42172 7.92143 8.67157 8.67157C7.92143 9.42172 7.5 10.4391 7.5 11.5Z"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.5 9.5V13.5"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 11.5H13.5"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.5 10.5H1.5C1.23478 10.5 0.98043 10.3946 0.792893 10.2071C0.605357 10.0196 0.5 9.76522 0.5 9.5V1.5C0.5 1.23478 0.605357 0.98043 0.792893 0.792893C0.98043 0.605357 1.23478 0.5 1.5 0.5H13.5C13.7652 0.5 14.0196 0.605357 14.2071 0.792893C14.3946 0.98043 14.5 1.23478 14.5 1.5V6"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.2741 0.866669L8.84474 5.04267C8.45922 5.33924 7.98647 5.50004 7.50007 5.50004C7.01368 5.50004 6.54093 5.33924 6.15541 5.04267L0.726074 0.866669"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_1723_4812">
        <rect width="16" height="16" fill="transparent" />
      </clipPath>
    </defs>
  </svg>
);
