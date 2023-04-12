import { buildColor } from "../../colors";
import { SVGProps } from "../types";

export const Trophy = ({ color = "primary", size = 16 }: SVGProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_8121_13547)">
      <path
        d="M9.28938 2.86667L10.122 4.50534H11.54C11.6181 4.50343 11.6949 4.52512 11.7605 4.56757C11.826 4.61002 11.8772 4.67126 11.9074 4.74328C11.9375 4.8153 11.9453 4.89474 11.9296 4.97123C11.9139 5.04772 11.8755 5.11769 11.8194 5.172L10.5174 6.45L11.2387 8.10667C11.2705 8.18254 11.2777 8.26649 11.2592 8.34665C11.2407 8.42682 11.1975 8.49915 11.1357 8.55344C11.0739 8.60774 10.9966 8.64125 10.9147 8.64924C10.8328 8.65724 10.7505 8.63931 10.6794 8.598L8.93604 7.61734L7.19271 8.6C7.12157 8.64131 7.03925 8.65924 6.95737 8.65124C6.87549 8.64325 6.79819 8.60974 6.73639 8.55544C6.67458 8.50115 6.63138 8.42882 6.6129 8.34865C6.59442 8.26849 6.60158 8.18454 6.63338 8.10867L7.35471 6.45L6.05271 5.16867C5.99661 5.11436 5.95819 5.04439 5.94249 4.9679C5.92679 4.89141 5.93454 4.81196 5.96471 4.73994C5.99489 4.66793 6.04609 4.60669 6.11163 4.56424C6.17716 4.52179 6.25398 4.5001 6.33204 4.502H7.75004L8.58271 2.86667C8.61577 2.80134 8.66629 2.74646 8.72867 2.70812C8.79104 2.66977 8.86283 2.64948 8.93604 2.64948C9.00926 2.64948 9.08104 2.66977 9.14342 2.70812C9.20579 2.74646 9.25632 2.80134 9.28938 2.86667Z"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.936 3C16.1794 3 15.7734 2.69866 16.436 8"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.93604 3.00001C1.40937 3.00001 2.1647 2.17335 1.43604 8.00001"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.6799 15.5H8.93589H5.19189"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.93604 7V1.5C3.93604 1.23478 4.04139 0.98043 4.22893 0.792893C4.41646 0.605357 4.67082 0.5 4.93604 0.5H12.936C13.2013 0.5 13.4556 0.605357 13.6431 0.792893C13.8307 0.98043 13.936 1.23478 13.936 1.5V7C13.936 13.0053 3.93604 13.0133 3.93604 7Z"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.93604 15.5V11.5"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_8121_13547">
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
