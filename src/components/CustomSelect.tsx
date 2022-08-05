import styled from 'styled-components';
import Select from 'react-select';

export const CustomSelect = styled(Select).attrs({
    styles: {
        control: (provided) => ({
            ...provided,
            backgroundColor: 'var(--colors-bg)',
            color: 'var(--colors-text)',
            borderRadius: 'var(--radius)',
            padding: '0.25rem',
            border: 'none',
            boxShadow: 'var(--shadow)',
            height: '50px',
        }),
        option: (provided, state) => ({
            ...provided,
            cursor: 'pointer',
            color: state.isSelected ? 'var(--colors-bg)' : 'var(--colors-text)',
            backgroundColor: state.isSelected ? 'var(--colors-ui-base)' : 'var(--colors-bg)'
        }),
    }
})`
  width: 200px;
  border-radius: var(--radius);
  font-family: var(--family);
  border: none;
  
  & > * {
    box-shadow: var(--shadow);
  }
  
  & input {
    padding-left: 0.25rem;
  }
  
  & * {
    color: var(--colors-text) !important;
  }
  
  & > div[id] {
    background-color: var(--colors-ui-base);
  }
`;

