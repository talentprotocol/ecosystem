import { faker } from "@faker-js/faker";
import { BackgroundImage, Container, Content } from "./styled";
import { Typography } from "@talentprotocol/design-system";

export const Card = () => {
  return (
    <Container>
        <BackgroundImage img={faker.image.avatar()} />
        <Content>
        </Content>
    </Container>
  );
};
