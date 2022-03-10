import styled from 'styled-components';
import {
   breakpoints,
   GlobalStyle,
   ThemeContext,
   variables,
} from '../../styles/globalStyle';
import Footer from './Footer';
import Navbar from './Navbar';
import { useDispatch, useSelector } from 'react-redux';
import {
   selectDarkMode,
   selectMenuOpen,
   closeMenu,
} from '../../features/global/globalSlice';

const Layout = ({ children }) => {
   const dispatch = useDispatch();
   const darkMode = useSelector(selectDarkMode);
   const menuOpen = useSelector(selectMenuOpen);

   return (
      <ThemeContext darkMode={darkMode}>
         <GlobalStyle />
         <Navbar />
         <Main>
            <Overlay
               className={menuOpen && 'opened'}
               onClick={() => dispatch(closeMenu())}
            ></Overlay>
            {children}
         </Main>
         <Footer />
      </ThemeContext>
   );
};

export default Layout;

const Main = styled.main`
   position: relative;
`;

const Overlay = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background: #0a0910;
   opacity: 0.8;
   z-index: 5;
   transition: ${variables.misc.transitionEase};
   transform: translate(100%);

   &.opened {
      transform: translate(0);
   }

   @media screen and (min-width: ${breakpoints.desktop}px) {
      display: none;
   }
`;
