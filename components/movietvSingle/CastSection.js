import Image from 'next/image';
import styled from 'styled-components';
import { Container } from '..';
import { breakpoints, variables } from '../../styles/globalStyle';

const CastSection = ({ topCast }) => {
   return (
      <CastRoot>
         <Container>
            <h2>Top Cast</h2>
            <CastInner>
               {topCast.map((item) => (
                  <article key={item.id}>
                     <div className='image'>
                        <Image
                           src={`https://image.tmdb.org/t/p/original${item.profile_path}`}
                           alt={item.name}
                           width='200'
                           height='300'
                           layout='responsive'
                        />
                     </div>
                     <h4>{item.name}</h4>
                     <p>{item.character}</p>
                  </article>
               ))}
            </CastInner>
         </Container>
      </CastRoot>
   );
};

export default CastSection;

const CastRoot = styled.section``;
const CastInner = styled.div`
   display: grid;
   gap: 1rem;
   grid-template-columns: repeat(2, 1fr);

   article {
      .image {
         overflow: hidden;
         border-radius: ${variables.roundings.medium};
      }

      h4 {
         margin: 1rem 0 0.5rem;
      }

      p {
         font-style: italic;
         opacity: 0.8;
         font-style: 0.9rem;
      }
   }

   @media screen and (min-width: ${breakpoints.desktop}px) {
      grid-template-columns: repeat(5, 1fr);
      gap: 2rem;
   }
`;
