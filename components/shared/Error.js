import styled from 'styled-components';

const Error = (props) => {
   return (
      <ErrorRoot>
         <h1>{props.error}</h1>
      </ErrorRoot>
   );
};

export default Error;

const ErrorRoot = styled.div`
   min-height: 50vh;
   display: flex;
   align-items: center;
   justify-content: center;

   h1 {
      margin-bottom: 0;
   }
`;
