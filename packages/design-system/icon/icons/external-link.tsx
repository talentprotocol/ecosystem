import { buildColor } from "../../colors";
import { SVGProps } from "../types";

export const ExternalLink = ({ color = "primary", size = 16 }: SVGProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_86_52)">
      <path
        d="M6.1665 9.682L15.4998 0.5"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.4998 5.74733V0.5H10.1665"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.08333 3.83333H1.08333C0.928624 3.83333 0.780251 3.89479 0.670854 4.00418C0.561458 4.11358 0.5 4.26195 0.5 4.41666V14.9167C0.5 15.0714 0.561458 15.2197 0.670854 15.3291C0.780251 15.4385 0.928624 15.5 1.08333 15.5H11.5833C11.738 15.5 11.8864 15.4385 11.9958 15.3291C12.1052 15.2197 12.1667 15.0714 12.1667 14.9167V7.91666"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_86_52">
        <rect width={size} height={size} fill="transparent" />
      </clipPath>
    </defs>
  </svg>
);
