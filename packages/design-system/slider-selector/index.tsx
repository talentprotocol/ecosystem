import { Container, SelectorMark } from "./styled";
import { Props } from "./types";

export * from "./hooks/use-slider-selector";

export const SliderSelector = ({
  size,
  variant,
  selectedIndex,
  selectElement,
}: Props) => {
  return (
    <Container>
      {new Array(size).fill(undefined).map((_, index) => (
        <SelectorMark
          key={`select-mark-${index}`}
          isActive={selectedIndex === index}
          variant={variant}
          onClick={() => selectElement(index)}
        />
      ))}
    </Container>
  );
};
