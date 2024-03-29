import { buildColor } from "../../colors";
import { SVGProps } from "../types";

export const Flag = ({ color = "primary", size = 16 }: SVGProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_3696_6659)">
      <path
        d="M0.5 0.5V15.5"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0.5 1.5H15C15.0963 1.5001 15.1906 1.52803 15.2714 1.58041C15.3522 1.6328 15.4162 1.70742 15.4556 1.7953C15.4951 1.88319 15.5083 1.98059 15.4937 2.0758C15.4791 2.17101 15.4373 2.25998 15.3733 2.332L12.7033 5.33333C12.5405 5.51642 12.4505 5.75295 12.4505 5.998C12.4505 6.24305 12.5405 6.47958 12.7033 6.66267L15.37 9.666C15.434 9.73802 15.4758 9.82699 15.4904 9.9222C15.505 10.0174 15.4917 10.1148 15.4523 10.2027C15.4129 10.2906 15.3489 10.3652 15.2681 10.4176C15.1872 10.47 15.093 10.4979 14.9967 10.498H0.5"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_3696_6659">
        <rect width="16" height="16" fill="transparent" />
      </clipPath>
    </defs>
  </svg>
);
