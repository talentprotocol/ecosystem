import creamAvatar from "./assets/cream.png";
import purpleAvatar from "./assets/purple.png";
import lightPurpleAvatar from "./assets/light-purple.png";
import greenAvatar from "./assets/green.png";
import greenLightAvatar from "./assets/light-green.png";
import { Container, StyledImage, StyledName } from "./styled";
import { Props, UndefinedImageMapType, UndefinedImageTypes } from "./types";
import { Typography } from "../typography";

const UNDEFINED_IMAGE_MAP: UndefinedImageMapType = {
  "0": creamAvatar,
  "1": purpleAvatar,
  "2": lightPurpleAvatar,
  "3": greenAvatar,
  "4": greenLightAvatar,
};

const userIdToUndefinedImageEntry = (userId: number): string =>
  UNDEFINED_IMAGE_MAP[(userId % 5).toString() as UndefinedImageTypes];

export const Avatar = ({
  size,
  url,
  userId = 0,
  name,
  ticker = "",
  isNameUnderlined = true,
  isDisabled = false,
}: Props) => {
  return (
    <Container>
      <StyledImage
        size={size}
        src={!!url ? url : userIdToUndefinedImageEntry(userId)}
      />
      {name && (
        <>
          <StyledName
            specs={{ variant: "label2", type: "medium" }}
            color={isDisabled ? "primaryDisable" : "primary03"}
            isUnderlined={isNameUnderlined}
            isDisabled={isDisabled}
          >
            {name}
          </StyledName>
          <Typography
            specs={{ variant: "label2", type: "regular" }}
            color={isDisabled ? "primaryDisable" : "primary03"}
          >
            {`$${ticker.toUpperCase()}`}
          </Typography>
        </>
      )}
    </Container>
  );
};
