import { CharacterCard } from "@/components/CharacterCard";

import { CharactersWrapper } from "./CharactersList.style";

export const CharactersList = ({ characters, visible }: any) => {
  if (characters.length === 0)
    return (
      <CharactersWrapper>
        <div className="chracters__not_found">Not Found</div>
      </CharactersWrapper>
    );

  return (
    <CharactersWrapper>
      {characters.slice(0, visible).map((character: any) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </CharactersWrapper>
  );
};
