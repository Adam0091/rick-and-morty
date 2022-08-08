import { useEffect, useState } from "react";
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
    }
  );

  const [items, setItems] = useState<EpisodeType[]>([]);
  const [visible, setVisible] = useState(12);
  const ids = new Array(51).fill(1).map((_, i) => i + 1);
  const { loading, error, data } = useQuery(GET_EPISODES, {
    variables: { ids },
    onCompleted: (data) => {
      const { episodesByIds: result } = data;
      setItems(result);
    },
  });

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 4);
  };

  const filter = () => {
    if (loading) return;

    let result = data.episodesByIds;

    if (filterOptions.name)
      result = result.filter(
        (episodeItem: EpisodeType) =>
          episodeItem.name.includes(filterOptions.name) ||
          episodeItem.episode.includes(filterOptions.name)
      );
    setVisible(12);
    setItems(result);
  };

  useEffect(() => {
    filter();
  }, [filterOptions]);

  if (error) {
    return <p>Error :(</p>;
  }

  return (
    <PageTemplate
      FilterComponent={<EpisodesFilter setFilterOptions={setFilterOptions} />}
      ListComponent={<EpisodesList episodes={items} visible={visible} />}
      logo={logoEpisodes}
      logoAlt="rick and morty"
      disabled={false}
      showMoreItems={showMoreItems}
    />
  );
};
