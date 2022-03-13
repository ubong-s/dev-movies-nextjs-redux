import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { Container, Stars } from '..'
import { breakpoints, variables } from '../../styles/globalStyle'

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
  } = movie

  const year = release_date
    ? release_date.substring(0, 4)
    : `${first_air_date.substring(0, 4)} - ${
        status && status === 'Returning Series'
          ? 'Date'
          : last_air_date.substring(0, 4)
      }`

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
      <Container>
        <OverviewInner>
          <div className='desktop'>
            <Image
              src={`https://image.tmdb.org/t/p/original/${poster_path}`}
              alt={title ? title : name}
              height={500}
              width={400}
              layout='responsive'
              className='img'
            />
          </div>

          <div>
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

            <a href={homepage} target='_blank' rel='noreferrer' className='btn'>
              Official Website {'>>'}
            </a>
          </div>
        </OverviewInner>
      </Container>
    </OverviewRoot>
  )
}

export default OverviewSection

const OverviewRoot = styled.section`
  position: relative;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
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
    display: flex;
    align-items: center;
    height: 100vh;
    padding: 5rem 0;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      /* background: ${(props) => props.theme.primary}; */
      background: ${(props) => props.theme.gradient2};
    }

    .mobile {
      display: none;
    }

    .desktop {
      display: block;
      border-radius: ${variables.roundings.medium};
      overflow: hidden;
    }

    .desktop-img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`

const OverviewInner = styled.div`
  position: relative;
  z-index: 2;
  padding: 2rem 0;

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
    grid-template-columns: 1fr 3fr;
    gap: 4rem;
    align-items: center;
  }
`
