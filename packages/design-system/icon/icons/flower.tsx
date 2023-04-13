import { buildColor } from "../../colors";
import { SVGProps } from "../types";

export const Flower = ({ color = "primary", size = 40 }: SVGProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_11895_48151)">
      <path
        d="M19.9102 21.25V38.75"
        stroke={buildColor(color)}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.9098 38.75C19.9098 38.75 18.0265 33.5984 9.39648 28.1067"
        stroke={buildColor(color)}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.10145 31.6667C7.81145 33.5267 10.5048 34.205 12.1398 30.7267C16.1848 28.3334 14.5264 25.3034 12.2281 23.7167C10.5301 22.8891 8.6611 22.4729 6.77238 22.5019C4.88365 22.5309 3.02828 23.0041 1.35645 23.8834C4.11645 26.5584 3.97478 29.3484 6.10145 31.6667Z"
        stroke={buildColor(color)}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.9102 38.75C19.9102 38.75 21.7935 33.5984 30.4252 28.1067"
        stroke={buildColor(color)}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M33.7182 31.6667C32.0099 33.5267 29.3148 34.205 27.6815 30.7267C23.6365 28.33 25.2948 25.3017 27.5915 23.715C29.2898 22.8876 31.1591 22.4715 33.0481 22.5004C34.937 22.5294 36.7927 23.0026 38.4648 23.8817C35.7032 26.5584 35.8465 29.3484 33.7182 31.6667Z"
        stroke={buildColor(color)}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.4102 6.25001H19.0219C18.5015 6.24835 17.9969 6.42833 17.595 6.75891C17.1931 7.08949 16.9191 7.54995 16.8204 8.06088C16.7216 8.57181 16.8043 9.10118 17.054 9.55771C17.3038 10.0142 17.7051 10.3693 18.1886 10.5617L21.6269 11.9383C22.1087 12.1322 22.5079 12.4876 22.7563 12.9436C23.0046 13.3997 23.0866 13.9279 22.988 14.4378C22.8895 14.9476 22.6166 15.4073 22.2162 15.738C21.8158 16.0686 21.3129 16.2496 20.7936 16.25H17.4102"
        stroke={buildColor(color)}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.9102 6.25V5"
        stroke={buildColor(color)}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.9102 17.5V16.25"
        stroke={buildColor(color)}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.9102 21.25C25.433 21.25 29.9102 16.7728 29.9102 11.25C29.9102 5.72715 25.433 1.25 19.9102 1.25C14.3873 1.25 9.91016 5.72715 9.91016 11.25C9.91016 16.7728 14.3873 21.25 19.9102 21.25Z"
        stroke={buildColor(color)}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_11895_48151">
        <rect width="40" height="40" fill="transparent" />
      </clipPath>
    </defs>
  </svg>
);
