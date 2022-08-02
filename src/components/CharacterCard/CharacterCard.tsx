import {
  CharacterDescription,
  CharacterImage,
  CharacterWrapper,
} from "./CharacterCard.style";

const CharacterCard = ({ character } : any) => {
  const { name, image, species } = character;

  return (
    <CharacterWrapper>
      <CharacterImage Image={image} />

      <CharacterDescription>
        <h6 className="character__name">{name}</h6>
        <h6 className="character__species">{species}</h6>
      </CharacterDescription>
    </CharacterWrapper>
  );
};

export default CharacterCard;
