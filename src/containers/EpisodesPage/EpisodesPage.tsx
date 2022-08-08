import { useEffect, useRef, useState } from "react";
import { GET_EPISODES } from "@utils/network";
import { useQuery } from "@apollo/client";

import { PageTemplate } from "@/components/PageTemplate";
import { EpisodesFilter } from "@/components/EpisodesPage/EpisodesFilter";
import { EpisodesList } from "@/components/EpisodesPage/EpisodesList";

import { EpisodesFilterOptionsType, EpisodeType } from "@/types";

import logoEpisodes from "@assets/images/logoEpisodes.png";

export const EpisodesPage = () => {
  const [filterOptions, setFilterOptions] = useState<EpisodesFilterOptionsType>(
    {
      name: "",
      episode: "",
    }
  );

  const [items, setItems] = useState<EpisodeType[]>([]);
  const [visible, setVisible] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const prevFilterOptions = useRef({ ...filterOptions });
  const nextPage = useRef(null);
  const { loading, error, data } = useQuery(GET_EPISODES, {
    variables: { page: currentPage, filter: filterOptions },
  });

  const showMoreItems = () => {
    if (visible % 20 === 0) setCurrentPage((prevValue) => prevValue + 1);
    setVisible((prevValue) => prevValue + 4);
  };

  useEffect(() => {
    if (data) {
      console.log(filterOptions);
      const episodes = data.episodes.results;
      nextPage.current = data.episodes.info.next;
      const isFilterNotChange =
        JSON.stringify(prevFilterOptions.current) ===
        JSON.stringify(filterOptions);
      if (isFilterNotChange) {
        setItems([...items, ...episodes]);
      } else {
        prevFilterOptions.current = { ...filterOptions };
        setItems(episodes);
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
      FilterComponent={<EpisodesFilter setFilterOptions={setFilterOptions} />}
      ListComponent={<EpisodesList episodes={items} visible={visible} />}
      logo={logoEpisodes}
      logoAlt="rick and morty"
      disabled={nextPage.current === null || !data}
      showMoreItems={showMoreItems}
    />
  );
};
