import { buildColor } from "../../colors";
import { SVGProps } from "../types";

export const Home = ({ color = "primary", size = 16 }: SVGProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_53_78)">
      <path
        d="M15.2452 5.96467L7.99992 0.498001L0.747915 5.96467C0.597994 6.10301 0.507845 6.29431 0.496582 6.498V14.846C0.49711 15.0188 0.565972 15.1843 0.688131 15.3065C0.810291 15.4286 0.975823 15.4975 1.14858 15.498H5.49658V12C5.49658 11.337 5.75997 10.7011 6.22882 10.2322C6.69766 9.76339 7.33354 9.5 7.99658 9.5C8.65962 9.5 9.29551 9.76339 9.76435 10.2322C10.2332 10.7011 10.4966 11.337 10.4966 12V15.5H14.8439C15.0167 15.4995 15.1823 15.4306 15.3046 15.3085C15.4269 15.1864 15.4959 15.0208 15.4966 14.848V6.498C15.485 6.29438 15.3949 6.10318 15.2452 5.96467Z"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_53_78">
        <rect width="16" height="16" fill="transparent" />
      </clipPath>
    </defs>
  </svg>
);
