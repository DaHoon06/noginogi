import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 2px;
  max-width: 600px;
  min-width: 200px;

  @media screen and (max-width: 767px) {
    padding: 1em 1.25em;
    max-width: 100%;
    width: 100%;
  }
`;

export const Title = styled.h2`
  margin-bottom: 16px;
  text-align: center;
  font-size: 24px;
  color: #333;
`;

export const Category = styled.div<{ isSelected: boolean }>`
  cursor: pointer;
  padding: 10px 16px;
  margin: 8px 0;
  background-color: ${({ isSelected }) => (isSelected ? '#4caf50' : '#fff')};
  color: ${({ isSelected }) => (isSelected ? '#fff' : '#333')};
  border: 1px solid ${({ isSelected }) => (isSelected ? '#4caf50' : '#ddd')};
  border-radius: 8px;
  transition:
    background-color 0.3s,
    color 0.3s;
  &:hover {
    background-color: ${({ isSelected }) =>
      isSelected ? '#43a047' : '#f1f1f1'};
  }
`;

export const ChildrenContainer = styled.div`
  padding-left: 24px;
  margin-top: 12px;
  border-left: 2px solid #ddd;
`;

export const ChildCategory = styled.div`
  margin-bottom: 12px;
`;

export const Item = styled.div`
  cursor: pointer;
  margin: 6px 0;
  padding: 8px 12px;
  background-color: #fff;
  color: #333;
  border: 1px solid #ddd;
  border-radius: 4px;
  transition:
    background-color 0.3s,
    color 0.3s;

  &:hover {
    background-color: #f1f1f1;
  }

  &.selected {
    background-color: #1976d2;
    color: #fff;
    border-color: #1976d2;
  }
`;
