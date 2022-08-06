import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { GET_CHARACTER } from "@utils/network";

import { CircularProgress } from "@mui/material";
import { InformationItem } from "@components/CharacterPage/InformationItem";
import { StyledLink } from "@components/CharactersPage/CharactersList/CharactersList.style";
import { EpisodeItem } from "@components/CharacterPage/EpisodeItem";

import { routePath } from "@constants/routePath";

import { EpisodeType, HeaderCharacterType, InfoCharacterType } from "@/types";

import { Container } from "@styled_componets/Container.style";
import { CircularContainer } from "@styled_componets/CircularContainer.style";
import { StyledBackLink } from "@styled_componets/StyledBackLink.style";
import {
  CharacterDiscription,
  CharacterHeader,
  CharacterLogo,
  CharacterTitle,
  CharacterWrapper,
  DiscriptionItem,
  DiscriptionTitle,
  ImageArrowBack,
  DiscriptionList,
} from "./CharacterPage.style";

import arrowBack from "@assets/images/arrowBack.svg";

export const CharacterPage = () => {
  const { id } = useParams();
  const [headerCharacter, setHeaderCharacter] = useState<HeaderCharacterType>({
    name: "",
    image: "",
  });
  const [infoCharacter, setInfoCharacter] = useState<InfoCharacterType>({});
  const [episodesCharacter, setEpisodesCharacter] = useState<EpisodeType[]>([]);
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
          path: `${routePath.location}/${location.id}`,
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
        <CharacterHeader>
          <StyledBackLink onClick={handleGoBack} top={"10%"}>
            <ImageArrowBack src={arrowBack} alt="arrow back" />
            <span>GO BACK</span>
          </StyledBackLink>
          <CharacterLogo>
            <img src={headerCharacter.image} alt={headerCharacter.name} />
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
                  <StyledLink to={`${routePath.episode}/${id}`} key={id}>
                    <EpisodeItem
                      name={name}
                      air_date={air_date}
                      episode={episode}
                    />
                  </StyledLink>
                ))}
            </DiscriptionList>
          </DiscriptionItem>
        </CharacterDiscription>
      </CharacterWrapper>
    </Container>
  );
};
