import { buildColor } from "../../colors";
import { SVGProps } from "../types";

export const User = ({ color = "primary", size = 16 }: SVGProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.5 4C4.5 4.92826 4.86875 5.8185 5.52513 6.47487C6.1815 7.13125 7.07174 7.5 8 7.5C8.92826 7.5 9.8185 7.13125 10.4749 6.47487C11.1313 5.8185 11.5 4.92826 11.5 4C11.5 3.07174 11.1313 2.1815 10.4749 1.52513C9.8185 0.868749 8.92826 0.5 8 0.5C7.07174 0.5 6.1815 0.868749 5.52513 1.52513C4.86875 2.1815 4.5 3.07174 4.5 4V4Z"
      stroke={buildColor(color)}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1.5 15.5C1.5 13.7761 2.18482 12.1228 3.40381 10.9038C4.62279 9.68482 6.27609 9 8 9C9.72391 9 11.3772 9.68482 12.5962 10.9038C13.8152 12.1228 14.5 13.7761 14.5 15.5"
      stroke={buildColor(color)}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
