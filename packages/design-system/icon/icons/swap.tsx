import { buildColor } from "../../colors";
import { SVGProps } from "../types";

export const Swap = ({ color = "primary", size = 16 }: SVGProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 10H15.5"
      stroke={buildColor(color)}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.5 8L15.5 10L13.5 12"
      stroke={buildColor(color)}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 6H0.5"
      stroke={buildColor(color)}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.5 8L0.5 6L2.5 4"
      stroke={buildColor(color)}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
