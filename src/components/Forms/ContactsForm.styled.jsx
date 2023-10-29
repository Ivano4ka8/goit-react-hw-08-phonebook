import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${props => props.theme.spacing(3)};
`;

export const FormLabel = styled.label`
  display: flex;
  gap: 12px;
  align-items: center;
  color: ${props => props.theme.colors.pink};
  font-weight: 600;
  font-size: ${props => props.theme.fontSizes.medium};
`;

export const FormInput = styled.input`
  width: 100%;
  height: 100%;
  padding: ${props => props.theme.spacing(3)} ${props => props.theme.spacing(3)};
  outline: none;
  border: 2px ${props => props.theme.colors.pink} solid;

  color: ${props => props.theme.colors.pink};
  font-weight: 600;
  font-size: ${props => props.theme.fontSizes.medium};

  transform: scale(0.9);
  transition: all 250ms linear;

  &:hover,
  &:focus {
    transform: scale(1);
    background-color: ${props => props.theme.colors.violet};
  }
`;

export const ButtonSubmit = styled.button`
  padding: ${props => props.theme.spacing(3)};
  width: 300px;

  color: ${props => props.theme.colors.blue};
  font-weight: 600;
  font-size: ${props => props.theme.fontSizes.medium};
  background-color: #000000;
  border: 2px ${props => props.theme.colors.blue} solid;
  border-radius: 30px;
  transform: scale(0.9);
  transition: all 250ms linear;

  &:hover,
  &:focus {
    transform: scale(1);
    background-color: white;
    border: 2px ${props => props.theme.colors.darkGray} solid;
    color: ${props => props.theme.colors.lightGray};
  }
`;
