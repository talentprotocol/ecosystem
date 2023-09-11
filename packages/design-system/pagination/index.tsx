import { useCallback } from "react";
import { usePagination } from "./hooks/use-pagination";
import { Container, MirroredIconContainer, PaginationItem } from "./styled";
import { PaginationItemObject, Props } from "./types";
import { Icon } from "../icon";
import { Typography } from "../typography";

// TODO: Finish this component

export const Pagination = ({
  totalPages,
  initialSelectedPage,
  onSelectPage,
}: Props) => {
  const state = usePagination(initialSelectedPage, totalPages);
  const renderPaginationItem = useCallback(
    (page: PaginationItemObject) => {
      const isSelected = page.value === initialSelectedPage.toString();
      let content = (
        <Typography
          specs={{ type: "medium", variant: "label2" }}
          color={
            (page.disabled && "primaryDisable") ||
            (page.index === state.selectedPage ? "bg01" : "primary01")
          }
        >
          {page.value}
        </Typography>
      );
      if (page.value === "<") {
        content = (
          <MirroredIconContainer>
            <Icon
              name="carret"
              size={16}
              color={page.disabled ? "primaryDisable" : "primary01"}
            />
          </MirroredIconContainer>
        );
      } else if (page.value === ">") {
        content = (
          <Icon
            name="carret"
            size={16}
            color={page.disabled ? "primaryDisable" : "primary01"}
          />
        );
      }
      return (
        <PaginationItem
          key={page.value}
          selected={isSelected}
          onClick={() => {
            if (page.disabled) return;
            if (page.value === "<") {
              state.selectPage(state.selectedPage - 1);
              return;
            } else if (page.value === ">") {
              state.selectPage(state.selectedPage + 1);
              return;
            }
            state.selectPage(page.index);
            onSelectPage(page);
          }}
          disabled={page.disabled}
        >
          {content}
        </PaginationItem>
      );
    },
    [state]
  );
  return <Container>{state.pages.map(renderPaginationItem)}</Container>;
};
