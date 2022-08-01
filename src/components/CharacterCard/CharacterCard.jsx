import PropTypes from "prop-types";
import {
  CharacterDescription,
  CharacterImage,
  CharacterWrapper,
} from "./CharacterCard.style";

const CharacterCard = ({ character }) => {
  const { name, image, species } = character;

  return (
    <CharacterWrapper>
      <CharacterImage image={image} />

      <CharacterDescription>
        <h6 className="character__name">{name}</h6>
        <h6 className="character__species">{species}</h6>
      </CharacterDescription>
    </CharacterWrapper>
  );
};

CharacterCard.propTypes = {
  character: PropTypes.object,
};
export default CharacterCard;
