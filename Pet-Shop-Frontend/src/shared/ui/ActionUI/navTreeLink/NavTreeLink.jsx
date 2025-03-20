import { StyledNavTreeLink } from './NavTreeLink.styles'

export default function NavTreeLink({
  text,
  path = '/',
  home = null,
  isActive = null,
}) {
  return (
    <StyledNavTreeLink
      to={path}
      home={home}
      style={{ color: isActive && '#282828' }}
    >
      {text}
    </StyledNavTreeLink>
  )
}
