import { buildColor } from "../../colors";
import { SVGProps } from "../types";

export const Danger = ({ color = "primary", size = 64 }: SVGProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M64 32C64 49.6731 49.6731 64 32 64C14.3269 64 0 49.6731 0 32C0 14.3269 14.3269 0 32 0C49.6731 0 64 14.3269 64 32ZM3.2 32C3.2 47.9058 16.0942 60.8 32 60.8C47.9058 60.8 60.8 47.9058 60.8 32C60.8 16.0942 47.9058 3.2 32 3.2C16.0942 3.2 3.2 16.0942 3.2 32Z"
      fill={buildColor(color)}
    />
    <path
      d="M25 39.5L40 24.5"
      stroke={buildColor(color)}
      stroke-width="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M25 24.5L40 39.5"
      stroke={buildColor(color)}
      stroke-width="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
