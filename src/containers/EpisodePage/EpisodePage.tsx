import { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { GET_EPISODE } from "@utils/network";

import { CharacterType, HeaderEpisodeType } from "@/types";

import { PageDetailsTemplate } from "@components/PageDetailsTemplate";

import {
  DescriptionItem,
  DescriptionList,
} from "@styled_componets/Description.style";

export const EpisodePage = () => {
  const { id } = useParams();
  const [headerEpisode, setHeaderEpisode] = useState<HeaderEpisodeType>({
    name: "",
    episode: "",
    air_date: "",
  });
  const [residents, setResidents] = useState<CharacterType[]>([]);

  const { loading } = useQuery(GET_EPISODE, {
    variables: { id },
    onCompleted: (data) => {
      const { episodeData } = data;
      const { name, episode, air_date, characters } = episodeData;

      setHeaderEpisode({ name, episode, air_date });
      setResidents(characters);
    },
  });

  return (
    <PageDetailsTemplate
      loading={loading}
      titleHeader={headerEpisode.name}
      listTitle={"Residents"}
      characters={residents}
      DescriptionComponent={
        <DescriptionList>
          <DescriptionItem>
            <span className="description__title">Episode</span>
            <span className="description__value">{headerEpisode.episode}</span>
          </DescriptionItem>

          <DescriptionItem>
            <span className="description__title">Date</span>
            <span className="description__value">{headerEpisode.air_date}</span>
          </DescriptionItem>
        </DescriptionList>
      }
    />
  );
};
