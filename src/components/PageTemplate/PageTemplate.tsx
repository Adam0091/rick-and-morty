import { CircularProgress } from "@mui/material";

import { CircularContainer } from "@/styled_componets/CircularContainer.style";
import { Container } from "@/styled_componets/Container.style";
import { Content } from "@/styled_componets/Content.style";
import { LogoWrapper } from "./PageTemplate.style";
import { ButtonWrapper } from "@/styled_componets/ButtonWrapper.style";
import { ButtonStyle } from "@/styled_componets/ButtonStyle.style";

type TProps = {
  FilterComponent: JSX.Element;
  ListComponent: JSX.Element;
  logo: string;
  logoAlt: string;
  loading: boolean;
  showMoreItems: () => void;
};

export const PageTemplate = ({
  FilterComponent,
  ListComponent,
  logo,
  logoAlt,
  loading,
  showMoreItems,
}: TProps) => (
  <Container>
    <div>
      <LogoWrapper>
        <img src={logo} alt={logoAlt} />
      </LogoWrapper>

      <Content>
        {FilterComponent}

        {loading ? (
          <CircularContainer>
            <CircularProgress />
          </CircularContainer>
        ) : (
          ListComponent
        )}

        <ButtonWrapper>
          <ButtonStyle onClick={showMoreItems}>LOAD MORE</ButtonStyle>
        </ButtonWrapper>
      </Content>
    </div>
  </Container>
);
