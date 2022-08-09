import { useNavigate } from "react-router-dom";

import { CharactersList } from "@components/CharactersPage/CharactersList";
import { CircularProgress } from "@mui/material";

import { CharacterType } from "@/types";

import { CircularContainer } from "@styled_componets/CircularContainer.style";
import { Container } from "@styled_componets/Container.style";
import { StyledBackButton } from "@styled_componets/StyledBackButton.style";
import { ImageArrowBack } from "@containers/СharacterPage/CharacterPage.style";
import {
  CharactersTitle,
  CharactersTitleWrapper,
  PageDetailsCharacters,
  PageDetailsHeader,
  PageDetailsTitle,
  PageDetailsTitleWrapper,
  PageDetailsWrapper,
} from "./PageDetailsTemplate.style";

import arrowBack from "@assets/images/arrowBack.svg";

type TProps = {
  titleHeader: string;
  listTitle: string;
  loading: boolean;
  DescriptionComponent: JSX.Element;
  characters: CharacterType[];
};

export const PageDetailsTemplate = ({
  loading,
  titleHeader,
  listTitle,
  DescriptionComponent,
  characters,
}: TProps) => {
  const navigate = useNavigate();
  const handleGoBack = (event: React.MouseEvent) => {
    event.preventDefault();
    navigate(-1);
  };

  if (loading)
    return (
      <Container>
        <PageDetailsWrapper>
          <CircularContainer>
            <CircularProgress />
          </CircularContainer>
        </PageDetailsWrapper>
      </Container>
    );

  return (
    <Container>
      <PageDetailsWrapper>
        <PageDetailsHeader>
          <PageDetailsTitleWrapper>
            <StyledBackButton onClick={handleGoBack} top={"50%"}>
              <ImageArrowBack src={arrowBack} alt="arrow back" />
              <span>GO BACK</span>
            </StyledBackButton>
            <PageDetailsTitle>{titleHeader}</PageDetailsTitle>
          </PageDetailsTitleWrapper>
          {DescriptionComponent}
        </PageDetailsHeader>

        <PageDetailsCharacters>
          <CharactersTitleWrapper>
            <CharactersTitle>{listTitle}</CharactersTitle>
          </CharactersTitleWrapper>
          <CharactersList
            characters={characters}
            visible={characters.length}
            loading={loading}
          />
        </PageDetailsCharacters>
      </PageDetailsWrapper>
    </Container>
  );
};
