import { buildColor } from "../../colors";
import { SVGProps } from "../types";

export const Binoculars = ({ color = "primary", size = 64 }: SVGProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 60C20.6274 60 26 54.6274 26 48C26 41.3726 20.6274 36 14 36C7.37258 36 2 41.3726 2 48C2 54.6274 7.37258 60 14 60Z"
      stroke={buildColor(color)}
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M26.0001 48V11C26.0026 9.30483 25.3898 7.66638 24.2757 6.38883C23.1615 5.11128 21.6216 4.28144 19.9418 4.0534C18.2621 3.82535 16.5567 4.21458 15.1422 5.14883C13.7277 6.08308 12.7003 7.49887 12.2508 9.13332L2.42944 44.8133"
      stroke={buildColor(color)}
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M50 60C56.6274 60 62 54.6274 62 48C62 41.3726 56.6274 36 50 36C43.3726 36 38 41.3726 38 48C38 54.6274 43.3726 60 50 60Z"
      stroke={buildColor(color)}
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M38 48V11C37.9975 9.30483 38.6103 7.66638 39.7245 6.38883C40.8386 5.11128 42.3786 4.28144 44.0583 4.0534C45.738 3.82535 47.4435 4.21458 48.8579 5.14883C50.2724 6.08308 51.2998 7.49887 51.7493 9.13332L61.5707 44.8053"
      stroke={buildColor(color)}
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M38 24H26V32H38V24Z"
      stroke={buildColor(color)}
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
