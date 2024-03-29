import { buildColor } from "../../colors";
import { SVGProps } from "../types";

export const DeleteIcon = ({ color = "primary", size = 16 }: SVGProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_485_3179)">
      <path
        d="M0.666748 3.33334H15.3334"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 0.666672H6.5C6.23478 0.666672 5.98043 0.772029 5.79289 0.959565C5.60536 1.1471 5.5 1.40146 5.5 1.66667V3.33334H10.5V1.66667C10.5 1.40146 10.3946 1.1471 10.2071 0.959565C10.0196 0.772029 9.76522 0.666672 9.5 0.666672Z"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 11.8333V6.83334"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 11.8333V6.83334"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5733 14.4133C12.5548 14.6639 12.442 14.8981 12.2577 15.0688C12.0734 15.2395 11.8312 15.334 11.58 15.3333H4.42C4.16878 15.334 3.92663 15.2395 3.74231 15.0688C3.558 14.8981 3.44521 14.6639 3.42667 14.4133L2.5 3.33334H13.5L12.5733 14.4133Z"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_485_3179">
        <rect width="16" height="16" fill="transparent" />
      </clipPath>
    </defs>
  </svg>
);
