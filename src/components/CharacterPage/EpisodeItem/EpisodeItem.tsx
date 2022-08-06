import {
  DiscriptionButtonItemArrow,
  DiscriptionListItem,
  DiscriptionListItemWrapper,
  DiscriptionName,
  DiscriptionValue,
} from "@/containers/СharacterPage/CharacterPage.style";

import arrowNext from "@assets/images/arrowNext.svg";

type TProps = {
  episode: string;
  name: string;
  air_date: string;
};

export const EpisodeItem = ({ episode, name, air_date }: TProps) => (
  <DiscriptionListItem>
    <DiscriptionListItemWrapper>
      <DiscriptionName>{episode}</DiscriptionName>
      <DiscriptionValue>{name}</DiscriptionValue>
      <DiscriptionValue>{air_date}</DiscriptionValue>
    </DiscriptionListItemWrapper>
    <DiscriptionButtonItemArrow>
      <img src={arrowNext} alt="arrow next button" />
    </DiscriptionButtonItemArrow>
  </DiscriptionListItem>
);
