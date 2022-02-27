import Link from 'next/link';
import styled from 'styled-components';
import { Container } from '..';
import { breakpoints, dimensions, variables } from '../../styles/globalStyle';
import { HiOutlineMenuAlt1, HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';
import { RiCloseLine } from 'react-icons/ri';
import {
   toggleMenu,
   closeMenu,
   toggleTheme,
   selectMenuOpen,
   selectDarkMode,
} from '../../features/global/globalSlice';
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {
   const dispatch = useDispatch();
   const menuOpen = useSelector(selectMenuOpen);
   const darkMode = useSelector(selectDarkMode);

   return (
      <Header className={menuOpen && 'opened'}>
         <Container>
            <Nav>
               <Hamburger onClick={() => dispatch(toggleMenu())}>
                  {menuOpen ? <RiCloseLine /> : <HiOutlineMenuAlt1 />}
               </Hamburger>
               <Logo onClick={() => dispatch(closeMenu())}>
                  <Link href='/'>
                     <a>Dev Movies</a>
                  </Link>
               </Logo>
               <Menu className={menuOpen && 'opened'}>
                  <li onClick={() => dispatch(closeMenu())}>
                     <Link href='/movies'>
                        <a>Movies</a>
                     </Link>
                  </li>
                  <li onClick={() => dispatch(closeMenu())}>
                     <Link href='/tv'>
                        <a>Television</a>
                     </Link>
                  </li>
               </Menu>

               <ThemeBtn onClick={() => dispatch(toggleTheme())}>
                  {darkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
               </ThemeBtn>
            </Nav>
         </Container>
      </Header>
   );
};

export default Navbar;

const Header = styled.header`
   position: relative;
   display: flex;
   align-items: center;
   height: ${dimensions.headerHeight.mobile};
   border-bottom: 1px solid ${(props) => props.theme.neutral3};
   z-index: 10;

   &.opened {
      position: sticky;
      background: ${(props) => props.theme.primary};
      top: 0;
   }

   @media screen and (min-width: ${breakpoints.desktop}px) {
      height: ${dimensions.headerHeight.desktop};
      margin-bottom: -${dimensions.headerHeight.desktop};

      &.opened {
         position: unset;
         background: unset;
         top: unset;
      }
   }
`;

const Nav = styled.nav`
   display: flex;
   justify-content: space-between;
   align-items: center;

   @media screen and (min-width: ${breakpoints.desktop}px) {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
      gap: 3rem;
   }
`;
const Logo = styled.div`
   a {
      font-family: ${variables.fonts.primary};
   }

   @media screen and (min-width: ${breakpoints.desktop}px) {
      a {
         font-size: 1.75rem;
      }
   }
`;

const Menu = styled.ul`
   position: fixed;
   top: ${dimensions.headerHeight.mobile};
   left: 0;
   width: 60%;
   height: 100%;
   background: ${(props) => props.theme.primary};
   border-top: 1px solid ${(props) => props.theme.neutral};
   border-right: 1px solid ${(props) => props.theme.neutral};
   display: flex;
   flex-direction: column;
   gap: 2rem;
   padding: 3rem 1rem;
   transform: translate(-100%);
   transition: ${variables.misc.transitionEase};
   z-index: 10;
   opacity: 0;

   &.opened {
      transform: translate(0);
      opacity: 1;
   }

   @media screen and (min-width: ${breakpoints.desktop}px) {
      position: unset;
      top: unset;
      left: unset;
      width: unset;
      height: unset;
      background: unset;
      border: none;
      flex-direction: row;
      padding: 0;
      transform: translate(0);
      z-index: unset;
      justify-content: flex-end;
      opacity: 1;
   }
`;

const Hamburger = styled.button`
   font-size: 2rem;
   background: none;
   border: none;
   outline: none;
   color: ${(props) => props.theme.text};
   line-height: 0;
   cursor: pointer;

   @media screen and (min-width: ${breakpoints.desktop}px) {
      display: none;
   }
`;

const ThemeBtn = styled.button`
   font-size: 1.25rem;
   background: none;
   border: none;
   outline: none;
   color: ${(props) => props.theme.text};
   cursor: pointer;
`;
