import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { formatSlug } from '../../utils/helpers'
import { breakpoints, variables } from '../../styles/globalStyle'

const SearchResults = ({ data }) => {
  const filteredResults = data.filter(
    (item) => item.media_type === 'movie' || item.media_type === 'tv'
  )

  return (
    <SearchResultsWrap>
      {filteredResults.map((item, index) => {
        const {
          id,
          name,
          title,
          poster_path,
          backdrop_path,
          overview,
          media_type,
        } = item

        const slug = formatSlug(title ? title : name)
        const slugPre = media_type === 'tv' ? media_type : 'movies'

        return (
          <Link key={id} href={`/${slugPre}/${id}-${slug}`}>
            <a>
              <MovieItem>
                {poster_path && (
                  <div className='image'>
                    <Image
                      src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                      alt={title ? title : name}
                      width='150'
                      height='175'
                      layout='responsive'
                    />
                  </div>
                )}
                <div className='info'>
                  <h4>{title ? title : name}</h4>
                  <p className='mobile'>{overview.substring(0, 150)}...</p>
                  <p className='desktop'>{overview.substring(0, 300)}...</p>
                </div>
              </MovieItem>
            </a>
          </Link>
        )
      })}
    </SearchResultsWrap>
  )
}

export default SearchResults

const SearchResultsWrap = styled.section`
  display: grid;
  gap: 1.5rem;
  padding-top: 1rem;
`

const MovieItem = styled.article`
  display: grid;
  background: ${(props) => props.theme.neutral};
  border-radius: ${variables.roundings.medium};
  overflow: hidden;
  transition: ${variables.misc.transitionEase};

  .info {
    padding: 1.5rem;
  }

  h4 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.85rem;
    margin-bottom: 0;
  }

  .desktop {
    display: none;
  }

  &:hover {
    opacity: 0.8;
    background: ${(props) => props.theme.primary};
  }

  @media screen and (min-width: ${breakpoints.tablet}px) {
    grid-template-columns: auto 1fr;
    align-items: center;

    .image,
    .no-image {
      width: 175px;
      object-fit: cover;
      object-position: center;

      img {
        height: 250x;
      }
    }

    h4 {
      font-size: 1.5rem;
    }

    p {
      font-size: 0.9rem;
      margin-bottom: unset;
    }

    .mobile {
      display: none;
    }

    .desktop {
      display: block;
    }
  }
`
