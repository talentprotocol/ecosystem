import { SVGProps } from "../types";

export const Celo = ({ size = 24 }: SVGProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_2388_5021)">
      <circle cx="12.8418" cy="12" r="12" fill="#FCFF52" />
      <g clipPath="url(#clip1_2388_5021)">
        <path
          d="M19.8053 5H5.8418V18.9635H19.8053V14.0891H17.4866C16.6882 15.8682 14.8908 17.1042 12.8345 17.1042C9.99805 17.1042 7.70117 14.7854 7.70117 11.9708C7.69753 9.15625 9.99805 6.85938 12.8345 6.85938C14.9309 6.85938 16.7283 8.13542 17.5267 9.95469H19.8053V5Z"
          fill="black"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_2388_5021">
        <rect
          width="24"
          height="24"
          fill="white"
          transform="translate(0.841797)"
        />
      </clipPath>
      <clipPath id="clip1_2388_5021">
        <rect
          width="14"
          height="13.9635"
          fill="white"
          transform="translate(5.8418 5)"
        />
      </clipPath>
    </defs>
  </svg>
);
