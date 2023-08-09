import { buildColor } from "../../colors";
import { SVGProps } from "../types";

export const Notification = ({ color = "primary", size = 6 }: SVGProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="5"
      cy="5"
      r="4"
      fill={buildColor(color)}
      stroke={buildColor(color)}
      strokeWidth="2"
    />
  </svg>
);
