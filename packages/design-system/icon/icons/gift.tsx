import { buildColor } from "../../colors";
import { SVGProps } from "../types";

export const Gift = ({ color = "primary" }: SVGProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.75 13.5H5.25V21.75C5.25 22.1478 5.40804 22.5294 5.68934 22.8107C5.97064 23.092 6.35218 23.25 6.75 23.25H17.25C17.6478 23.25 18.0294 23.092 18.3107 22.8107C18.592 22.5294 18.75 22.1478 18.75 21.75V13.5Z"
      stroke={buildColor(color)}
      stroke-width="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.5 9H4.5C4.08579 9 3.75 9.33579 3.75 9.75V12.75C3.75 13.1642 4.08579 13.5 4.5 13.5H19.5C19.9142 13.5 20.25 13.1642 20.25 12.75V9.75C20.25 9.33579 19.9142 9 19.5 9Z"
      stroke={buildColor(color)}
      stroke-width="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 9V23.25"
      stroke={buildColor(color)}
      stroke-width="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 2.25V0.75"
      stroke={buildColor(color)}
      stroke-width="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.25 3.311L18.311 2.25"
      stroke={buildColor(color)}
      stroke-width="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20.3071 6.28701L21.6931 5.71301"
      stroke={buildColor(color)}
      stroke-width="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.74996 3.311L5.68896 2.25"
      stroke={buildColor(color)}
      stroke-width="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.69313 6.28701L2.30713 5.71301"
      stroke={buildColor(color)}
      stroke-width="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
