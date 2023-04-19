import { SVGProps } from "../types";

export const Polygon = ({ size = 24 }: SVGProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_4009_6204)">
      <path
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        fill="transparent"
      />
      <path
        d="M20 12.2801V15.9003C19.9987 16.1261 19.9391 16.3477 19.8269 16.5433C19.7147 16.739 19.5538 16.9021 19.36 17.0168L16.235 18.8231C16.0415 18.9389 15.8203 19 15.595 19C15.3697 19 15.1485 18.9389 14.955 18.8231L11.83 17.0168C11.6362 16.9021 11.4753 16.739 11.3631 16.5433C11.251 16.3477 11.1913 16.1261 11.19 15.9003V14.8843L12.79 13.9522V15.7184L15.59 17.3492L18.39 15.7184V12.4645L15.59 10.8337L9.03001 14.6472C8.83465 14.7576 8.61421 14.8157 8.38999 14.8157C8.16577 14.8157 7.94536 14.7576 7.75 14.6472L4.62499 12.8333C4.43416 12.7169 4.27639 12.5532 4.16692 12.3579C4.05745 12.1625 3.99997 11.9422 4 11.7181V8.09786C4.00129 7.87211 4.06096 7.65056 4.17313 7.45487C4.28533 7.25918 4.44619 7.09604 4.63999 6.98144L7.765 5.17508C7.95895 5.06045 8.17993 5 8.40499 5C8.63008 5 8.85106 5.06045 9.04501 5.17508L12.17 6.98144C12.3638 7.09604 12.5247 7.25918 12.6369 7.45487C12.7491 7.65056 12.8087 7.87211 12.81 8.09786V9.11393L11.2 10.0397V8.28353L8.40001 6.65279L5.59999 8.28353V11.5337L8.40001 13.1644L14.96 9.35102C15.1553 9.24056 15.3758 9.18254 15.6 9.18254C15.8242 9.18254 16.0446 9.24056 16.24 9.35102L19.365 11.1649C19.5577 11.2801 19.7174 11.4433 19.8287 11.6386C19.94 11.8341 19.999 12.055 20 12.2801Z"
        fill="#7B3FE4"
      />
    </g>
    <defs>
      <clipPath id="clip0_4009_6204">
        <rect width="24" height="24" fill="transparent" />
      </clipPath>
    </defs>
  </svg>
);
