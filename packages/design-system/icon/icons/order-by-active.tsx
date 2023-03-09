import { buildColor } from "../../colors";
import { SVGProps } from "../types";

export const OrderByActive = ({ color = "primary", size = 16 }: SVGProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.43327 6.25006C8.24082 6.58339 7.75969 6.58339 7.56724 6.25006L4.96916 1.75006C4.77671 1.41673 5.01728 1.00006 5.40218 1.00006L10.5983 1.00006C10.9832 1.00006 11.2238 1.41673 11.0313 1.75006L8.43327 6.25006Z"
      fill={buildColor(color)}
    />
    <path
      d="M7.56795 9.75006C7.7604 9.41673 8.24153 9.41673 8.43398 9.75006L11.0321 14.2501C11.2245 14.5834 10.9839 15.0001 10.599 15.0001H5.40289C5.01799 15.0001 4.77743 14.5834 4.96988 14.2501L7.56795 9.75006Z"
      fill={buildColor(color)}
    />
  </svg>
);
