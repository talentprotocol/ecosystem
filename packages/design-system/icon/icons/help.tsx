import { buildColor } from "../../colors";
import { SVGProps } from "../types";

export const Help = ({ color = "primary", size = 16 }: SVGProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_702_3470)">
      <path
        d="M6 6C6.00007 5.63335 6.10093 5.27378 6.29155 4.96058C6.48217 4.64738 6.75522 4.3926 7.08085 4.2241C7.40649 4.0556 7.77218 3.97986 8.13795 4.00515C8.50372 4.03044 8.85551 4.15579 9.15486 4.3675C9.4542 4.57921 9.68959 4.86914 9.8353 5.20559C9.981 5.54205 10.0314 5.91208 9.98102 6.27525C9.93063 6.63842 9.78138 6.98075 9.54958 7.26482C9.31778 7.5489 9.01235 7.76378 8.66667 7.886C8.47161 7.95496 8.30275 8.08272 8.18335 8.25167C8.06395 8.42062 7.99989 8.62245 8 8.82933V9.5"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 11.5C7.95055 11.5 7.90222 11.5147 7.86111 11.5421C7.82 11.5696 7.78795 11.6086 7.76903 11.6543C7.75011 11.7 7.74516 11.7503 7.7548 11.7988C7.76445 11.8473 7.78826 11.8918 7.82322 11.9268C7.85819 11.9617 7.90273 11.9855 7.95123 11.9952C7.99972 12.0048 8.04999 11.9999 8.09567 11.981C8.14135 11.962 8.1804 11.93 8.20787 11.8889C8.23534 11.8478 8.25 11.7994 8.25 11.75C8.25 11.6837 8.22366 11.6201 8.17678 11.5732C8.12989 11.5263 8.0663 11.5 8 11.5Z"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0.5 8C0.5 9.98912 1.29018 11.8968 2.6967 13.3033C4.10322 14.7098 6.01088 15.5 8 15.5C9.98912 15.5 11.8968 14.7098 13.3033 13.3033C14.7098 11.8968 15.5 9.98912 15.5 8C15.5 6.01088 14.7098 4.10322 13.3033 2.6967C11.8968 1.29018 9.98912 0.5 8 0.5C6.01088 0.5 4.10322 1.29018 2.6967 2.6967C1.29018 4.10322 0.5 6.01088 0.5 8V8Z"
        stroke={buildColor(color)}
      />
    </g>
    <defs>
      <clipPath id="clip0_702_3470">
        <rect width="16" height="16" fill="transparent" />
      </clipPath>
    </defs>
  </svg>
);
