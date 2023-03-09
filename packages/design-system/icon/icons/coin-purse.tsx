import { buildColor } from "../../colors";
import { SVGProps } from "../types";

export const CoinPurse = ({ color = "primary", size = 24 }: SVGProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_4152_6506)">
      <path
        d="M8.875 5.375C9.91053 5.375 10.75 4.53553 10.75 3.5C10.75 2.46447 9.91053 1.625 8.875 1.625C7.83947 1.625 7 2.46447 7 3.5C7 4.53553 7.83947 5.375 8.875 5.375Z"
        stroke={buildColor(color)}
        stroke-width="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.875 5.375C15.9105 5.375 16.75 4.53553 16.75 3.5C16.75 2.46447 15.9105 1.625 14.875 1.625C13.8395 1.625 13 2.46447 13 3.5C13 4.53553 13.8395 5.375 14.875 5.375Z"
        stroke={buildColor(color)}
        stroke-width="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0.75 9.625C0.75 9.02826 0.987053 8.45597 1.40901 8.03401C1.83097 7.61205 2.40326 7.375 3 7.375H21C21.5967 7.375 22.169 7.61205 22.591 8.03401C23.0129 8.45597 23.25 9.02826 23.25 9.625"
        stroke={buildColor(color)}
        stroke-width="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.2001 22.375H6.80006C6.09857 22.375 5.4068 22.2109 4.77998 21.896C4.15316 21.581 3.60865 21.1239 3.18992 20.5611C2.77119 19.9983 2.48984 19.3454 2.36832 18.6545C2.24681 17.9636 2.28849 17.2539 2.49006 16.582L5.25006 7.375H18.7501L21.5121 16.582C21.7137 17.2541 21.7553 17.964 21.6337 18.655C21.5121 19.346 21.2305 19.9991 20.8116 20.5619C20.3926 21.1248 19.8479 21.5819 19.2208 21.8967C18.5937 22.2115 17.9017 22.3753 17.2001 22.375Z"
        stroke={buildColor(color)}
        stroke-width="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_4152_6506">
        <rect width={size} height={size} fill="transparent" />
      </clipPath>
    </defs>
  </svg>
);
