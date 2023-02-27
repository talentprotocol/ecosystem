import { buildColor } from "../../colors";
import { SVGProps } from "../types";

export const Learn = ({ color = "primary" }: SVGProps) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.3237 6.25296V9.25296"
      stroke={buildColor(color)}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12.3237 7.75296V11.5912C11.2331 12.6333 9.81286 13.2244 8.3312 13.253C6.84557 13.222 5.42139 12.6314 4.32373 11.5912V7.75296"
      stroke={buildColor(color)}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M1.32373 6.25296L8.32373 9.25296L15.3237 6.25296L8.32373 3.25296L1.32373 6.25296Z"
      stroke={buildColor(color)}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
