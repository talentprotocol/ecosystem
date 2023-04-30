import creamAvatar from "./assets/cream.png";
import purpleAvatar from "./assets/purple.png";
import lightPurpleAvatar from "./assets/light-purple.png";
import greenAvatar from "./assets/green.png";
import greenLightAvatar from "./assets/light-green.png";
import {
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

const userIdToUndefinedImageEntry = (userId: number): string =>
  UNDEFINED_IMAGE_MAP[(userId % 5).toString() as UndefinedImageTypes];

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
}: Props) => {
  const computedProfileURL = !isDisabled ? profileURL : "";
  return (
    <Container>
      <LinkWrapper href={computedProfileURL} profileURL={computedProfileURL}>
        <StyledImage
          size={size}
          src={!!url ? url : userIdToUndefinedImageEntry(userId)}
        />
      </LinkWrapper>
      {name && (
        <DataColumn size={size}>
          <DetailedInfoRow>
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
