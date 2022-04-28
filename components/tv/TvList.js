import styled from 'styled-components';
import { Container, TvCard, SectionTitle, TvFilters, Loading, Error } from '..';
import { breakpoints } from '../../styles/globalStyle';
import { useSelector } from 'react-redux';
import { formatQuery } from '../../utils/helpers';

const TvList = ({ data = [] }) => {
   const {
      showsLoading: loading,
      showsError: error,
      showsQuery: query,
   } = useSelector((state) => state.tv);

   return (
      <TvRoot>
         <Container>
            <SectionTitle
               title='Television'
               subtitle={formatQuery(query)}
               headingOne
            />

            <TvFilters />

            {loading ? (
               <Loading />
            ) : error ? (
               <Error error={error} />
            ) : (
               <TvGrid>
                  {data.map((movie) => (
                     <TvCard key={movie.id} movie={movie} slugPre='tv' />
                  ))}
               </TvGrid>
            )}
         </Container>
      </TvRoot>
   );
};

export default TvList;

const TvRoot = styled.section``;

const TvGrid = styled.div`
   display: grid;
   gap: 1.25rem;
   grid-template-columns: repeat(2, 1fr);

   @media screen and (min-width: ${breakpoints.desktop}px) {
      grid-template-columns: repeat(5, 1fr);
      gap: 2rem;
   }
`;
