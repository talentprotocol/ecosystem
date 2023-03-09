import { buildColor } from "../../colors";
import { SVGProps } from "../types";

export const Question = ({ color = "primary", size = 64 }: SVGProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M24.5 23.9999C24.5003 22.5334 24.9037 21.0951 25.6662 19.8423C26.4287 18.5895 27.5208 17.5704 28.8235 16.8963C30.1259 16.2223 31.5888 15.9194 33.0517 16.0205C34.5149 16.1217 35.9221 16.6231 37.1195 17.4699C38.3168 18.3168 39.2584 19.4765 39.8411 20.8223C40.424 22.1681 40.6256 23.6483 40.424 25.1009C40.2224 26.5536 39.6256 27.923 38.6984 29.0593C37.7712 30.1956 36.5493 31.055 35.1667 31.5438C34.3864 31.8198 33.7109 32.3308 33.2333 33.0065C32.7557 33.6825 32.4995 34.4897 32.5 35.3172V37.9998"
      stroke={buildColor(color)}
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M32.5 48C31.9477 48 31.5 47.5523 31.5 47C31.5 46.4477 31.9477 46 32.5 46"
      stroke={buildColor(color)}
      stroke-width="3"
    />
    <path
      d="M32.5 48C33.0523 48 33.5 47.5523 33.5 47C33.5 46.4477 33.0523 46 32.5 46"
      stroke={buildColor(color)}
      stroke-width="3"
    />
    <path
      d="M32.5 62C49.0685 62 62.5 48.5685 62.5 32C62.5 15.4315 49.0685 2 32.5 2C15.9315 2 2.5 15.4315 2.5 32C2.5 48.5685 15.9315 62 32.5 62Z"
      stroke={buildColor(color)}
      stroke-width="3"
      stroke-miterlimit="10"
    />
  </svg>
);
