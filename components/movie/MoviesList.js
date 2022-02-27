import styled from 'styled-components';
import {
   Container,
   Error,
   Loading,
   MovieCard,
   MovieFilters,
   SectionTitle,
} from '..';
import { breakpoints } from '../../styles/globalStyle';
import { useSelector } from 'react-redux';
import {
   selectLoading,
   selectError,
   selectQuery,
} from '../../features/movies/moviesSlice';
import { formatQuery } from '../../utils/helpers';

const MoviesList = ({ data, headingTitle }) => {
   const loading = useSelector(selectLoading);
   const error = useSelector(selectError);
   const query = useSelector(selectQuery);

   return (
      <MoviesRoot>
         <Container>
            <SectionTitle
               title={'Movies'}
               subtitle={formatQuery(query)}
               headingOne
            />

            <MovieFilters />

            {loading ? (
               <Loading />
            ) : error ? (
               <Error error={error} />
            ) : (
               <MoviesGrid>
                  {data.map((movie) => (
                     <MovieCard key={movie.id} movie={movie} />
                  ))}
               </MoviesGrid>
            )}
         </Container>
      </MoviesRoot>
   );
};

export default MoviesList;

const MoviesRoot = styled.section``;

const MoviesGrid = styled.div`
   display: grid;
   gap: 1.25rem;
   grid-template-columns: repeat(2, 1fr);

   @media screen and (min-width: ${breakpoints.desktop}px) {
      grid-template-columns: repeat(5, 1fr);
      gap: 2rem;
   }
`;
