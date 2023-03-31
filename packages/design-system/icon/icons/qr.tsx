import { buildColor } from "../../colors";
import { SVGProps } from "../types";

export const QR = ({ color = "primary", size = 16 }: SVGProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 17 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_8688_13960)">
      <path
        d="M1.43604 8.5V9.5H2.43604"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.43604 0.5H1.43604V4.5H5.43604V0.5Z"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.436 0.5H12.436V4.5H16.436V0.5Z"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.43604 11.5H1.43604V15.5H5.43604V11.5Z"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.93604 0.5H10.436"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.43604 0.5V2.5H8.93604"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.436 2.5V4.5H7.43604"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.43604 6.5H5.43604V7.5"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.43604 9.5H5.43604"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.436 15.5H14.436V13.5H16.436V11.5H14.436"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.436 15.5H7.43604V11.5"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.436 11.5V15.5"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.43604 11.5H10.436V13.5H9.43604"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.43604 8.5V9.5H8.43604"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.436 9.5H12.436"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.436 9.5V7.5"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.43604 6.5H9.43604V7.5"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.436 6.5V7.5"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.436 9V9.5"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.436 6.5V7.5H14.436V9"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_8688_13960">
        <rect
          width={size}
          height={size}
          fill="transparent"
          transform="translate(0.936035)"
        />
      </clipPath>
    </defs>
  </svg>
);
