import creamAvatar from "./assets/cream.png";
import purpleAvatar from "./assets/purple.png";
import lightPurpleAvatar from "./assets/light-purple.png";
import greenAvatar from "./assets/green.png";
import greenLightAvatar from "./assets/light-green.png";
import PurpleRectangle from "./assets/purple-rectangle.png";
import {
  Badge,
  BadgeBorder,
  BadgeBorderTransparent,
  Container,
  DataColumn,
  DetailedInfoRow,
  LinkWrapper,
  StyledImage,
  StyledName,
} from "./styled";
import { Props, UndefinedImageMapType, UndefinedImageTypes } from "./types";
import { Typography } from "../typography";
import { Icon } from "../icon";

const UNDEFINED_IMAGE_MAP: UndefinedImageMapType = {
  "0": creamAvatar,
  "1": purpleAvatar,
  "2": lightPurpleAvatar,
  "3": greenAvatar,
  "4": greenLightAvatar,
};

const userIdToUndefinedImageEntry = (userId: number, square: boolean) => {
  if (square) {
    return PurpleRectangle;
  } else {
    return UNDEFINED_IMAGE_MAP[(userId % 5).toString() as UndefinedImageTypes];
  }
};

export const Avatar = ({
  size,
  url,
  userId = 0,
  name,
  ticker = "",
  occupation = "",
  isDisabled = false,
  isVerified = false,
  ellipsisAt = 0,
  profileURL = "",
  square = false,
  isActive = false,
  score = 0,
  showBadge = false,
}: Props) => {
  const computedProfileURL = !isDisabled ? profileURL : "";
  return (
    <Container square={square}>
      <LinkWrapper href={computedProfileURL} target="_blank" profileURL={computedProfileURL}>
        {!showBadge ? (
          <StyledImage
            size={size}
            src={!!url ? url : userIdToUndefinedImageEntry(userId, square)}
            square={square}
          />
        ) : (
          <BadgeBorder score={score}>
            <BadgeBorderTransparent>
              <StyledImage
                size={size}
                src={!!url ? url : userIdToUndefinedImageEntry(userId, square)}
                square={square}
              />
              {size !== "xs" && size !== "sm" && (
                <Badge score={score} size={size}>
                  {score}
                </Badge>
              )}
            </BadgeBorderTransparent>
          </BadgeBorder>
        )}
      </LinkWrapper>
      {name && (
        <DataColumn size={size}>
          <DetailedInfoRow
            ellipsisAt={!!isVerified ? ellipsisAt - 20 : ellipsisAt}
          >
            <LinkWrapper
              href={computedProfileURL}
              profileURL={computedProfileURL}
            >
              <StyledName
                specs={{ variant: "label2", type: "medium" }}
                color={isDisabled ? "primaryDisable" : "primary01"}
                isDisabled={isDisabled}
              >
                {name}
              </StyledName>
            </LinkWrapper>
            {!!isVerified && <Icon name="verified-2" size={16} />}
            {!!isActive && <Icon name="activity-badge" size={16} />}
          </DetailedInfoRow>
          <DetailedInfoRow ellipsisAt={ellipsisAt}>
            {!!ticker && (
              <Typography
                specs={{ variant: "p3", type: "bold" }}
                color={isDisabled ? "primaryDisable" : "primary03"}
              >
                {`$${ticker.toUpperCase()}`}
              </Typography>
            )}
            {!!occupation && (
              <Typography
                specs={{ variant: "p3", type: "regular" }}
                color={isDisabled ? "primaryDisable" : "primary03"}
              >
                {occupation}
              </Typography>
            )}
          </DetailedInfoRow>
        </DataColumn>
      )}
    </Container>
  );
};
