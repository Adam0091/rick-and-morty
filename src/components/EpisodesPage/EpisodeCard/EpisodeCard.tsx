import { EpisodeType } from "@/types";

import { EpisodeDescription } from "./EpisodeCard.style";
import { TextCardWrapper } from "@styled_componets/TextCard.style";

type TProps = {
  episode: EpisodeType;
};

export const EpisodeCard = ({ episode }: TProps) => {
  const { name, air_date, episode: episodeName } = episode;

  return (
    <TextCardWrapper>
      <EpisodeDescription>
        <h6 className="episode__name">{name}</h6>
        <h6 className="episode__air-data">{air_date}</h6>
        <h6 className="episode__episode-name">{episodeName}</h6>
      </EpisodeDescription>
    </TextCardWrapper>
  );
};
