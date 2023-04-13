import { buildColor } from "../../colors";
import { SVGProps } from "../types";

export const Success = ({ color = "primary", size = 64 }: SVGProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M64 32C64 49.6731 49.6731 64 32 64C14.3269 64 0 49.6731 0 32C0 14.3269 14.3269 0 32 0C49.6731 0 64 14.3269 64 32ZM3.2 32C3.2 47.9058 16.0942 60.8 32 60.8C47.9058 60.8 60.8 47.9058 60.8 32C60.8 16.0942 47.9058 3.2 32 3.2C16.0942 3.2 3.2 16.0942 3.2 32Z"
      fill={buildColor(color)}
    />
    <g clipPath="url(#clip0_7636_14189)">
      <path
        d="M44 20.9999L29.2434 42.0776C29.0487 42.3573 28.7903 42.5868 28.4895 42.7471C28.1887 42.9074 27.8541 42.9939 27.5133 42.9996C27.1725 43.0052 26.8352 42.9298 26.5293 42.7795C26.2234 42.6293 25.9575 42.4084 25.7537 42.1353L22 37.1315"
        stroke={buildColor(color)}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_7636_14189">
        <rect
          width="64"
          height="64"
          fill="transparent"
          transform="translate(20 19)"
        />
      </clipPath>
    </defs>
  </svg>
);
