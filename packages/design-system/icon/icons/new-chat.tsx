import { buildColor } from "../../colors";
import { SVGProps } from "../types";

export const NewChat = ({ color = "primary" }: SVGProps) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_427_2711)">
      <path
        d="M15.482 7C15.4083 5.93961 15.0941 4.90993 14.5631 3.98907C14.0322 3.06821 13.2986 2.28035 12.4178 1.68526C11.5371 1.09017 10.5323 0.70347 9.47989 0.5545C8.42743 0.405529 7.35487 0.498199 6.34356 0.825479C5.33225 1.15276 4.40876 1.70605 3.64313 2.4434C2.8775 3.18074 2.28984 4.08276 1.92474 5.08103C1.55963 6.07931 1.42667 7.14762 1.53593 8.20494C1.64519 9.26226 1.99381 10.2808 2.55533 11.1833L0.5 15.5L4.816 13.444C5.19147 13.6768 5.58786 13.8741 6 14.0333"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.6213 11.5H9.37868"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.5 9.37868V13.6213"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_427_2711">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
