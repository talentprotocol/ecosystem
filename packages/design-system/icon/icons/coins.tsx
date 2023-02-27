import { buildColor } from "../../colors";
import { SVGProps } from "../types";

export const Coins = ({ color = "primary" }: SVGProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_4129_6902)">
      <path
        d="M6.75 6.75C10.0637 6.75 12.75 5.40685 12.75 3.75C12.75 2.09315 10.0637 0.75 6.75 0.75C3.43629 0.75 0.75 2.09315 0.75 3.75C0.75 5.40685 3.43629 6.75 6.75 6.75Z"
        stroke={buildColor(color)}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.75 7.75V3.75"
        stroke={buildColor(color)}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M0.75 3.75V18.75C0.75 20.41 3.44 21.75 6.75 21.75C7.31553 21.752 7.88043 21.7119 8.44 21.63"
        stroke={buildColor(color)}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M0.75 15C0.75 16.66 3.44 18 6.75 18C7.32905 17.9985 7.90722 17.955 8.48 17.87"
        stroke={buildColor(color)}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M0.75 11.25C0.75 12.91 3.44 14.25 6.75 14.25C7.31553 14.252 7.88043 14.2119 8.44 14.13"
        stroke={buildColor(color)}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M0.75 7.5C0.75 9.16 3.44 10.5 6.75 10.5C7.32905 10.4985 7.90722 10.455 8.48 10.37"
        stroke={buildColor(color)}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.25 16C20.5637 16 23.25 14.6569 23.25 13C23.25 11.3431 20.5637 10 17.25 10C13.9363 10 11.25 11.3431 11.25 13C11.25 14.6569 13.9363 16 17.25 16Z"
        stroke={buildColor(color)}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.25 13V20.25C11.25 21.91 13.94 23.25 17.25 23.25C20.56 23.25 23.25 21.91 23.25 20.25V13"
        stroke={buildColor(color)}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M23.25 16.5C23.25 18.16 20.56 19.5 17.25 19.5C13.94 19.5 11.25 18.16 11.25 16.5"
        stroke={buildColor(color)}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_4129_6902">
        <rect width="24" height="24" fill="transparent" />
      </clipPath>
    </defs>
  </svg>
);
