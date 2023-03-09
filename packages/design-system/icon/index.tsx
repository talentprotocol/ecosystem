import { useMemo } from "react";
import { icons } from "./icons";
import { Props } from "./types";

export const Icon = ({ name, color = "primary", size }: Props) => {
  const Component = useMemo(() => icons[name], [name]);
  return <Component color={color} size={size} />;
};
