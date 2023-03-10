import { buildColor } from "../../colors";
import { SVGProps } from "../types";

export const Loading = ({ color = "primary", size = 16 }: SVGProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.436 8C16.436 9.48336 15.9962 10.9334 15.1721 12.1668C14.3479 13.4001 13.1766 14.3614 11.8062 14.9291C10.4357 15.4968 8.92772 15.6453 7.47286 15.3559C6.018 15.0665 4.68163 14.3522 3.63273 13.3033C2.58384 12.2544 1.86953 10.918 1.58015 9.46318C1.29076 8.00832 1.43928 6.50032 2.00694 5.12987C2.5746 3.75943 3.53589 2.58809 4.76926 1.76398C6.00263 0.939867 7.45268 0.5 8.93604 0.5"
      stroke={buildColor(color)}
      strokeLinecap="round"
    />
  </svg>
);
