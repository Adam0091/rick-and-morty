import {
  CharacterDescription,
  CharacterImageWrapper,
  CharacterWrapper,
} from "./CharacterCard.style";

export const CharacterCard = ({ character }: any) => {
  const { name, image, species } = character;

  return (
    <CharacterWrapper>
      <CharacterImageWrapper>
        <img src={image} alt={image} />
      </CharacterImageWrapper>

      <CharacterDescription>
        <h6 className="character__name">{name}</h6>
        <h6 className="character__species">{species}</h6>
      </CharacterDescription>
    </CharacterWrapper>
  );
};
