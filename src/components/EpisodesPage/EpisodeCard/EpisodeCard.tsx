import { EpisodeType } from "@/types";
import { EpisodeDescription, EpisodeWrapper } from "./EpisodeCard.style";

type TProps = {
  episode: EpisodeType;
};

export const EpisodeCard = ({ episode }: TProps) => {
  const { name, air_date, episode: episodeName } = episode;

  return (
    <EpisodeWrapper>
      <EpisodeDescription>
        <h6 className="episode__name">{name}</h6>
        <h6 className="episode__air-data">{air_date}</h6>
        <h6 className="episode__episode-name">{episodeName}</h6>
      </EpisodeDescription>
    </EpisodeWrapper>
  );
};
