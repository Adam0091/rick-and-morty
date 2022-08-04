import {
  DiscriptionListItem,
  DiscriptionButtonItemArrow,
  DiscriptionListItemWrapper,
  DiscriptionName,
  DiscriptionValue,
} from "@containers/СharacterPage/CharacterPage.style";

import arrowNext from "@assets/images/arrowNext.svg";

type TProps = {
  name: string;
  value: string;
  isLink: boolean;
};

export const InformationItem = ({ name, value, isLink }: TProps) => (
  <DiscriptionListItem>
    <DiscriptionListItemWrapper>
      <DiscriptionName>{name}</DiscriptionName>
      <DiscriptionValue>{value}</DiscriptionValue>
    </DiscriptionListItemWrapper>
    {isLink && (
      <DiscriptionButtonItemArrow>
        <img src={arrowNext} alt="arrow next button" />
      </DiscriptionButtonItemArrow>
    )}
  </DiscriptionListItem>
);
