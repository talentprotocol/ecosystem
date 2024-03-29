import { buildColor } from "../../colors";
import { SVGProps } from "../types";

export const SignOut = ({ color = "primary", size = 16 }: SVGProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_3137_5575)">
      <path
        d="M0.5 8.00267H11"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 10.5027L11 8.00267L8.5 5.50267"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.2041 11.0667C2.89213 12.4801 4.03591 13.6208 5.4512 14.3051C6.86649 14.9893 8.4709 15.1772 10.006 14.8386C11.5411 14.4999 12.9175 13.6544 13.9136 12.4382C14.9096 11.222 15.4673 9.70598 15.4968 8.13424C15.5263 6.5625 15.0259 5.02659 14.0761 3.7739C13.1264 2.5212 11.7826 1.62466 10.2613 1.22867C8.74 0.832684 7.12966 0.960308 5.68971 1.59099C4.24975 2.22166 3.06399 3.31868 2.32343 4.70533"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_3137_5575">
        <rect width="16" height="16" fill="transparent" />
      </clipPath>
    </defs>
  </svg>
);
