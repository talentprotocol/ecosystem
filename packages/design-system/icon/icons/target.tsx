import { buildColor } from "../../colors";
import { SVGProps } from "../types";

export const Target = ({ color = "primary", size = 16 }: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
  >
    <path
      stroke={buildColor(color)}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
      d="M29.376 31.624l11.112-11.112M40.488 20.512l1.515-10L50.664 2l1.339 6.997L59 10.336l-8.512 8.661-10 1.515zM56.147 25.368a26 26 0 11-22.51-19.235M44.592 28.632A14.003 14.003 0 1130.992 18M17.376 54l-2 8M45.376 54l2 8"
    ></path>
  </svg>
);
