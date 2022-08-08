import { CharacterCard } from "@components/CharactersPage/CharacterCard";
import { CharacterType } from "@/types";

import { CharactersWrapper, StyledLink } from "./CharactersList.style";
import { routePath } from "@constants/routePath";
import { CircularContainer } from "@/styled_componets/CircularContainer.style";
import { CircularProgress } from "@mui/material";

type TProps = {
  characters: CharacterType[];
  visible: number;
  loading: boolean;
};

export const CharactersList = ({ characters, visible, loading }: TProps) => {
  if (characters.length === 0)
    return (
      <CharactersWrapper>
        <div className="chracters__not_found">Not Found</div>
      </CharactersWrapper>
    );

  return (
    <CharactersWrapper>
      {characters.slice(0, visible).map((character: CharacterType) => (
        <StyledLink
          to={`${routePath.character}/${character.id}`}
          key={character.id}
        >
          <CharacterCard character={character} />
        </StyledLink>
      ))}
      {loading && (
        <CircularContainer>
          <CircularProgress />
        </CircularContainer>
      )}
    </CharactersWrapper>
  );
};
