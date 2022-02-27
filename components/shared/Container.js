import styled from 'styled-components';
import { breakpoints, variables } from '../../styles/globalStyle';

const Container = ({ children }) => {
   return <ContainerRoot>{children}</ContainerRoot>;
};

export default Container;

const ContainerRoot = styled.div`
   width: 90%;
   margin: auto;

   @media screen and (min-width: ${breakpoints.desktop}px) {
      max-width: 1440px;
   }
`;
