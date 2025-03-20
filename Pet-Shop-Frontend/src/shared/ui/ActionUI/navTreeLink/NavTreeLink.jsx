import { StyledNavTreeLink } from './NavTreeLink.styles'

export default function NavTreeLink({ text, path = '/', home = false }) {
  return (
    <StyledNavTreeLink
      to={path}
      home={home}
      style={({ isActive }) => ({ color: isActive && '#282828' })}
    >
      {text}
    </StyledNavTreeLink>
  )
}
