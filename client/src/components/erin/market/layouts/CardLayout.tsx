import {ReactElement} from "react";
import {ItemCard} from "@components/erin/market/card/ItemCard";
import styled from "@emotion/styled";

export const CardLayoutBox = styled.div`
  display: grid;
  gap: 16px;
  width: 100%;

  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const CardLayout = (): ReactElement => {
  return (
    <CardLayoutBox>
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
    </CardLayoutBox>
  )
}