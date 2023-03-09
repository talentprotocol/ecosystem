import { buildColor } from "../../colors";
import { SVGProps } from "../types";

export const Share2 = ({ color = "primary", size = 16 }: SVGProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 7.5C1 8.16304 1.26339 8.79893 1.73223 9.26777C2.20107 9.73661 2.83696 10 3.5 10C4.16304 10 4.79893 9.73661 5.26777 9.26777C5.73661 8.79893 6 8.16304 6 7.5C6 6.83696 5.73661 6.20107 5.26777 5.73223C4.79893 5.26339 4.16304 5 3.5 5C2.83696 5 2.20107 5.26339 1.73223 5.73223C1.26339 6.20107 1 6.83696 1 7.5V7.5Z"
      stroke={buildColor(color)}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 4C10 4.66304 10.2634 5.29893 10.7322 5.76777C11.2011 6.23661 11.837 6.5 12.5 6.5C13.163 6.5 13.7989 6.23661 14.2678 5.76777C14.7366 5.29893 15 4.66304 15 4C15 3.33696 14.7366 2.70107 14.2678 2.23223C13.7989 1.76339 13.163 1.5 12.5 1.5C11.837 1.5 11.2011 1.76339 10.7322 2.23223C10.2634 2.70107 10 3.33696 10 4Z"
      stroke={buildColor(color)}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 12C10 12.663 10.2634 13.2989 10.7322 13.7678C11.2011 14.2366 11.837 14.5 12.5 14.5C13.163 14.5 13.7989 14.2366 14.2678 13.7678C14.7366 13.2989 15 12.663 15 12C15 11.337 14.7366 10.7011 14.2678 10.2322C13.7989 9.76339 13.163 9.5 12.5 9.5C11.837 9.5 11.2011 9.76339 10.7322 10.2322C10.2634 10.7011 10 11.337 10 12Z"
      stroke={buildColor(color)}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.83057 6.594L10.1692 4.90666"
      stroke={buildColor(color)}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.73682 8.61867L10.2635 10.882"
      stroke={buildColor(color)}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
