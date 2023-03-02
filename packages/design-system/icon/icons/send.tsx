import { buildColor } from "../../colors";
import { SVGProps } from "../types";

export const Send = ({ color = "primary" }: SVGProps) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_432_2387)">
      <path
        d="M0.933227 2.49533C0.829143 2.30909 0.787352 2.09444 0.813962 1.88275C0.840572 1.67107 0.934188 1.47344 1.08113 1.31876C1.22807 1.16407 1.42063 1.06043 1.63067 1.023C1.84071 0.985556 2.05722 1.01627 2.24856 1.11066L14.9246 7.55C15.0068 7.59183 15.0759 7.6556 15.1241 7.73426C15.1724 7.81292 15.1979 7.90339 15.1979 7.99566C15.1979 8.08794 15.1724 8.17841 15.1241 8.25707C15.0759 8.33572 15.0068 8.3995 14.9246 8.44133L2.24856 14.8893C2.05722 14.9837 1.84071 15.0144 1.63067 14.977C1.42063 14.9396 1.22807 14.8359 1.08113 14.6812C0.934188 14.5266 0.840572 14.3289 0.813962 14.1172C0.787352 13.9056 0.829143 13.6909 0.933227 13.5047L4.30523 7.99533L0.933227 2.49533Z"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.198 7.99533H4.302"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_432_2387">
        <rect width="16" height="16" fill="transparent" />
      </clipPath>
    </defs>
  </svg>
);
