import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${props => props.theme.colors.lightBlue};
  height: 30px;
  padding: 3px;
  min-width: 100px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 10px 1px;
  border-radius: 4px;
  border: 2px solid ${props => props.theme.colors.darkGray};
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(1);
  transition: transform 250ms linear;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;
export const UserMenuWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const UserName = styled.p`
  margin-bottom: 0;
`;
