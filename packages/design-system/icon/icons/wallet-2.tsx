import { buildColor } from "../../colors";
import { SVGProps } from "../types";

export const Wallet2 = ({ color = "primary" }: SVGProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_4128_6887)">
      <path
        d="M21.75 18.5V20C21.75 20.7956 21.4339 21.5587 20.8713 22.1213C20.3087 22.6839 19.5456 23 18.75 23H3.75C2.95435 23 2.19129 22.6839 1.62868 22.1213C1.06607 21.5587 0.75 20.7956 0.75 20V9.5C0.75 8.70435 1.06607 7.94129 1.62868 7.37868C2.19129 6.81607 2.95435 6.5 3.75 6.5H18.75C19.5456 6.5 20.3087 6.81607 20.8713 7.37868C21.4339 7.94129 21.75 8.70435 21.75 9.5V11"
        stroke={buildColor(color)}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.75 6.49999L16.421 1.84199C16.3329 1.66572 16.211 1.50853 16.0621 1.3794C15.9133 1.25027 15.7405 1.15174 15.5535 1.08943C15.3666 1.02711 15.1692 1.00224 14.9726 1.01624C14.7761 1.03023 14.5842 1.08282 14.408 1.17099L3.75 6.49999"
        stroke={buildColor(color)}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M21.75 18.5C22.1478 18.5 22.5294 18.342 22.8107 18.0607C23.092 17.7794 23.25 17.3978 23.25 17V12.5C23.25 12.1022 23.092 11.7206 22.8107 11.4393C22.5294 11.158 22.1478 11 21.75 11H18C17.0054 11 16.0516 11.3951 15.3483 12.0983C14.6451 12.8016 14.25 13.7554 14.25 14.75C14.25 15.7446 14.6451 16.6984 15.3483 17.4017C16.0516 18.1049 17.0054 18.5 18 18.5H21.75Z"
        stroke={buildColor(color)}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18 15.125C17.7929 15.125 17.625 14.9571 17.625 14.75C17.625 14.5429 17.7929 14.375 18 14.375"
        stroke={buildColor(color)}
        stroke-width="1.5"
      />
      <path
        d="M18 15.125C18.2071 15.125 18.375 14.9571 18.375 14.75C18.375 14.5429 18.2071 14.375 18 14.375"
        stroke={buildColor(color)}
        stroke-width="1.5"
      />
    </g>
    <defs>
      <clipPath id="clip0_4128_6887">
        <rect width="24" height="24" fill="transparent" />
      </clipPath>
    </defs>
  </svg>
);
