import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { GET_LOCATION } from "@utils/network";

import { CircularProgress } from "@mui/material";
import { CharactersList } from "@components/CharactersPage/CharactersList";

import { CharacterType, HeaderLocationType } from "@/types";

import { Container } from "@styled_componets/Container.style";
import { CircularContainer } from "@styled_componets/CircularContainer.style";
import { StyledBackButton } from "@/styled_componets/StyledBackButton.style";
import { ImageArrowBack } from "@containers/СharacterPage/CharacterPage.style";
import {
  DescriptionItem,
  LocationDescription,
  LocationHeader,
  LocationResidents,
  LocationTitle,
  LocationWrapper,
  ResidentsTitleWrapper,
  ResidentsTitle,
  LocationTitleWrapper,
} from "./LocationPage.style";

import arrowBack from "@assets/images/arrowBack.svg";

export const LocationPage = () => {
  const { id } = useParams();
  const [headerLocation, setHeaderLocation] = useState<HeaderLocationType>({
    name: "",
    type: "",
    dimension: "",
  });
  const [residents, setResidents] = useState<CharacterType[]>([]);

  const navigate = useNavigate();
  const handleGoBack = (event: React.MouseEvent) => {
    event.preventDefault();
    navigate(-1);
  };

  const { loading } = useQuery(GET_LOCATION, {
    variables: { id },
    onCompleted: (data) => {
      const { location } = data;
      const { name, type, dimension, residents } = location;

      setHeaderLocation({ name, type, dimension });
      setResidents(residents);
    },
  });

  if (loading)
    return (
      <Container>
        <LocationWrapper>
          <CircularContainer>
            <CircularProgress />
          </CircularContainer>
        </LocationWrapper>
      </Container>
    );

  return (
    <Container>
      <LocationWrapper>
        <LocationHeader>
          <LocationTitleWrapper>
            <StyledBackButton onClick={handleGoBack} top={"50%"}>
              <ImageArrowBack src={arrowBack} alt="arrow back" />
              <span>GO BACK</span>
            </StyledBackButton>
            <LocationTitle>{headerLocation.name}</LocationTitle>
          </LocationTitleWrapper>

          <LocationDescription>
            <DescriptionItem>
              <span className="description__title">Type</span>
              <span className="description__value">{headerLocation.type}</span>
            </DescriptionItem>

            <DescriptionItem>
              <span className="description__title">Dimension</span>
              <span className="description__value">
                {headerLocation.dimension}
              </span>
            </DescriptionItem>
          </LocationDescription>
        </LocationHeader>

        <LocationResidents>
          <ResidentsTitleWrapper>
            <ResidentsTitle>Residents</ResidentsTitle>
          </ResidentsTitleWrapper>
          <CharactersList characters={residents} visible={residents.length} />
        </LocationResidents>
      </LocationWrapper>
    </Container>
  );
};
