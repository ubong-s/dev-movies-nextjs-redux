import styled from 'styled-components';

const Loading = () => {
   return (
      <LoadingRoot>
         <h1>Loading...</h1>
      </LoadingRoot>
   );
};

export default Loading;

const LoadingRoot = styled.div`
   min-height: 50vh;
   display: flex;
   align-items: center;
   justify-content: center;

   h1 {
      margin-bottom: 0;
   }
`;
