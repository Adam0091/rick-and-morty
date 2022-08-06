import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { GET_CHARACTER } from "@utils/network";

import { CircularProgress } from "@mui/material";
import { Container } from "@/styled_componets/Container.style";
import { InformationItem } from "@components/CharacterPage/InformationItem";
import { StyledLink } from "@components/CharactersPage/CharactersList/CharactersList.style";

import { routePath } from "@constants/routePath";

import { HeaderCharacterType, InfoCharacterType } from "@/types";

import { CircularContainer } from "@/styled_componets/CircularContainer.style";
import {
  CharacterDiscription,
  CharacterHeader,
  CharacterLogo,
  CharacterTitle,
  CharacterWrapper,
  DiscriptionItem,
  DiscriptionListItem,
  DiscriptionListItemWrapper,
  DiscriptionName,
  DiscriptionTitle,
  DiscriptionValue,
  DiscriptionButtonItemArrow,
  ImageArrowBack,
  StyledBackLink,
  DiscriptionList,
} from "./CharacterPage.style";

import arrowBack from "@assets/images/arrowBack.svg";
import arrowNext from "@assets/images/arrowNext.svg";

export const CharacterPage = () => {
  const { id } = useParams();
  const [headerCharacter, setHeaderCharacter] = useState<HeaderCharacterType>({
    name: null,
    image: null,
  });
  const [infoCharacter, setInfoCharacter] = useState<InfoCharacterType>({});
  const [episodesCharacter, setEpisodesCharacter] = useState([]);
  const navigate = useNavigate();

  const handleGoBack = (event: React.MouseEvent) => {
    event.preventDefault();
    navigate(-1);
  };

  const { loading } = useQuery(GET_CHARACTER, {
    variables: { id },
    onCompleted: (data) => {
      const { character } = data;
      const {
        name,
        image,
        gender,
        status,
        species,
        origin,
        type,
        location,
        episode,
      } = character;

      const characterInfo = {
        Gender: {
          value: gender,
        },
        Status: {
          value: status,
        },
        Species: {
          value: species,
        },
        Origin: {
          value: origin.name,
        },
        Type: {
          value: type === "" ? "Unknow" : type,
        },
        Location: {
          isLink: true,
          value: location.name,
          path: routePath.location,
        },
      };
      setHeaderCharacter({ name, image });
      setInfoCharacter(characterInfo);
      setEpisodesCharacter(episode);
    },
  });

  if (loading)
    return (
      <Container>
        <CharacterWrapper>
          <CircularContainer>
            <CircularProgress />
          </CircularContainer>
        </CharacterWrapper>
      </Container>
    );

  return (
    <Container>
      <CharacterWrapper>
        <StyledBackLink onClick={handleGoBack}>
          <ImageArrowBack src={arrowBack} alt="arrow back" />
          <span>GO BACK</span>
        </StyledBackLink>
        <CharacterHeader>
          <CharacterLogo>
            <img
              src={headerCharacter.image as string}
              alt={headerCharacter.name as string}
            />
          </CharacterLogo>
          <CharacterTitle>{headerCharacter.name}</CharacterTitle>
        </CharacterHeader>
        <CharacterDiscription>
          <DiscriptionItem>
            <DiscriptionTitle>Informations</DiscriptionTitle>
            <DiscriptionList>
              {Object.keys(infoCharacter).map((key) =>
                infoCharacter[key].isLink ? (
                  <StyledLink to={infoCharacter[key].path || ""} key={key}>
                    <InformationItem
                      name={key}
                      value={infoCharacter[key].value}
                      isLink={true}
                    />
                  </StyledLink>
                ) : (
                  <InformationItem
                    name={key}
                    value={infoCharacter[key].value}
                    key={key}
                    isLink={false}
                  />
                )
              )}
            </DiscriptionList>
          </DiscriptionItem>
          <DiscriptionItem>
            <DiscriptionTitle>Episodes</DiscriptionTitle>
            <DiscriptionList>
              {episodesCharacter
                .slice(0, 4)
                .map(({ id, name, air_date, episode }) => (
                  <StyledLink to={`${routePath.episode}/${id}`}>
                    <DiscriptionListItem key={id}>
                      <DiscriptionListItemWrapper>
                        <DiscriptionName>{episode}</DiscriptionName>
                        <DiscriptionValue>{name}</DiscriptionValue>
                        <DiscriptionValue>{air_date}</DiscriptionValue>
                      </DiscriptionListItemWrapper>
                      <DiscriptionButtonItemArrow>
                        <img src={arrowNext} alt="arrow next button" />
                      </DiscriptionButtonItemArrow>
                    </DiscriptionListItem>
                  </StyledLink>
                ))}
            </DiscriptionList>
          </DiscriptionItem>
        </CharacterDiscription>
      </CharacterWrapper>
    </Container>
  );
};
