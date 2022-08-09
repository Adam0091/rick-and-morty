import { routePath } from "@constants/routePath";
import { EpisodeType } from "@/types";
import { StyledLink } from "@/components/CharactersPage/CharactersList/CharactersList.style";
import { EpisodesWrapper } from "./EpisodesList.style";
import { EpisodeCard } from "@components/EpisodesPage/EpisodeCard";

type TProps = {
  episodes: EpisodeType[];
  visible: number;
};

export const EpisodesList = ({ episodes, visible }: TProps) => {
  if (episodes.length === 0)
    return (
      <EpisodesWrapper>
        <span className="locations__not-found">Not Found</span>
      </EpisodesWrapper>
    );

  return (
    <EpisodesWrapper>
      {episodes.slice(0, visible).map((episode: EpisodeType) => (
        <StyledLink to={`${routePath.episode}/${episode.id}`} key={episode.id}>
          <EpisodeCard episode={episode} />
        </StyledLink>
      ))}
    </EpisodesWrapper>
  );
};
