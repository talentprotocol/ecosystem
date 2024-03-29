import { buildColor } from "../../colors";
import { SVGProps } from "../types";

export const Graph1 = ({ color = "primary", size = 24 }: SVGProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_4154_6522)">
      <path
        d="M0.75 0.75V23.25H23.25"
        stroke={buildColor(color)}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.937 8.57798L20.43 2.96198"
        stroke={buildColor(color)}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.62109 7.35901L13.6291 9.14001"
        stroke={buildColor(color)}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0.75 11.25L6.964 7.52197"
        stroke={buildColor(color)}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.561 16.521L20.301 13.888"
        stroke={buildColor(color)}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.25 17.25H12.75"
        stroke={buildColor(color)}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0.75 20.25L5.408 17.921"
        stroke={buildColor(color)}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.25 8.25C9.07843 8.25 9.75 7.57843 9.75 6.75C9.75 5.92157 9.07843 5.25 8.25 5.25C7.42157 5.25 6.75 5.92157 6.75 6.75C6.75 7.57843 7.42157 8.25 8.25 8.25Z"
        stroke={buildColor(color)}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 11.25C15.8284 11.25 16.5 10.5784 16.5 9.75C16.5 8.92157 15.8284 8.25 15 8.25C14.1716 8.25 13.5 8.92157 13.5 9.75C13.5 10.5784 14.1716 11.25 15 11.25Z"
        stroke={buildColor(color)}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.75 3.75C22.5784 3.75 23.25 3.07843 23.25 2.25C23.25 1.42157 22.5784 0.75 21.75 0.75C20.9216 0.75 20.25 1.42157 20.25 2.25C20.25 3.07843 20.9216 3.75 21.75 3.75Z"
        stroke={buildColor(color)}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.75 15C22.5784 15 23.25 14.3284 23.25 13.5C23.25 12.6716 22.5784 12 21.75 12C20.9216 12 20.25 12.6716 20.25 13.5C20.25 14.3284 20.9216 15 21.75 15Z"
        stroke={buildColor(color)}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.25 18.75C15.0784 18.75 15.75 18.0784 15.75 17.25C15.75 16.4216 15.0784 15.75 14.25 15.75C13.4216 15.75 12.75 16.4216 12.75 17.25C12.75 18.0784 13.4216 18.75 14.25 18.75Z"
        stroke={buildColor(color)}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.75 18.75C7.57843 18.75 8.25 18.0784 8.25 17.25C8.25 16.4216 7.57843 15.75 6.75 15.75C5.92157 15.75 5.25 16.4216 5.25 17.25C5.25 18.0784 5.92157 18.75 6.75 18.75Z"
        stroke={buildColor(color)}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_4154_6522">
        <rect width="24" height="24" fill="transparent" />
      </clipPath>
    </defs>
  </svg>
);
