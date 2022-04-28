import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { Container, Stars } from '..';
import { breakpoints, dimensions, variables } from '../../styles/globalStyle';

const OverviewSection = ({ movie }) => {
   const {
      backdrop_path,
      genres,
      first_air_date,
      title,
      name,
      overview,
      poster_path,
      runtime,
      tagline,
      release_date,
      vote_average,
      homepage,
      status,
      last_air_date,
   } = movie;

   const year = release_date
      ? release_date.substring(0, 4)
      : `${first_air_date.substring(0, 4)} - ${
           status && status === 'Returning Series'
              ? 'Date'
              : last_air_date.substring(0, 4)
        }`;

   return (
      <OverviewRoot>
         <div className='mobile-img mobile'>
            <Image
               src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
               alt={title}
               height='250'
               width='450'
               layout='responsive'
            />
         </div>

         <div className='desktop-img desktop'>
            <Image
               src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
               alt={title ? title : name}
               height={500}
               width={1000}
               layout='responsive'
            />
         </div>

         <OverviewInner>
            <div className='desktop-movie-img desktop'>
               <Image
                  src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                  alt={title ? title : name}
                  height={500}
                  width={400}
                  layout='responsive'
                  className='img'
               />
            </div>

            <Container>
               <div className='info'>
                  <h1>
                     {title ? title : name} ({year})
                  </h1>
                  {tagline && <p className='italic'>Tagline: {tagline}</p>}
                  <div className='stats'>
                     <Stars stars={vote_average / 2} />
                     <p className='italic'>
                        Genre: {genres.map((genre) => genre.name).join(', ')}.
                     </p>
                  </div>
                  <p>{overview}</p>
                  <a
                     href={homepage}
                     target='_blank'
                     rel='noreferrer'
                     className='btn'
                  >
                     Official Website {'>>'}
                  </a>
               </div>
            </Container>
         </OverviewInner>
      </OverviewRoot>
   );
};

export default OverviewSection;

const OverviewRoot = styled.section`
   position: relative;
   padding: 0;

   .mobile-img {
      position: relative;
      z-index: 2;
   }

   .mobile-img {
      position: relative;
      z-index: 2;
   }

   .desktop {
      display: none;
   }

   &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
   }

   @media screen and (min-width: ${breakpoints.desktop}px) {
      height: 100vh;

      padding-top: ${dimensions.headerHeight.desktop};

      &::after {
         content: '';
         position: absolute;
         top: 0;
         left: 0;
         width: 100%;
         height: 100%;
         background: ${(props) => props.theme.gradient2};
      }

      .mobile {
         display: none;
      }

      .desktop {
         display: block;
         overflow: hidden;
         height: 100%;
      }

      .desktop-img {
         position: absolute;
         top: 0;
         left: 0;
         width: 100%;
         height: 100%;
      }
   }
`;

const OverviewInner = styled.div`
   position: relative;
   z-index: 2;
   height: 100%;

   .desktop-movie-img {
      height: 100%;
      object-fit: cover;

      > div {
         height: 100%;
      }

      img {
         height: 100%;
      }
   }

   .info {
      padding: 2rem 0;
   }

   h1 {
      margin-bottom: 0.75em;
   }

   .italic {
      font-style: italic;
      opacity: 0.8;
   }

   a {
      margin-top: 1.25rem;
   }

   @media screen and (min-width: ${breakpoints.desktop}px) {
      display: grid;
      grid-template-columns: 1fr 1.75fr;
      gap: 3rem;
      align-items: center;
   }
`;
