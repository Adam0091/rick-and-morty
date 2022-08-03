import { CharactersPage } from "@containers/CharactersPage";
import { CharacterPage } from "@containers/СharacterPage";

const routesConfig = [
  {
    path: "/",
    element: <CharactersPage />,
  },
  {
    path: "/characters",
    element: <CharactersPage />,
  },
  {
    path: "/character/:id",
    element: <CharacterPage />,
  },
];

export default routesConfig;
