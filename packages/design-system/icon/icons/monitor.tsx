import { buildColor } from "../../colors";
import { SVGProps } from "../types";

export const Monitor = ({ color = "primary", size = 16 }: SVGProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.8333 1.91667H1.16667C0.798477 1.91667 0.5 2.21515 0.5 2.58334V11.25C0.5 11.6182 0.798477 11.9167 1.16667 11.9167H14.8333C15.2015 11.9167 15.5 11.6182 15.5 11.25V2.58334C15.5 2.21515 15.2015 1.91667 14.8333 1.91667Z"
      stroke={buildColor(color)}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5 14.4167H11"
      stroke={buildColor(color)}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 11.9167V14.4167"
      stroke={buildColor(color)}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
