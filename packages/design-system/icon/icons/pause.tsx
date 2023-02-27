import { buildColor } from "../../colors";
import { SVGProps } from "../types";

export const Pause = ({ color = "primary" }: SVGProps) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 0.666672H6.66667V15.3333H2V0.666672Z"
      fill={buildColor(color)}
    />
    <path
      d="M9.33325 0.666672H13.9999V15.3333H9.33325V0.666672Z"
      fill={buildColor(color)}
    />
  </svg>
);
