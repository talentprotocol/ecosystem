import { useMemo } from "react";
import { icons } from "./icons";
import { Props } from "./types";

export const Icon = ({ name, color = "primary" }: Props) => {
  const Component = useMemo(() => icons[name], [name]);
  return <Component color={color} />;
};
