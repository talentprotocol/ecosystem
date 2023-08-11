import { useCallback, useState } from "react";
import { PaginationItemObject } from "../types";

const computeDisplayedPages =
  (selectedPage: number, totalPages: number) => () => {
    let startingIndex = selectedPage;
    if (startingIndex > 3) {
      startingIndex -= 3;
      if (totalPages - startingIndex < 6) {
        startingIndex = totalPages - 6;
      }
    }
    let totalDisplayedPages = totalPages;
    if (totalDisplayedPages > 6) {
      totalDisplayedPages = 6;
    }
    const pages: PaginationItemObject[] = [];
    pages.push({
      value: "<",
      disabled: startingIndex > 0,
      index: NaN,
    });
    for (let i = 0; i < totalDisplayedPages; i++) {
      pages.push({
        value: `${startingIndex + i}`,
        disabled: false,
        index: startingIndex + i,
      });
    }
    if (totalPages === 7) {
      pages[4] = {
        value: "...",
        disabled: false,
        index: NaN,
      };
      pages[5] = {
        value: `${totalPages}`,
        disabled: false,
        index: totalPages,
      };
    }
    if (totalPages > 7) {
      pages[4] = {
        value: "...",
        disabled: true,
        index: NaN,
      };
      pages[5] = {
        value: `${totalPages - 1}`,
        disabled: false,
        index: totalPages - 1,
      };
      pages[6] = {
        value: `${totalPages}`,
        disabled: false,
        index: totalPages,
      };
    }
    pages.push({
      value: ">",
      disabled: startingIndex === totalPages,
      index: NaN,
    });
    return pages;
  };

export const usePagination = (
  initialinitialSelectedPage = 0,
  totalPages = 1
) => {
  const [pages, setPages] = useState(
    computeDisplayedPages(initialinitialSelectedPage, totalPages)
  );
  const [selectedPage, setSelectedPage] = useState(initialinitialSelectedPage);
  const selectPage = useCallback(
    (page: number) => {
      setSelectedPage(page);
      setPages(computeDisplayedPages(page, totalPages));
    },
    [setSelectedPage, setPages]
  );
  return {
    pages,
    selectedPage,
    selectPage,
  };
};
