import { StyledNavTreeLink } from './NavtTreeLink.styles'

export default function NavtTreeLink({ text, path, home = false }) {
  console.log(Boolean(home))

  return (
    <StyledNavTreeLink to={path} home={home}>
      {text}
    </StyledNavTreeLink>
  )
}
