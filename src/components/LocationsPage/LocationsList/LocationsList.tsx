import { StyledLink } from "@components/CharactersPage/CharactersList/CharactersList.style";
import { routePath } from "@constants/routePath";
import { LocationCard } from "@/components/LocationsPage/LocationCard";
import { LocationsWrapper } from "./LocationsList.style";
import { LocationType } from "@/types";

type TProps = {
  locations: LocationType[];
  visible: number;
};

export const LocationsList = ({ locations, visible }: TProps) => {
  if (locations.length === 0)
    return (
      <LocationsWrapper>
        <div className="locations__not_found">Not Found</div>
      </LocationsWrapper>
    );

  return (
    <LocationsWrapper>
      {locations.slice(0, visible).map((location: LocationType) => (
        <StyledLink
          to={`${routePath.location}/${location.id}`}
          key={location.id}
        >
          <LocationCard location={location} />
        </StyledLink>
      ))}
    </LocationsWrapper>
  );
};
