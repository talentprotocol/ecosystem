import { icons } from "./icons";
import { Props } from "./types";

export const Icon = ({ name }: Props) => {
  return <img src={icons[name]} alt={`icon ${name}`}/>;
};
