import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { breakpoints, variables } from '../../styles/globalStyle';
import { selectQuery, updateQuery } from '../../features/movies/moviesSlice';

const filters = [
   {
      id: 1,
      title: 'popular',
      query: 'popular',
   },
   {
      id: 2,
      title: 'top rated',
      query: 'top_rated',
   },

   {
      id: 3,
      title: 'upcoming',
      query: 'upcoming',
   },
   {
      id: 4,
      title: 'now playing',
      query: 'now_playing',
   },
];

const MoviesFilters = () => {
   const dispatch = useDispatch();
   const query = useSelector(selectQuery);

   return (
      <MoviesFiltersRoot>
         {filters.map((filter) => (
            <button
               className={query === filter.query && 'active'}
               key={filter.id}
               onClick={() => dispatch(updateQuery(filter.query))}
            >
               {filter.title}
            </button>
         ))}
      </MoviesFiltersRoot>
   );
};

export default MoviesFilters;

const MoviesFiltersRoot = styled.div`
   display: flex;
   gap: 1rem;
   margin-bottom: 2rem;

   button {
      cursor: pointer;
      font-family: ${variables.fonts.secondary};
      background: ${(props) => props.theme.neutral2};
      color: #fff;
      border: none;
      border-radius: ${variables.roundings.medium};
      outline: none;
      padding: 0.75rem 1rem;
      text-transform: capitalize;
      transition: ${variables.misc.transitionEase};

      &:hover {
         background: ${(props) => props.theme.accent};
      }

      &.active {
         background: ${(props) => props.theme.accent};
      }

      @media screen and (min-width: ${breakpoints.desktop}px) {
         padding: 1rem 2rem;
      }
   }
`;
