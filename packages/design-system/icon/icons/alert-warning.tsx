import { buildColor } from "../../colors";
import { SVGProps } from "../types";

export const AlertWarning = ({ color = "primary", size = 16 }: SVGProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_750_3414)">
      <path
        d="M15.5931 7.02002L8.97311 0.400016C8.71451 0.142726 8.36456 -0.00170898 7.99977 -0.00170898C7.63498 -0.00170898 7.28504 0.142726 7.02644 0.400016L0.406438 7.02668C0.27824 7.15429 0.176513 7.30597 0.1071 7.473C0.037686 7.64003 0.00195312 7.81913 0.00195313 8.00002C0.00195312 8.1809 0.037686 8.36 0.1071 8.52703C0.176513 8.69407 0.27824 8.84574 0.406438 8.97335L7.02644 15.5867C7.15191 15.7183 7.30299 15.8229 7.47038 15.894C7.63776 15.965 7.81792 16.0011 7.99977 16C8.18187 16.0002 8.36222 15.9644 8.53042 15.8946C8.69861 15.8248 8.85133 15.7224 8.97977 15.5933L15.5931 8.98002C15.8528 8.72001 15.9987 8.36753 15.9987 8.00002C15.9987 7.6325 15.8528 7.28002 15.5931 7.02002ZM7.33311 4.28002C7.33311 4.1032 7.40334 3.93364 7.52837 3.80861C7.65339 3.68359 7.82296 3.61335 7.99977 3.61335C8.17658 3.61335 8.34615 3.68359 8.47118 3.80861C8.5962 3.93364 8.66644 4.1032 8.66644 4.28002V8.28001C8.66644 8.45683 8.5962 8.6264 8.47118 8.75142C8.34615 8.87644 8.17658 8.94668 7.99977 8.94668C7.82296 8.94668 7.65339 8.87644 7.52837 8.75142C7.40334 8.6264 7.33311 8.45683 7.33311 8.28001V4.28002ZM8.03311 11.9533C7.77102 11.9502 7.52006 11.847 7.33166 11.6648C7.14325 11.4825 7.03167 11.2352 7.01977 10.9733C7.01438 10.8413 7.03574 10.7096 7.08257 10.586C7.1294 10.4625 7.20073 10.3497 7.29227 10.2544C7.38382 10.1591 7.49368 10.0833 7.61527 10.0316C7.73685 9.97985 7.86764 9.95324 7.99977 9.95335C8.26003 9.95825 8.50856 10.0625 8.69448 10.2447C8.88039 10.4269 8.98961 10.6732 8.99977 10.9333C9.00422 11.064 8.98264 11.1943 8.9363 11.3166C8.88995 11.4388 8.81977 11.5507 8.72983 11.6456C8.63988 11.7405 8.53197 11.8166 8.41236 11.8694C8.29275 11.9222 8.16384 11.9508 8.03311 11.9533Z"
        fill={buildColor(color)}
      />
    </g>
    <defs>
      <clipPath id="clip0_750_3414">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
