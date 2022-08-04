import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { GET_CHARACTER } from "@utils/network";

import { CircularProgress } from "@mui/material";
import { Container } from "@components/Container/Container.style";
import { InformationItem } from "@components/CharacterPage/InformationItem";
import { StyledLink } from "@components/CharactersPage/CharactersList/CharactersList.style";

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
  DiscriptionListItemArrow,
  ImageArrowBack,
  StyledBackLink,
} from "./CharacterPage.style";
import { CircularContainer } from "@containers/CharactersPage/CharactersPage.style";

import arrowBack from "@assets/images/arrowBack.svg";

export const CharacterPage = () => {
  const { id } = useParams();
  const [headerCharacter, setHeaderCharacter] = useState<any>({});
  const [infoCharacter, setInfoCharacter] = useState<any>({});
  const [episodesCharacter, setEpisodesCharacter] = useState([]);
  const navigate = useNavigate();

  const handleGoBack = (event: React.MouseEvent) => {
    event.preventDefault();
    navigate(-1);
  };

  const { loading, error, data } = useQuery(GET_CHARACTER, {
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
        Gender: gender,
        Status: status,
        Species: species,
        Origin: origin.name,
        Type: type === "" ? "Unknow" : type,
        Location: {
          isLink: true,
          value: location.name,
          path: "",
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
            <img src={headerCharacter.image} alt={headerCharacter.name} />
          </CharacterLogo>
          <CharacterTitle>{headerCharacter.name}</CharacterTitle>
        </CharacterHeader>
        <CharacterDiscription>
          <DiscriptionItem>
            <DiscriptionTitle>Informations</DiscriptionTitle>
            <ul className="informations__list">
              {Object.keys(infoCharacter).map((key) =>
                infoCharacter[key].isLink ? (
                  <StyledLink to={infoCharacter[key].path} key={key}>
                    <InformationItem
                      name={key}
                      value={infoCharacter[key].value}
                      isLink={true}
                    />
                  </StyledLink>
                ) : (
                  <InformationItem
                    name={key}
                    value={infoCharacter[key]}
                    key={key}
                    isLink={false}
                  />
                )
              )}
            </ul>
          </DiscriptionItem>
          <DiscriptionItem>
            <DiscriptionTitle>Episodes</DiscriptionTitle>
            <ul className="episodes__list">
              <StyledLink to="">
                {episodesCharacter
                  .slice(0, 4)
                  .map(({ id, name, air_date, episode }) => (
                    <DiscriptionListItem key={id}>
                      <DiscriptionListItemWrapper>
                        <DiscriptionName>{episode}</DiscriptionName>
                        <DiscriptionValue>{name}</DiscriptionValue>
                        <DiscriptionValue>{air_date}</DiscriptionValue>
                      </DiscriptionListItemWrapper>
                      <DiscriptionListItemArrow />
                    </DiscriptionListItem>
                  ))}
              </StyledLink>
            </ul>
          </DiscriptionItem>
        </CharacterDiscription>
      </CharacterWrapper>
    </Container>
  );
};
