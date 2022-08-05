import React, {Dispatch, SetStateAction} from 'react';
import styled from 'styled-components';

import { IoSearch } from 'react-icons/io5';

interface SearchProps {
    search: string,
    setSearch: Dispatch<SetStateAction<string>>
}

const InputContainer = styled.label`
      background-color: var(--colors-ui-base);
      padding: 1rem 2rem;
      display: flex;
      align-items: center;
      border-radius: var(--radius);
      box-shadow: var(--shadow);
      width: 100%;
      margin-bottom: 1rem;
      
      @media (min-width: 767px) {
        margin-bottom: 0;
        width: 280px;
      }
    `;

const Input = styled.input.attrs({
    type: 'search',
    placeholder: 'Search for a country'
})`
      margin-left: 2rem;
      border: none;
      background-color: var(--colors-bg);
      color: var(--colors-text);
    `;

const Search = ({ search, setSearch }: SearchProps): JSX.Element => {

    return (
        <InputContainer>
            <IoSearch />
            <Input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)} value={search}/>
        </InputContainer>
    );
};

export default Search;