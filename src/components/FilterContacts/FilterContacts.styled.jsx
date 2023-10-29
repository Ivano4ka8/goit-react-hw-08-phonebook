import styled from 'styled-components';

export const FilterWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const FilterInput = styled.input`
  padding: ${props => props.theme.spacing(3)} ${props => props.theme.spacing(3)};
  outline: none;
  border: 2px ${props => props.theme.colors.lightBlue} solid;

  color: ${props => props.theme.colors.textColor};
  font-weight: 600;
  font-size: ${props => props.theme.fontSizes.medium};

  transform: scale(0.9);
  transition: all 250ms linear;

  &:hover,
  &:focus {
    transform: scale(1);
    background-color: ${props => props.theme.colors.blue};
  }
`;
