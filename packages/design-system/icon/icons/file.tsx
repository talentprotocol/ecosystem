import { buildColor } from "../../colors";
import { SVGProps } from "../types";

export const File = ({ color = "primary", size = 16 }: SVGProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_4226_6587)">
      <path
        d="M15 14.5C15 14.7652 14.8946 15.0196 14.7071 15.2071C14.5196 15.3946 14.2652 15.5 14 15.5H2C1.73478 15.5 1.48043 15.3946 1.29289 15.2071C1.10536 15.0196 1 14.7652 1 14.5V1.5C1 1.23478 1.10536 0.98043 1.29289 0.792893C1.48043 0.605357 1.73478 0.5 2 0.5H12.03C12.291 0.499852 12.5418 0.601776 12.7287 0.784L14.698 2.706C14.7936 2.79915 14.8695 2.9105 14.9214 3.03347C14.9733 3.15643 15 3.28854 15 3.422V14.5Z"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.02979 5.5H12.0298"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.02979 8.5H12.0298"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.02979 11.5H8.02979"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_4226_6587">
        <rect width="16" height="16" fill="transparent" />
      </clipPath>
    </defs>
  </svg>
);
