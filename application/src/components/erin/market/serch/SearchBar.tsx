import React, { ReactElement, useCallback, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

export const SearchInputLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

export const SearchInput = styled.input`
  box-sizing: border-box;
  background-color: black;
  border-radius: 10px;
  color: #222;
  width: 100%;
  height: 38px;
  outline: none;
  padding: 0.2em 0.8em;
  
  &:focus {
    border-color: black;
    background-color: black;
  }
  
  &::-webkit-search-cancel-button {
    position: relative;
    -webkit-appearance: none;
    height: 16px;
    width: 16px;
    border-radius: 10px;
    color: white;
    background: "url('/images/x-icon.png') center center no-repeat";
    background-size: 50%;
    background-color: #fbfbfb;
    cursor: pointer;
  }
`;


interface SearchBarProps {
  onAddKeyword: (string: string) => void;
  keyword?: string;
}

export const SearchBar = (props: SearchBarProps): ReactElement => {
  const {onAddKeyword, keyword} = props;
  const [searchValue, setSearchValue] = useState(keyword || "");
  const router = useRouter();

  const onChangeSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(e.target.value);
    },
    []
  );

  const onSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
      e.preventDefault();
      if (searchValue.length === 0) {
        alert("키워드를 입력해 주세요.");
        return;
      }

      onAddKeyword(searchValue);
      setSearchValue("");
    },
    [searchValue, router, onAddKeyword]
  );

  return (
    <form onSubmit={onSubmit}>
      <SearchInputLabel >
        <SearchInput
          value={searchValue}
          onChange={onChangeSearch}
          placeholder={"검색할 아이템 이름을 입력해주세요."}
          type={"search"}
        />
      </SearchInputLabel>
    </form>
  )
}