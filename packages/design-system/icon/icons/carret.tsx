import { buildColor } from "../../colors";
import { SVGProps } from "../types";

export const Carret = ({ color = "primary", size = 12 }: SVGProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.74994 1.5L8.03794 5.788C8.0658 5.81583 8.08791 5.84887 8.10299 5.88525C8.11808 5.92163 8.12584 5.96062 8.12584 6C8.12584 6.03938 8.11808 6.07837 8.10299 6.11475C8.08791 6.15113 8.0658 6.18417 8.03794 6.212L3.74994 10.5"
      stroke={buildColor(color)}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
