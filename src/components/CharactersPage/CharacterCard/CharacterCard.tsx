import { CharacterType } from "@/types";
import {
  CharacterDescription,
  CharacterImageWrapper,
  CharacterWrapper,
} from "./CharacterCard.style";

type TProps = {
  character: CharacterType;
};

export const CharacterCard = ({ character }: TProps) => {
  const { name, image, species } = character;

  return (
    <CharacterWrapper>
      <CharacterImageWrapper>
        <img src={image} alt={name} />
      </CharacterImageWrapper>

      <CharacterDescription>
        <h6 className="character__name">{name}</h6>
        <h6 className="character__species">{species}</h6>
      </CharacterDescription>
    </CharacterWrapper>
  );
};
