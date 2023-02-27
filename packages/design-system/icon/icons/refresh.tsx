import { SVGProps } from "../types";

export const Refresh = ({ color = "primary" }: SVGProps) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.5 9.49867V12.4987H0.5"
      stroke={buildColor(color)}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12.5 6.49867V3.49867H15.5"
      stroke={buildColor(color)}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12.6882 3.49667C13.7227 4.57439 14.3544 5.97547 14.4772 7.46426C14.6 8.95305 14.2064 10.4387 13.3625 11.6714C12.5186 12.904 11.276 13.8085 9.84362 14.2325C8.41124 14.6566 6.87651 14.5745 5.49756 14"
      stroke={buildColor(color)}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M3.31155 12.5007C2.27934 11.4224 1.64956 10.0218 1.52796 8.5341C1.40637 7.04637 1.80037 5.56211 2.6438 4.33055C3.48722 3.09899 4.72872 2.19513 6.15981 1.77075C7.5909 1.34638 9.12442 1.42732 10.5029 2"
      stroke={buildColor(color)}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
