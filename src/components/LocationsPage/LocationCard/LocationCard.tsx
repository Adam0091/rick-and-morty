import { LocationDescription, LocationWrapper } from "./LocationCard.style";

type TProps = {
  location: {
    type: string;
    name: string;
  };
};

export const LocationCard = ({ location }: TProps) => {
  const { type, name } = location;

  return (
    <LocationWrapper>
      <LocationDescription>
        <h6 className="location__name">{name}</h6>
        <h6 className="location__type">{type}</h6>
      </LocationDescription>
    </LocationWrapper>
  );
};
