import PropTypes from "prop-types";
import CharacterCard from "@components/CharacterCard/CharacterCard";

import { CharactersWrapper, TextStyle } from "./CharactersList.style";

const CharactersList = ({ characters, visible }) => {
  if (characters.length === 0)
    return (
      <CharactersWrapper>
        <TextStyle>Not Found</TextStyle>
      </CharactersWrapper>
    );

  return (
    <CharactersWrapper>
      {characters.slice(0, visible).map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </CharactersWrapper>
  );
};

CharactersList.propTypes = {
  characters: PropTypes.array,
  visible: PropTypes.number,
};

export default CharactersList;
