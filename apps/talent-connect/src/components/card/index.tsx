import { faker } from "@faker-js/faker";
import {
  BackgroundImage,
  Container,
  Content,
  ContentRow,
  ContentColumn,
  DescriptionContainer,
  Overlay,
} from "./styled";
import {
  Avatar,
  Button,
  Input,
  Typography,
} from "@talentprotocol/design-system";

export const Card = () => {
  return (
    <Container>
      <BackgroundImage img={faker.image.avatar()} />
      <Overlay></Overlay>
      <Content>
        <ContentRow>
          <ContentColumn>
            <Avatar
              url={faker.image.avatar()}
              size="sm"
              isVerified
              name={faker.name.fullName()}
            />
            <Typography
              specs={{ variant: "p3", type: "medium" }}
              color="primary03"
            >
              {faker.date.future(1).toLocaleDateString()}
            </Typography>
            <Typography
              specs={{ variant: "p1", type: "medium" }}
              color="primary01"
            >
              {faker.company.name()}
            </Typography>
            <Typography
              specs={{ variant: "p2", type: "regular" }}
              color="primary03"
            >
              <DescriptionContainer>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </DescriptionContainer>
            </Typography>
            <Input placeholder="I can help you..." />
          </ContentColumn>
          <ContentColumn>
            <Button
              leftIcon="camera"
              size="medium"
              hierarchy="secondary"
              iconColor="primary01"
            />
            <Button
              leftIcon="share"
              size="medium"
              hierarchy="secondary"
              iconColor="primary01"
            />
            <Button
              leftIcon="send"
              size="medium"
              hierarchy="secondary"
              iconColor="primary01"
            />
          </ContentColumn>
        </ContentRow>
      </Content>
    </Container>
  );
};
