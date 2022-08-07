import { EpisodesFilterOptionsType } from "@/types";
import { FiltersWrapper } from "@/components/CharactersPage/CharactersFilters/CharactersFilters.style";
import { FiltersInputSearch } from "@/components/UI-Kit/FiltersInputSearch";

type TProps = {
  setFilterOptions: React.Dispatch<
    React.SetStateAction<EpisodesFilterOptionsType>
  >;
};

export const EpisodesFilter = ({ setFilterOptions }: TProps) => {
  const handleInputSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterOptions((filterOptions: EpisodesFilterOptionsType) => ({
      ...filterOptions,
      name: e.target.value,
    }));
  };

  return (
    <FiltersWrapper isCenter={true}>
      <FiltersInputSearch
        placeholder="Filter by name or episode (ex. S01 or S01E02)"
        handleInputSearch={handleInputSearch}
        maxWidth={"500px"}
      />
    </FiltersWrapper>
  );
};
