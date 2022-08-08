import { useEffect, useRef, useState } from "react";
import { useQuery } from "@apollo/client";

import { GET_LOCATIONS } from "@utils/network";

import { LocationsList } from "@components/LocationsPage/LocationsList";
import { LocationsFilter } from "@components/LocationsPage/LocationsFilter";
import { PageTemplate } from "@components/PageTemplate";

import { LocationFilterOptionsType, LocationType } from "@/types";

import logoLocations from "@assets/images/logoLocations.png";
import { LOCATION_OPTIONS } from "@/constants/selectsOption";

export const LocationsPage = () => {
  const selectOptions = {
    type: LOCATION_OPTIONS.type,
    dimension: LOCATION_OPTIONS.dimension,
  };

  const [filterOptions, setFilterOptions] = useState<LocationFilterOptionsType>(
    {
      name: "",
      type: "",
      dimension: "",
    }
  );

  const [items, setItems] = useState<LocationType[]>([]);
  const [visible, setVisible] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const prevFilterOptions = useRef({ ...filterOptions });
  const nextPage = useRef(null);
  const { error, data } = useQuery(GET_LOCATIONS, {
    variables: { page: currentPage, filter: filterOptions },
  });

  const showMoreItems = () => {
    if (visible % 20 === 0) setCurrentPage((prevValue) => prevValue + 1);
    setVisible((prevValue) => prevValue + 4);
  };

  useEffect(() => {
    if (data) {
      const locations = data.locations.results;
      nextPage.current = data.locations.info.next;
      const isFilterNotChange =
        JSON.stringify(prevFilterOptions.current) ===
        JSON.stringify(filterOptions);
      if (isFilterNotChange) {
        setItems([...items, ...locations]);
      } else {
        prevFilterOptions.current = { ...filterOptions };
        setItems(locations);
        setCurrentPage(1);
        setVisible(8);
      }
    }
  }, [data]);

  if (error) {
    return <p>Error :(</p>;
  }
  return (
    <PageTemplate
      FilterComponent={
        <LocationsFilter
          selectOption={selectOptions}
          filterOptions={filterOptions}
          setFilterOptions={setFilterOptions}
        />
      }
      ListComponent={<LocationsList locations={items} visible={visible} />}
      logo={logoLocations}
      logoAlt="rick and morty"
      disabled={nextPage.current === null || !data}
      showMoreItems={showMoreItems}
    />
  );
};
