import styled from 'styled-components';
import { breakpoints, variables } from '../../styles/globalStyle';

const Button = ({ title = 'Click here', click }) => {
   return <ButtonRoot onClick={click && click}>{title}</ButtonRoot>;
};

export default Button;

const ButtonRoot = styled.button`
   cursor: pointer;
   font-family: ${variables.fonts.primary};
   background: ${(props) => props.theme.accent};
   color: #fff;
   border: none;
   border-radius: ${variables.roundings.medium};
   outline: none;
   padding: 0.75rem 1rem;
   text-transform: capitalize;

   @media screen and (min-width: ${breakpoints.desktop}px) {
      padding: 1rem 2rem;
   }
`;
