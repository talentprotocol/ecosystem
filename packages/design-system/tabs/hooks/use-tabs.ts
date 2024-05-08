import { useCallback, useState } from "react";

export const useTabs = (initialIndex = 0) => {
  const [selectedIndex, setSelectedIndex] = useState(initialIndex);
  const selectElement = useCallback(
    (index: number) => {
      setSelectedIndex(index);
    },
    [setSelectedIndex]
  );
  return {
    selectedIndex,
    selectElement,
  };
};
