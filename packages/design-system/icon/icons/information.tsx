import { buildColor } from "../../colors";
import { SVGProps } from "../types";

export const Information = ({ color = "primary" }: SVGProps) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_824_3610)">
      <path
        d="M9.5 11H9C8.73478 11 8.48043 10.8946 8.29289 10.7071C8.10536 10.5196 8 10.2652 8 10V7.5C8 7.36739 7.94732 7.24022 7.85355 7.14645C7.75978 7.05268 7.63261 7 7.5 7H7"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.75 4.5C7.70055 4.5 7.65222 4.51466 7.61111 4.54213C7.57 4.5696 7.53795 4.60865 7.51903 4.65433C7.50011 4.70001 7.49516 4.75028 7.5048 4.79877C7.51445 4.84727 7.53826 4.89181 7.57322 4.92678C7.60819 4.96174 7.65273 4.98555 7.70123 4.9952C7.74972 5.00484 7.79999 4.99989 7.84567 4.98097C7.89135 4.96205 7.9304 4.93 7.95787 4.88889C7.98534 4.84778 8 4.79945 8 4.75C8 4.6837 7.97366 4.62011 7.92678 4.57322C7.87989 4.52634 7.8163 4.5 7.75 4.5Z"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0.5 8C0.5 9.98912 1.29018 11.8968 2.6967 13.3033C4.10322 14.7098 6.01088 15.5 8 15.5C9.98912 15.5 11.8968 14.7098 13.3033 13.3033C14.7098 11.8968 15.5 9.98912 15.5 8C15.5 6.01088 14.7098 4.10322 13.3033 2.6967C11.8968 1.29018 9.98912 0.5 8 0.5C6.01088 0.5 4.10322 1.29018 2.6967 2.6967C1.29018 4.10322 0.5 6.01088 0.5 8V8Z"
        stroke={buildColor(color)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_824_3610">
        <rect width="16" height="16" fill="transparent" />
      </clipPath>
    </defs>
  </svg>
);
