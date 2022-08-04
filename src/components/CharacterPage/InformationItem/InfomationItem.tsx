import {
  DiscriptionListItem,
  DiscriptionListItemArrow,
  DiscriptionListItemWrapper,
  DiscriptionName,
  DiscriptionValue,
} from "@containers/СharacterPage/CharacterPage.style";

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
    {isLink && <DiscriptionListItemArrow />}
  </DiscriptionListItem>
);
