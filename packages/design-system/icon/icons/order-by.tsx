import { buildColor } from "../../colors";
import { SVGProps } from "../types";

export const OrderBy = ({ color = "primary", size }: SVGProps) => (
  <svg
    width={size}
    height={size}
    viewBox={`0 0 ${size} ${size}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.56699 0.75C7.75944 0.416666 8.24056 0.416667 8.43301 0.75L11.0311 5.25C11.2235 5.58333 10.983 6 10.5981 6H5.40192C5.01702 6 4.77646 5.58333 4.96891 5.25L7.56699 0.75Z"
      fill={buildColor(color)}
    />
    <path
      d="M8.43301 15.25C8.24056 15.5833 7.75944 15.5833 7.56699 15.25L4.96891 10.75C4.77646 10.4167 5.01702 10 5.40192 10L10.5981 10C10.983 10 11.2235 10.4167 11.0311 10.75L8.43301 15.25Z"
      fill={buildColor(color)}
    />
  </svg>
);
