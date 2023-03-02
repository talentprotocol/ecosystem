import { Typography } from "../typography";
import { Container, PillContainer } from "./styled";
import { Props } from "./types";

export const Pills = ({ pillList, onClick }: Props) => {
  return (
    <Container>
      {pillList.map((pill, index) => (
        <PillContainer
          key={pill.content}
          isClickable={!!onClick}
          isSelected={pill.isSelected}
          isDisabled={pill.isDisabled}
          onClick={onClick && (() => onClick(index, pill))}
        >
          <Typography
            specs={{ variant: "label2", type: "medium" }}
            color={
              (pill.isSelected && "bg01") ||
              (pill.isDisabled && "primaryDisable") ||
              "primary01"
            }
          >
            {pill.content}
          </Typography>
        </PillContainer>
      ))}
    </Container>
  );
};
