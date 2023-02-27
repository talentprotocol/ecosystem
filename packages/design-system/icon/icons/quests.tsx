import { buildColor } from "../../colors";
import { SVGProps } from "../types";

export const Quests = ({ color = "primary" }: SVGProps) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7.8335 4.81466L3.10016 7.826C3.02455 7.87342 2.93763 7.89976 2.84841 7.9023C2.7592 7.90485 2.67092 7.88349 2.59273 7.84045C2.51454 7.79741 2.44928 7.73425 2.4037 7.65752C2.35812 7.58078 2.33388 7.49325 2.3335 7.404V4.36333C2.33393 4.19483 2.37694 4.02917 2.45852 3.88173C2.54011 3.73429 2.65762 3.60986 2.80016 3.52L7.29683 0.656663C7.45723 0.554643 7.6434 0.500458 7.8335 0.500458C8.0236 0.500458 8.20976 0.554643 8.37016 0.656663L12.8702 3.52333C13.0116 3.61329 13.1282 3.73736 13.2091 3.88414C13.2901 4.03092 13.3329 4.1957 13.3335 4.36333V7.404C13.3333 7.49356 13.3092 7.58143 13.2635 7.65847C13.2178 7.7355 13.1523 7.79887 13.0738 7.84198C12.9953 7.88508 12.9066 7.90633 12.8171 7.90352C12.7276 7.90071 12.6405 7.87394 12.5648 7.826L7.8335 4.81466Z"
      stroke={buildColor(color)}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7.8335 12.4107L3.10016 15.422C3.02455 15.4694 2.93763 15.4958 2.84841 15.4983C2.7592 15.5008 2.67092 15.4795 2.59273 15.4364C2.51454 15.3934 2.44928 15.3302 2.4037 15.2535C2.35812 15.1768 2.33388 15.0892 2.3335 15V11.96C2.33382 11.7914 2.37677 11.6256 2.45836 11.478C2.53995 11.3305 2.65753 11.2059 2.80016 11.116L7.30016 8.25266C7.46057 8.15064 7.64673 8.09645 7.83683 8.09645C8.02693 8.09645 8.21309 8.15064 8.3735 8.25266L12.8735 11.1193C13.0144 11.2097 13.1304 11.3341 13.2108 11.481C13.2911 11.6278 13.3333 11.7926 13.3335 11.96V15C13.3333 15.0895 13.3092 15.1774 13.2635 15.2545C13.2178 15.3315 13.1523 15.3949 13.0738 15.438C12.9953 15.4811 12.9066 15.5023 12.8171 15.4995C12.7276 15.4967 12.6405 15.4699 12.5648 15.422L7.8335 12.4107Z"
      stroke={buildColor(color)}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);