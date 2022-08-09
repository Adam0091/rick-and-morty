import { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { GET_LOCATION } from "@utils/network";

import { CharacterType, HeaderLocationType } from "@/types";

import { PageDetailsTemplate } from "@components/PageDetailsTemplate";

import {
  DescriptionItem,
  DescriptionList,
} from "@styled_componets/Description.style";

export const LocationPage = () => {
  const { id } = useParams();
  const [headerLocation, setHeaderLocation] = useState<HeaderLocationType>({
    name: "",
    type: "",
    dimension: "",
  });
  const [residents, setResidents] = useState<CharacterType[]>([]);

  const { loading } = useQuery(GET_LOCATION, {
    variables: { id },
    onCompleted: (data) => {
      const { location } = data;
      const { name, type, dimension, residents } = location;

      setHeaderLocation({ name, type, dimension });
      setResidents(residents);
    },
  });

  return (
    <PageDetailsTemplate
      loading={loading}
      titleHeader={headerLocation.name}
      listTitle={"Residents"}
      characters={residents}
      DescriptionComponent={
        <DescriptionList>
          <DescriptionItem>
            <span className="description__title">Type</span>
            <span className="description__value">{headerLocation.type}</span>
          </DescriptionItem>

          <DescriptionItem>
            <span className="description__title">Dimension</span>
            <span className="description__value">
              {headerLocation.dimension}
            </span>
          </DescriptionItem>
        </DescriptionList>
      }
    />
  );
};
