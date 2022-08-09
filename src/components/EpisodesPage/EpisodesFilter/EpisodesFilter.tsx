import { EpisodesFilterOptionsType } from "@/types";
import { FiltersInputSearch } from "@UI-Kit/FiltersInputSearch";
import { FiltersWrapper } from "@styled_componets/FiltersWrapper.style";

type TProps = {
  setFilterOptions: React.Dispatch<
    React.SetStateAction<EpisodesFilterOptionsType>
  >;
};

export const EpisodesFilter = ({ setFilterOptions }: TProps) => {
  const handleInputSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/S\d/.test(value))
      setFilterOptions({
        name: "",
        episode: value,
      });
    else
      setFilterOptions({
        name: value,
        episode: "",
      });
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
