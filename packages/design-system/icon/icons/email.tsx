import { buildColor } from "../../colors";
import { SVGProps } from "../types";

export const Email = ({ color = "primary", size = 16 }: SVGProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 3.16667H15V13.1667H1V3.16667Z"
      stroke={buildColor(color)}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.7741 3.53334L9.34474 7.70934C8.95922 8.00591 8.48647 8.16671 8.00007 8.16671C7.51368 8.16671 7.04093 8.00591 6.65541 7.70934L1.22607 3.53334"
      stroke={buildColor(color)}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
