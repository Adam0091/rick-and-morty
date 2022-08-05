import { LocationsPage } from "@/containers/LocationsPage";
import { routePath } from "@constants/routePath";
import { CharactersPage } from "@containers/CharactersPage";
import { CharacterPage } from "@containers/СharacterPage";

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
];

export default routesConfig;
