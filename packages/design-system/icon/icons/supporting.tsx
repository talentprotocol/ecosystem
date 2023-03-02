import { buildColor } from "../../colors";
import { SVGProps } from "../types";

export const Supporting = ({ color = "primary" }: SVGProps) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.8248 2.15C12.7316 2.0258 12.6109 1.925 12.472 1.85557C12.3331 1.78615 12.18 1.75 12.0248 1.75H4.02478C3.86954 1.75 3.71642 1.78615 3.57757 1.85557C3.43871 1.925 3.31793 2.0258 3.22478 2.15L1.00012 5.11733C0.865106 5.29746 0.794819 5.51786 0.800626 5.74289C0.806433 5.96792 0.887995 6.18441 1.03212 6.35733L7.25745 13.8907C7.35131 14.0027 7.4686 14.0929 7.60106 14.1547C7.73352 14.2166 7.87793 14.2486 8.02412 14.2486C8.1703 14.2486 8.31471 14.2166 8.44717 14.1547C8.57963 14.0929 8.69692 14.0027 8.79078 13.8907L15.0161 6.35733C15.1602 6.18441 15.2418 5.96792 15.2476 5.74289C15.2534 5.51786 15.1831 5.29746 15.0481 5.11733L12.8248 2.15Z"
      stroke={buildColor(color)}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.56592 1.86133L8.02458 14.25"
      stroke={buildColor(color)}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.4829 1.86133L8.0249 14.25"
      stroke={buildColor(color)}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M0.798828 5.75H15.2475"
      stroke={buildColor(color)}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.0249 5.75L8.0249 1.75L11.0249 5.75"
      stroke={buildColor(color)}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
