import { LocationPage } from "@containers/LocationPage";
import { LocationsPage } from "@containers/LocationsPage";
import { CharactersPage } from "@containers/CharactersPage";
import { CharacterPage } from "@containers/СharacterPage";
import { EpisodesPage } from "@containers/EpisodesPage";
import { EpisodePage } from "@containers/EpisodePage";

import { routePath } from "@constants/routePath";

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
  {
    path: `${routePath.episode}/:id`,
    element: <EpisodePage />,
  },
];

export default routesConfig;
