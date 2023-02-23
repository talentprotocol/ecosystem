import { useCallback, useState } from "react";

export const useSliderSelector = (size: number) => {
  const [selectedElement, setSelectedElement] = useState(0);
  const jumpElement = useCallback(() => {
    if (selectedElement === size) {
      setSelectedElement(0);
      return;
    }
    setSelectedElement(selectedElement + 1);
  }, [selectedElement, setSelectedElement]);
  const selectElement = useCallback(
    (index: number) => {
      setSelectedElement(index);
    },
    [setSelectedElement]
  );
  return {
    selectedElement,
    jumpElement,
    selectElement,
  };
};
