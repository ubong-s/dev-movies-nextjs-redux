import Link from 'next/link'
import styled from 'styled-components'
import { breakpoints, variables } from '../../styles/globalStyle'

const Button = ({ title = 'Click here', click, linkText }) => {
  return (
    <ButtonRoot onClick={click && click}>
      {linkText ? (
        <Link href={linkText}>
          <a>{title}</a>
        </Link>
      ) : (
        title
      )}
    </ButtonRoot>
  )
}

export default Button

const ButtonRoot = styled.button`
  cursor: pointer;
  font-family: ${variables.fonts.secondary};
  background: ${(props) => props.theme.accent};
  color: white;
  border: none;
  border-radius: ${variables.roundings.medium};
  outline: none;
  padding: 0.75rem 1rem;
  text-transform: capitalize;
  transform: ${variables.misc.transitionEase};

  a {
    color: white;
  }

  &:hover {
    opacity: 0.9;
  }

  @media screen and (min-width: ${breakpoints.desktop}px) {
    padding: 1rem 2rem;
    font-size: 1.15rem;
  }
`
