import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Container, MovieCard, SectionTitle, Button } from '..';
import { updateQuery as updateMovieQuery } from '../../features/movies/moviesSlice';
import { updateQuery as updateTvQuery } from '../../features/tv/tvSlice';
import { breakpoints } from '../../styles/globalStyle';

const MoviesHome = ({ data, titleEnd }) => {
   const router = useRouter();
   const dispatch = useDispatch();

   const fetchPage = () => {
      if (titleEnd === 'movies') {
         dispatch(updateMovieQuery('popular'));
      } else {
         dispatch(updateTvQuery('popular'));
      }
   };

   return (
      <MoviesHomeRoot>
         <Container>
            <SectionTitle title={`trending ${titleEnd}`} />

            {data && (
               <MoviesGrid>
                  {data.map((movie) => (
                     <MovieCard key={movie.id} movie={movie} />
                  ))}
               </MoviesGrid>
            )}

            <div className='button'>
               <Button
                  title={`view more ${titleEnd}`}
                  click={fetchPage}
                  linkText={titleEnd === 'movies' ? titleEnd : 'tv'}
               />
            </div>
         </Container>
      </MoviesHomeRoot>
   );
};

export default MoviesHome;

const MoviesHomeRoot = styled.section`
   display: grid;
   width: 100%;

   .button {
      text-align: end;
      margin-top: 1rem;
   }

   @media screen and (min-width: ${breakpoints.desktop}px) {
      padding: 4rem 0 2rem 0;
   }
`;

const MoviesGrid = styled.div`
   display: grid;
   gap: 1.25rem;
   grid-template-columns: repeat(2, 1fr);

   @media screen and (min-width: ${breakpoints.desktop}px) {
      grid-template-columns: repeat(5, 1fr);
      gap: 2rem;
   }
`;
