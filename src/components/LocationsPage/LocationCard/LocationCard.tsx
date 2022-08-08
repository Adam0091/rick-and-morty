import { LocationDescription } from "./LocationCard.style";
import { TextCardWrapper } from "@styled_componets/TextCard.style";

type TProps = {
  location: {
    type: string;
    name: string;
  };
};

export const LocationCard = ({ location }: TProps) => {
  const { type, name } = location;

  return (
    <TextCardWrapper>
      <LocationDescription>
        <h6 className="location__name">{name}</h6>
        <h6 className="location__type">{type}</h6>
      </LocationDescription>
    </TextCardWrapper>
  );
};
