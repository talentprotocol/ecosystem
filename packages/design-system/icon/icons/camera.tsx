import { buildColor } from "../../colors";
import { SVGProps } from "../types";

export const Camera = ({ color = "primary", size }: SVGProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.5 12C11.433 12 13 10.433 13 8.5C13 6.56701 11.433 5 9.5 5C7.567 5 6 6.56701 6 8.5C6 10.433 7.567 12 9.5 12Z"
      stroke={buildColor(color)}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13 4L12.2767 2.55267C12.1936 2.38655 12.0659 2.24685 11.9079 2.14923C11.7498 2.05162 11.5677 1.99995 11.382 2H7.618C7.43227 1.99995 7.2502 2.05162 7.09213 2.14923C6.93413 2.24685 6.8064 2.38655 6.72333 2.55267L6 4H1.5C1.23479 4 0.980427 4.10536 0.792893 4.29289C0.605357 4.48043 0.5 4.73479 0.5 5V13C0.5 13.2652 0.605357 13.5196 0.792893 13.7071C0.980427 13.8947 1.23479 14 1.5 14H14.5C14.7652 14 15.0196 13.8947 15.2071 13.7071C15.3947 13.5196 15.5 13.2652 15.5 13V5C15.5 4.73479 15.3947 4.48043 15.2071 4.29289C15.0196 4.10536 14.7652 4 14.5 4H13Z"
      stroke={buildColor(color)}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.75 6.5C2.61193 6.5 2.5 6.38807 2.5 6.25C2.5 6.11193 2.61193 6 2.75 6"
      stroke={buildColor(color)}
    />
    <path
      d="M2.75 6.5C2.88807 6.5 3 6.38807 3 6.25C3 6.11193 2.88807 6 2.75 6"
      stroke={buildColor(color)}
    />
    <path
      d="M3.5 4V3"
      stroke={buildColor(color)}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
