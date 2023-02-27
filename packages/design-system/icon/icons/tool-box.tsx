import { buildColor } from "../../colors";
import { SVGProps } from "../types";

export const ToolBox = ({ color = "primary" }: SVGProps) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.5 4.5H1.5C0.947715 4.5 0.5 4.94772 0.5 5.5V13.5C0.5 14.0523 0.947715 14.5 1.5 14.5H14.5C15.0523 14.5 15.5 14.0523 15.5 13.5V5.5C15.5 4.94772 15.0523 4.5 14.5 4.5Z"
      stroke={buildColor(color)}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M11 4.5C11 3.70435 10.6839 2.94129 10.1213 2.37868C9.55871 1.81607 8.79565 1.5 8 1.5C7.20435 1.5 6.44129 1.81607 5.87868 2.37868C5.31607 2.94129 5 3.70435 5 4.5"
      stroke={buildColor(color)}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M0.5 8.5H6.5"
      stroke={buildColor(color)}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9.5 8.5H15.5"
      stroke={buildColor(color)}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6.5 9.16667C6.5 9.56449 6.65804 9.94602 6.93934 10.2273C7.22064 10.5086 7.60218 10.6667 8 10.6667C8.39782 10.6667 8.77936 10.5086 9.06066 10.2273C9.34196 9.94602 9.5 9.56449 9.5 9.16667V8.36667C9.5 7.96884 9.34196 7.58731 9.06066 7.30601C8.77936 7.0247 8.39782 6.86667 8 6.86667C7.60218 6.86667 7.22064 7.0247 6.93934 7.30601C6.65804 7.58731 6.5 7.96884 6.5 8.36667V9.16667Z"
      stroke={buildColor(color)}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
