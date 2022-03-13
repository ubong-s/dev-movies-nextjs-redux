import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import {
  selectSearchOpen,
  closeSearchForm,
} from '../../features/global/globalSlice'
import {
  selectSearchQuery,
  updateSearchQuery,
} from '../../features/search/searchSlice'
import { breakpoints, dimensions, variables } from '../../styles/globalStyle'

const SearchForm = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const searchQuery = useSelector(selectSearchQuery)
  const searchOpen = useSelector(selectSearchOpen)

  return (
    <SearchFormWrap
      onSubmit={(e) => {
        e.preventDefault()
        searchQuery && router.push('/search')
        dispatch(closeSearchForm())
      }}
      className={searchOpen ? 'opened' : undefined}
    >
      <input
        type='text'
        name='search'
        placeholder='Start typing.....'
        value={searchQuery}
        onChange={(e) => dispatch(updateSearchQuery(e.target.value))}
      />
      <button className='btn' type='submit'>
        Search
      </button>
    </SearchFormWrap>
  )
}

export default SearchForm

const SearchFormWrap = styled.form`
  position: absolute;
  top: ${dimensions.headerHeight.mobile};
  left: 0%;
  right: 0%;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  transform: translateY(-50vh);
  transition: ${variables.misc.transitionEase};

  input {
    width: 100%;
    padding: 1rem;
    outline: none;
    border: 2px solid ${(props) => props.theme.neutral};
    font-family: ${variables.fonts.secondary};
    border-top: none;

    &:focus {
      border: 1px solid ${(props) => props.theme.accent};
    }
  }

  &.opened {
    transform: translateY(0);
  }

  button {
    position: absolute;
    right: 0.5rem;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 0;
  }

  @media screen and (min-width: ${breakpoints.desktop}px) {
    top: ${dimensions.headerHeight.desktop};
    left: 50%;
    right: 5%;

    input {
      font-size: 1rem;
    }

    button {
      right: 0.25rem;
    }
  }
`
