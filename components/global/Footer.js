import Link from 'next/link';
import styled from 'styled-components';
import { Container } from '..';
import { breakpoints, variables } from '../../styles/globalStyle';

const Footer = () => {
   return (
      <FooterRoot>
         <Container>
            <FooterInner>
               <p>Dev Movies {new Date().getFullYear()}.</p>

               <div className='credits'>
                  <p>
                     Made with{' '}
                     <a
                        href='https://nextjs.org/'
                        target='_blank'
                        rel='noreferrer'
                     >
                        Next.js
                     </a>
                  </p>
                  <p>
                     API:{' '}
                     <a
                        href='https://developers.themoviedb.org/3/getting-started'
                        target='_blank'
                        rel='noreferrer'
                     >
                        TMDB
                     </a>
                  </p>
               </div>
            </FooterInner>
         </Container>
      </FooterRoot>
   );
};

export default Footer;

const FooterRoot = styled.footer`
   padding: 1.5rem 0;
   border-top: 1px solid ${(props) => props.theme.neutral};

   @media screen and (min-width: ${breakpoints.desktop}px) {
      padding: 2rem 0;
   }
`;

const FooterInner = styled.footer`
   p {
      margin-bottom: 0;

      a {
         opacity: 0.7;
      }
   }

   .credits {
      display: flex;
      align-items: center;
      gap: 2rem;
      justify-content: space-between;
      margin-top: 0.5rem;
   }

   @media screen and (min-width: ${breakpoints.desktop}px) {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .credits {
         margin-top: 0;
      }
   }
`;
