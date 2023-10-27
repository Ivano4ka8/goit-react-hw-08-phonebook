import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-evenly;
  padding: 5px;
  height: 50px;
  background-color: ${props => props.theme.colors.blue};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 10px 3px;
`;
