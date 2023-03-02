import { buildColor } from "../../colors";
import { SVGProps } from "../types";

export const Verified2 = ({ color = "primary" }: SVGProps) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.79938 0.423774C8.39936 -0.108706 7.60037 -0.108706 7.20034 0.423775L6.23734 1.70564C6.00025 2.02123 5.5997 2.16783 5.21491 2.07984L3.6651 1.72544C3.02017 1.57797 2.41236 2.08616 2.44327 2.747L2.52019 4.39154C2.53838 4.78024 2.32943 5.14419 1.98459 5.32447L0.541745 6.07878C-0.0392291 6.38251 -0.175693 7.15375 0.265782 7.6384L1.37538 8.8565C1.63612 9.14274 1.70819 9.55378 1.56038 9.91166L0.928632 11.4413C0.677467 12.0494 1.0719 12.7302 1.7244 12.8147L3.31635 13.021C3.7052 13.0714 4.02872 13.3444 4.1438 13.7192L4.62105 15.2735C4.81616 15.909 5.5655 16.1807 6.12259 15.818L7.45427 14.9511C7.78595 14.7352 8.21377 14.7352 8.54545 14.9511L9.87714 15.818C10.4342 16.1807 11.1836 15.909 11.3787 15.2735L11.8559 13.7192C11.971 13.3444 12.2945 13.0714 12.6834 13.021L14.2753 12.8147C14.9278 12.7302 15.3223 12.0494 15.0711 11.4413L14.4393 9.91165C14.2915 9.55378 14.3636 9.14274 14.6243 8.8565L15.7339 7.63839C16.1754 7.15375 16.039 6.38251 15.458 6.07878L14.0151 5.32447C13.6703 5.14419 13.4614 4.78024 13.4795 4.39154L13.5565 2.747C13.5874 2.08616 12.9796 1.57797 12.3346 1.72544L10.7848 2.07984C10.4 2.16783 9.99947 2.02123 9.76238 1.70564L8.79938 0.423774ZM10.9625 6.12661C11.1665 5.83123 11.0925 5.4264 10.7971 5.22239C10.5017 5.01838 10.0969 5.09245 9.89286 5.38783L6.94004 9.66317L5.54915 8.25348C5.29702 7.99794 4.88547 7.99518 4.62994 8.24731C4.3744 8.49944 4.37163 8.91099 4.62376 9.16653L6.56603 11.1351C6.70203 11.2729 6.89239 11.3429 7.08529 11.3261C7.27818 11.3092 7.45353 11.2072 7.56356 11.0479L10.9625 6.12661Z"
      fill={buildColor(color)}
    />
  </svg>
);
