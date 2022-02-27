import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";
import { useEffect } from "react";

export default function NotFound() {
   const router = useRouter();

   useEffect(() => {
      setTimeout(() => {
         router.push("/");
      }, 3000);
   }, []);

   return (
      <>
         <div className='container'>
            <NotFoundWrap>
               <h1>404</h1>
               <h4>Whoops… Page Not Found!</h4>
               <Link href='/' passHref>
                  <button className='btn'>Back to Home</button>
               </Link>
            </NotFoundWrap>
         </div>
      </>
   );
}

const NotFoundWrap = styled.section`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   height: 70vh;

   h1 {
      font-size: 10rem;
      color: ${(props) => props.theme.primaryColor};

      @media screen and (min-width: 1024px) {
         font-size: 20rem;
         line-height: 1.2;
      }
   }

   h4 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
   }
`;
