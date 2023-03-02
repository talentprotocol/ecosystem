import { buildColor } from "../../colors";
import { SVGProps } from "../types";

export const Planet = ({ color = "primary" }: SVGProps) => (
  <svg
    width="17"
    height="16"
    viewBox="0 0 17 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_8118_13520)">
      <path
        d="M4.68808 12.898C3.99115 12.3252 3.42107 11.6136 3.01409 10.8086C2.60711 10.0035 2.37215 9.12251 2.32415 8.22169C2.27615 7.32086 2.41617 6.41991 2.7353 5.57614C3.05443 4.73237 3.54568 3.96426 4.1778 3.32067C4.80992 2.67708 5.56908 2.17209 6.40697 1.83785C7.24486 1.5036 8.14315 1.3474 9.0447 1.37919C9.94624 1.41098 10.8313 1.63006 11.6436 2.0225C12.4558 2.41494 13.1775 2.97214 13.7628 3.65866"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.314 7.724C15.3347 8.61104 15.1736 9.49293 14.8405 10.3153C14.5075 11.1378 14.0096 11.8833 13.3776 12.506C12.7456 13.1288 11.9927 13.6155 11.1655 13.9363C10.3382 14.2571 9.45402 14.4051 8.56738 14.3713"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.0339 10.8487C1.74457 12.8587 1.24457 14.4773 1.87257 15.106C2.9599 16.1933 7.0139 13.9013 10.9279 9.98801C14.8419 6.07468 17.1359 2.02001 16.0459 0.933345C15.4199 0.307345 13.7932 0.819345 11.7946 2.09668"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.56592 6.37601C10.2563 6.37601 10.8159 5.81636 10.8159 5.12601C10.8159 4.43565 10.2563 3.87601 9.56592 3.87601C8.87556 3.87601 8.31592 4.43565 8.31592 5.12601C8.31592 5.81636 8.87556 6.37601 9.56592 6.37601Z"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.79138 5.43134C3.13405 5.35802 3.4883 5.35756 3.83116 5.42999C4.17401 5.50241 4.49781 5.64611 4.78155 5.85175C5.06529 6.05739 5.30262 6.32038 5.47816 6.62367C5.6537 6.92695 5.76352 7.26375 5.8005 7.61222C5.83747 7.96068 5.80078 8.31303 5.69279 8.6464C5.58481 8.97977 5.40794 9.28671 5.17368 9.54732C4.93941 9.80792 4.65298 10.0164 4.33295 10.1591C4.01293 10.3019 3.66647 10.3758 3.31605 10.376C3.13639 10.3694 2.95778 10.3456 2.78271 10.3047"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_8118_13520">
        <rect
          width="16"
          height="16"
          fill="transparent"
          transform="translate(0.936035)"
        />
      </clipPath>
    </defs>
  </svg>
);
