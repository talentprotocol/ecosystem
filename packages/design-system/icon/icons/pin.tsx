import { buildColor } from "../../colors";
import { SVGProps } from "../types";

export const Pin = ({ color = "primary", size = 16 }: SVGProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.93604 8C10.3167 8 11.436 6.88071 11.436 5.5C11.436 4.11929 10.3167 3 8.93604 3C7.55532 3 6.43604 4.11929 6.43604 5.5C6.43604 6.88071 7.55532 8 8.93604 8Z"
      stroke={buildColor(color)}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.93604 0.5C10.2621 0.5 11.5339 1.02678 12.4716 1.96447C13.4093 2.90215 13.936 4.17392 13.936 5.5C13.936 7.77133 10.5534 13.4667 9.3527 15.2767C9.30709 15.3454 9.24518 15.4018 9.17247 15.4408C9.09977 15.4799 9.01855 15.5003 8.93604 15.5003C8.85353 15.5003 8.7723 15.4799 8.6996 15.4408C8.62689 15.4018 8.56498 15.3454 8.51937 15.2767C7.3187 13.4667 3.93604 7.77133 3.93604 5.5C3.93604 4.17392 4.46282 2.90215 5.4005 1.96447C6.33818 1.02678 7.60995 0.5 8.93604 0.5V0.5Z"
      stroke={buildColor(color)}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
