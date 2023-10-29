import styled from 'styled-components';
import { Section } from 'components/Section/Section.styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${props => props.theme.spacing(3)};
`;

export const Label = styled.label`
  display: flex;
  gap: 12px;
  align-items: center;
  color: ${props => props.theme.colors.dark};

  font-size: ${props => props.theme.fontSizes.small};
  text-transform: uppercase;
  font-weight: 600;
`;
export const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: ${props => props.theme.spacing(3)} ${props => props.theme.spacing(3)};
  outline: none;
  border: 2px ${props => props.theme.colors.lightBlue} solid;

  color: ${props => props.theme.colors.darkGray};
  font-weight: 600;
  font-size: ${props => props.theme.fontSizes.medium};

  transform: scale(0.9);
  transition: all 250ms linear;

  &:hover,
  &:focus {
    transform: scale(1);
    background-color: ${props => props.theme.colors.lightBlue};
  }
`;

export const FormWrapper = styled.div`
  width: 500px;
  height: 500px;
  background-color: ${props => props.theme.colors.blue};
  display: flex;
  justify-content: center;
  border-radius: 7px;
`;

export const SectionForm = styled(Section)`
  display: flex;
  justify-content: center;
`;
