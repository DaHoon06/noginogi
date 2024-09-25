import styled from "styled-components";

export const PaginationLayout = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

export const PaginationBox = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;

  li {
    border-radius: 2px;
    border: 1px solid #dee2e6;
    cursor: pointer;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    &.prev,
    &.next {
      &:hover {
        background-color: #e2e6ea;
      }

      &.disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }
    }

    .page {
      background-color: #f8f9fa;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      color: #252525;

      &.active {
        background-color: #00bde1;
        color: white;
        border-color: #696969;
      }

      &:hover {
        background-color: #e2e6ea;
      }
    }
  }
`;