import { LocationPage } from "@containers/LocationPage";
import { LocationsPage } from "@containers/LocationsPage";
import { routePath } from "@constants/routePath";
import { CharactersPage } from "@containers/CharactersPage";
import { CharacterPage } from "@containers/СharacterPage";
import { EpisodesPage } from "@containers/EpisodesPage";

const routesConfig = [
  {
    path: "/",
    element: <CharactersPage />,
  },
  {
    path: routePath.characters,
    element: <CharactersPage />,
  },
  {
    path: `${routePath.character}/:id`,
    element: <CharacterPage />,
  },
  {
    path: `${routePath.locations}`,
    element: <LocationsPage />,
  },
  {
    path: `${routePath.location}/:id`,
    element: <LocationPage />,
  },
  {
    path: `${routePath.episodes}`,
    element: <EpisodesPage />,
  },
];

export default routesConfig;
