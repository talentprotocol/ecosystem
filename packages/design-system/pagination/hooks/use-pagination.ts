import { useState } from "react";
import { PaginationItemObject } from "../types";

const computeDisplayedPages =
  (selectedPage: number, totalPages: number) => () => {
    let startingIndex = selectedPage;
    if (startingIndex > 3) {
      startingIndex -= 3;
    }
    let totalDisplayedPages = totalPages;
    if (totalDisplayedPages > 6) {
      totalDisplayedPages = 6;
    }
    const pages: PaginationItemObject[] = [];
    pages.push({
      value: "<",
      disabled: startingIndex > 0,
    });
    for (let i = 0; i < totalDisplayedPages; i++) {
      pages.push({
        value: `${startingIndex + i}`,
        disabled: false,
      });
    }
    if (totalPages === 7) {
      pages[4] = {
        value: "...",
        disabled: false,
      };
      pages[5] = {
        value: `${totalPages}`,
        disabled: false,
      };
    }
    if (totalPages > 7) {
      pages[4] = {
        value: "...",
        disabled: false,
      };
      pages[5] = {
        value: `${totalPages - 1}`,
        disabled: false,
      };
      pages[6] = {
        value: `${totalPages}`,
        disabled: false,
      };
    }
    pages.push({
      value: ">",
      disabled: startingIndex === totalPages,
    });
    return pages;
  };

export const usePagination = (
  selectedPage = 0,
  totalPages = 1,
  onSelectPage: Function
) => {
  const [pages, setPages] = useState(
    computeDisplayedPages(selectedPage, totalPages)
  );
  return {
    pages,
  };
};
