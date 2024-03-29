import { buildColor } from "../../colors";
import { SVGProps } from "../types";

export const Chat = ({ color = "primary", size = 16 }: SVGProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_53_80)">
      <g clipPath="url(#clip1_53_80)">
        <path
          d="M8.5 0.499995C7.25253 0.498196 6.02731 0.83027 4.95149 1.46176C3.87566 2.09324 2.98843 3.00113 2.38186 4.0912C1.7753 5.18128 1.47151 6.41381 1.50201 7.66091C1.53251 8.908 1.8962 10.1242 2.55533 11.1833L0.5 15.5L4.816 13.4447C5.73647 14.017 6.77726 14.3677 7.85637 14.4692C8.93548 14.5707 10.0234 14.4203 11.0345 14.0297C12.0455 13.6391 12.9521 13.0191 13.6827 12.2185C14.4133 11.4179 14.948 10.4585 15.2447 9.41607C15.5414 8.37359 15.5919 7.27646 15.3924 6.21112C15.1928 5.14577 14.7486 4.14133 14.0947 3.27692C13.4408 2.41251 12.5951 1.71176 11.6242 1.22987C10.6534 0.747982 9.58387 0.498129 8.5 0.499995V0.499995Z"
          stroke={buildColor(color)}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_53_80">
        <rect width="16" height="16" fill="transparent" />
      </clipPath>
      <clipPath id="clip1_53_80">
        <rect width="16" height="16" fill="transparent" />
      </clipPath>
    </defs>
  </svg>
);
