import { buildColor } from "../../colors";
import { SVGProps } from "../types";

export const Add = ({ color = "primary", size = 16 }: SVGProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.5 0.5C8.5 0.223858 8.27614 0 8 0C7.72386 0 7.5 0.223858 7.5 0.5V7.5H0.5C0.223858 7.5 0 7.72386 0 8C0 8.27614 0.223858 8.5 0.5 8.5H7.5V15.5C7.5 15.7761 7.72386 16 8 16C8.27614 16 8.5 15.7761 8.5 15.5V8.5H15.5C15.7761 8.5 16 8.27614 16 8C16 7.72386 15.7761 7.5 15.5 7.5H8.5V0.5Z"
      fill={buildColor(color)}
    />
  </svg>
);
