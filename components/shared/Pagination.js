import styled from 'styled-components';
import { Button, Container } from '..';

const Pagination = ({ next, prev, data }) => {
   return (
      <Container>
         <PaginationRoot>
            {data.page !== 1 && <Button title='Prev' click={prev} />}
            {data.total_pages !== data.page && (
               <Button title='Next' click={next} />
            )}
         </PaginationRoot>
      </Container>
   );
};

export default Pagination;

const PaginationRoot = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
`;
