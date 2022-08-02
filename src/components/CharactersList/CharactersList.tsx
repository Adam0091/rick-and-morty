import { CharacterCard } from "@/components/CharacterCard";
import { CharacterType } from "@/types";

import { CharactersWrapper } from "./CharactersList.style";

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
        <CharacterCard key={character.id} character={character} />
      ))}
    </CharactersWrapper>
  );
};
