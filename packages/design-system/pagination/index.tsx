import { useCallback } from "react";
import { usePagination } from "./hooks/use-pagination";
import { Container, MirroredIconContainer, PaginationItem } from "./styled";
import { PaginationItemObject, Props } from "./types";
import { Icon } from "../icon";
import { Typography } from "../typography";

export const Pagination = ({
  totalPages,
  selectedPage,
  onSelectPage,
}: Props) => {
  const state = usePagination(selectedPage, totalPages, onSelectPage);
  const renderPaginationItem = useCallback(
    (page: PaginationItemObject) => {
      const isSelected = page.value === selectedPage.toString();
      let content = (
        <Typography
          specs={{ type: "medium", variant: "label2" }}
          color={page.value === `${selectedPage}` ? "bg01" : "primary01"}
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
        <PaginationItem key={page.value} selected={isSelected}>
          {content}
        </PaginationItem>
      );
    },
    [selectedPage]
  );
  return <Container>{state.pages.map(renderPaginationItem)}</Container>;
};
