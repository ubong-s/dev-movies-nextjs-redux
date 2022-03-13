import React from 'react'
import styled from 'styled-components'
import { Container, MovieCard } from '..'
import { breakpoints } from '../../styles/globalStyle'

const SimilarSection = ({ movies, slugPre }) => {
  return (
    <SimilarRoot>
      <Container>
        <h2>Similar</h2>
        <SimilarInner>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} slugPre={slugPre} />
          ))}
        </SimilarInner>
      </Container>
    </SimilarRoot>
  )
}

export default SimilarSection

const SimilarRoot = styled.section``

const SimilarInner = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media screen and (min-width: ${breakpoints.desktop}px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }
`
