import { buildColor } from "../../colors";
import { SVGProps } from "../types";

export const Settings = ({ color = "primary", size = 16 }: SVGProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_3140_5581)">
      <path
        d="M0.498535 8.16667C0.498535 9.22754 0.919963 10.245 1.67011 10.9951C2.42025 11.7452 3.43767 12.1667 4.49854 12.1667H11.4985C12.5594 12.1667 13.5768 11.7452 14.327 10.9951C15.0771 10.245 15.4985 9.22754 15.4985 8.16667C15.4985 7.10581 15.0771 6.08839 14.327 5.33824C13.5768 4.5881 12.5594 4.16667 11.4985 4.16667H4.49854C3.43767 4.16667 2.42025 4.5881 1.67011 5.33824C0.919963 6.08839 0.498535 7.10581 0.498535 8.16667V8.16667Z"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.4985 6.16667V10.1667"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.49854 6.16667V10.1667"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_3140_5581">
        <rect width="16" height="16" fill="transparent" />
      </clipPath>
    </defs>
  </svg>
);
