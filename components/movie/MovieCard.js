import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { variables } from '../../styles/globalStyle';
import { Stars } from '..';
import {
   CircularProgressbar,
   CircularProgressbarWithChildren,
   buildStyles,
} from 'react-circular-progressbar';
import { formatSlug } from '../../utils/helpers';

const needDominantBaselineFix = true;

const MovieCard = ({ movie }) => {
   const { poster_path, title, name, id, vote_average } = movie;

   const slug = formatSlug(title ? title : name);

   return (
      <Link href={`/movies/${id}-${slug}`} passHref>
         <MovieCardRoot>
            <div className='image'>
               <Image
                  src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                  alt={title}
                  width='150'
                  height='200'
                  layout='responsive'
               />
            </div>
            <h4>{title ? title : name}</h4>
            {/* <Stars stars={vote_average / 2} /> */}
            <div className='circle'>
               <CircularProgressbarWithChildren
                  value={vote_average * 10}
                  styles={{
                     root: {},

                     path: {
                        stroke: `rgba(255, 47, 41, ${
                           (vote_average * 10) / 100
                        })`,

                        strokeLinecap: 'butt',
                        transition: 'stroke-dashoffset 0.5s ease 0s',
                        transform: 'rotate(0.25turn)',
                        transformOrigin: 'center center',
                     },
                     trail: {
                        stroke: '#d6d6d6',
                        strokeLinecap: 'butt',
                        transform: 'rotate(0.25turn)',
                        transformOrigin: 'center center',
                     },

                     text: {
                        fill: '#FF2F29',
                     },
                     background: {
                        fill: '#3e98c7',
                     },
                  }}
               >
                  <div
                     style={{
                        marginTop: -20,
                        fontSize: 12,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                     }}
                  >
                     <strong>{(vote_average * 10).toFixed(0)}%</strong>
                  </div>
               </CircularProgressbarWithChildren>
            </div>
         </MovieCardRoot>
      </Link>
   );
};

export default MovieCard;

const MovieCardRoot = styled.a`
   position: relative;
   color: ${(props) => props.theme.text};

   .circle {
      position: absolute;
      top: 1rem;
      right: 1rem;
      width: 55px;
      height: 55px;
      padding: 5px;
      background: ${(props) => props.theme.neutral};
      border-radius: 50%;
      z-index: 5;
   }

   .image {
      border-radius: ${variables.roundings.medium};
      overflow: hidden;
      margin-bottom: 1rem;
   }
`;
