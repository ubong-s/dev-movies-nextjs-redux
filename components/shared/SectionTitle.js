import React from 'react';
import styled from 'styled-components';

const SectionTitle = ({ title, headingOne, subtitle }) => {
   return (
      <TitleRoot>
         <TitleInner>
            <div>{headingOne ? <h1>{title}</h1> : <h2>{title}</h2>}</div>{' '}
            {subtitle && <h4>{subtitle}</h4>}
         </TitleInner>
         <Line></Line>
      </TitleRoot>
   );
};

export default SectionTitle;

const TitleRoot = styled.div`
   padding: 2rem 0;
   text-transform: capitalize;
`;

const TitleInner = styled.div`
   display: flex;
   align-items: flex-end;
   justify-content: space-between;
`;

const Line = styled.div`
   height: 3px;
   width: 100%;
   background: ${(props) => props.theme.gradient};
`;
