import { SVGProps } from "../types";

export const Gnosis = ({ color = "primary" }: SVGProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <rect width="24" height="24" fill="url(#pattern0)" />
    <defs>
      <pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_4895_7911" transform="scale(0.0133333)" />
      </pattern>
      <image
        id="image0_4895_7911"
        width="75"
        height="75"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);
