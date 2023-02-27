import { buildColor } from "../../colors";
import { SVGProps } from "../types";

export const Mic = ({ color = "primary" }: SVGProps) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 13V15.5"
      stroke={buildColor(color)}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8.33333 0.5H7.66667C6.19391 0.5 5 1.69391 5 3.16667V8C5 9.47276 6.19391 10.6667 7.66667 10.6667H8.33333C9.80609 10.6667 11 9.47276 11 8V3.16667C11 1.69391 9.80609 0.5 8.33333 0.5Z"
      stroke={buildColor(color)}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M2.66675 6.5V8C2.66675 9.32608 3.19353 10.5979 4.13121 11.5355C5.0689 12.4732 6.34067 13 7.66675 13H8.33341C9.6595 13 10.9313 12.4732 11.8689 11.5355C12.8066 10.5979 13.3334 9.32608 13.3334 8V6.5"
      stroke={buildColor(color)}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
