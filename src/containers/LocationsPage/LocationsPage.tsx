import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";

import { GET_LOCATIONS } from "@/utils/network";

import { CircularProgress } from "@mui/material";
import { LocationsList } from "@components/LocationsPage/LocationsList";
import { LocationsFilter } from "@components/LocationsPage/LocationsFilter";

import {
  LocationFilterOptionsType,
  LocationsSelectOptionsType,
  LocationType,
} from "@/types";

import { Container } from "@/styled_componets/Container.style";
import { LogoWrapper } from "./LocationsPage.style";
import { Content } from "@/styled_componets/Content.style";

import logoLocations from "@assets/images/logoLocations.png";
import { CircularContainer } from "@/styled_componets/CircularContainer.style";
import { ButtonWrapper } from "@/styled_componets/ButtonWrapper.style";
import { ButtonStyle } from "@/styled_componets/ButtonStyle.style";

export const LocationsPage = () => {
  //Хранит уникальные значение силектов
  const [selectOptions, setSelectOptions] =
    useState<LocationsSelectOptionsType>({
      type: [],
      dimension: [],
    });
  // Фильтры для изменения списка персонажей
  const [filterOptions, setFilterOptions] = useState<LocationFilterOptionsType>(
    {
      name: null,
      type: null,
      dimension: null,
    }
  );

  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(8);
  const ids = new Array(126).fill(1).map((_, i) => i + 1);
  const { loading, error, data } = useQuery(GET_LOCATIONS, {
    variables: { ids },
    onCompleted: (data) => {
      const { locationsByIds: result } = data;
      setItems(result);
      setSelectOptions({
        type: Array.from(
          new Set(
            result
              .filter((location: LocationType) => location.type !== "")
              .map((location: LocationType) => location.type)
          )
        ),
        dimension: Array.from(
          new Set(
            result
              .filter((location: LocationType) => location.dimension !== "")
              .map((location: LocationType) => location.dimension)
          )
        ),
      });
    },
  });

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 4);
  };

  const filter = () => {
    if (loading) return;

    let result = data.locationsByIds;

    if (filterOptions.name)
      result = result.filter((location: LocationType) =>
        location.name.includes(filterOptions.name as string)
      );
    if (filterOptions.type)
      result = result.filter(
        (location: LocationType) => location.type === filterOptions.type
      );
    if (filterOptions.dimension)
      result = result.filter(
        (location: LocationType) =>
          location.dimension === filterOptions.dimension
      );
    setVisible(8);
    setItems(result);
  };

  useEffect(() => {
    filter();
  }, [filterOptions]);

  if (error) {
    return <p>Error :(</p>;
  }

  return (
    <Container>
      <div>
        <LogoWrapper>
          <img src={logoLocations} alt="rick and morty" />
        </LogoWrapper>

        <Content>
          <LocationsFilter
            selectOption={selectOptions}
            filterOptions={filterOptions}
            setFilterOptions={setFilterOptions}
          />

          {loading ? (
            <CircularContainer>
              <CircularProgress />
            </CircularContainer>
          ) : (
            <LocationsList locations={items} visible={visible} />
          )}

          <ButtonWrapper>
            <ButtonStyle onClick={showMoreItems}>LOAD MORE</ButtonStyle>
          </ButtonWrapper>
        </Content>
      </div>
    </Container>
  );
};
