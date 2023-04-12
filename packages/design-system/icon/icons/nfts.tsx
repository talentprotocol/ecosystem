import { buildColor } from "../../colors";
import { SVGProps } from "../types";

export const NFTs = ({ color = "primary", size = 16 }: SVGProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_4144_6539)">
      <path
        d="M7.53988 0.713339L2.22055 7.38001C2.07791 7.55464 2 7.77319 2 7.99867C2 8.22415 2.07791 8.44271 2.22055 8.61734L7.53988 15.284C7.5962 15.3513 7.66657 15.4053 7.74605 15.4424C7.82552 15.4795 7.91217 15.4988 7.99988 15.4988C8.08759 15.4988 8.17424 15.4795 8.25371 15.4424C8.33319 15.4053 8.40356 15.3513 8.45988 15.284L13.7792 8.61734C13.9218 8.44271 13.9998 8.22415 13.9998 7.99867C13.9998 7.77319 13.9218 7.55464 13.7792 7.38001L8.45988 0.713339C8.40356 0.646092 8.33319 0.592011 8.25371 0.554904C8.17424 0.517797 8.08759 0.498566 7.99988 0.498566C7.91217 0.498566 7.82552 0.517797 7.74605 0.554904C7.66657 0.592011 7.5962 0.646092 7.53988 0.713339V0.713339Z"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 8L5.5 8.68067H10.5L14 8"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.5 8.68067L8 0.501999L10.5 8.68067L8 15.5L5.5 8.68067Z"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_4144_6539">
        <rect width="16" height="16" fill="transparent" />
      </clipPath>
    </defs>
  </svg>
);
