import { buildColor } from "../../colors";
import { SVGProps } from "../types";

export const MultipleUsers = ({ color = "primary", size = 16 }: SVGProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 17 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_10000_14932)">
      <path
        d="M5.93604 8C7.45482 8 8.68604 6.76878 8.68604 5.25C8.68604 3.73122 7.45482 2.5 5.93604 2.5C4.41725 2.5 3.18604 3.73122 3.18604 5.25C3.18604 6.76878 4.41725 8 5.93604 8Z"
        stroke={buildColor(color)}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1.43604 13.5C1.43604 12.3065 1.91014 11.1619 2.75405 10.318C3.59797 9.47411 4.74256 9 5.93604 9C7.12951 9 8.2741 9.47411 9.11802 10.318C9.96193 11.1619 10.436 12.3065 10.436 13.5"
        stroke={buildColor(color)}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.4366 2.944C10.8519 2.67419 11.3322 2.52151 11.8271 2.50209C12.3219 2.48266 12.8128 2.59721 13.2479 2.83363C13.683 3.07005 14.0462 3.41958 14.2991 3.8453C14.5521 4.27103 14.6854 4.75716 14.685 5.25236C14.6845 5.74756 14.5504 6.23345 14.2967 6.65874C14.043 7.08402 13.6792 7.43292 13.2437 7.66859C12.8082 7.90425 12.3171 8.01795 11.8223 7.99766C11.3275 7.97738 10.8474 7.82386 10.4326 7.55333"
        stroke={buildColor(color)}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.936 9.11134C11.5951 8.96203 12.2793 8.9629 12.9379 9.11389C13.5966 9.26488 14.2128 9.56211 14.741 9.98358C15.2692 10.405 15.6958 10.9399 15.9892 11.5486C16.2826 12.1573 16.4353 12.8243 16.436 13.5"
        stroke={buildColor(color)}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_10000_14932">
        <rect
          width="16"
          height="16"
          fill="white"
          transform="translate(0.936035)"
        />
      </clipPath>
    </defs>
  </svg>
);
