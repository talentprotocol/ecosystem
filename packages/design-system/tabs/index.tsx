import { Typography } from "../typography";
import { BottomBar, Container, TabContainer } from "./styled";
import { Props } from "./types";

export * from "./hooks/use-tabs";

export const Tabs = ({
  tabList,
  selectedIndex,
  noBottomBar = false,
  disabledList = new Array(tabList.length).fill(false),
  onClick,
}: Props) => (
  <Container>
    {tabList.map((tab, index) => {
      const isActive = selectedIndex === index;
      return (
        <TabContainer
          key={tab}
          isDisabled={disabledList[index]}
          onClick={
            onClick && !disabledList[index] ? () => onClick(index) : undefined
          }
        >
          <Typography
            specs={{ variant: "label1", type: "medium" }}
            color={
              disabledList[index]
                ? "primaryDisable"
                : isActive
                ? "primary01"
                : "primary03"
            }
          >
            {tab}
          </Typography>
          {!noBottomBar && <BottomBar isActive={isActive} />}
        </TabContainer>
      );
    })}
  </Container>
);
