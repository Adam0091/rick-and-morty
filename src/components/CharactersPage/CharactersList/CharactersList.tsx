import { CharacterCard } from "@components/CharactersPage/CharacterCard";
import { CharacterType } from "@/types";

import { CharactersWrapper, StyledLink } from "./CharactersList.style";

type TProps = {
  characters: CharacterType[];
  visible: number;
};

export const CharactersList = ({ characters, visible }: TProps) => {
  if (characters.length === 0)
    return (
      <CharactersWrapper>
        <div className="chracters__not_found">Not Found</div>
      </CharactersWrapper>
    );

  return (
    <CharactersWrapper>
      {characters.slice(0, visible).map((character: CharacterType) => (
        <StyledLink to={`/character/${character.id}`} key={character.id}>
          <CharacterCard character={character} />
        </StyledLink>
      ))}
    </CharactersWrapper>
  );
};
