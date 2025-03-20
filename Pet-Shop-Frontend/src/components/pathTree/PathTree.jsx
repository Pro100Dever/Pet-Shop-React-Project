import NavTreeLink from '../../shared/ui/ActionUI/navTreeLink/NavTreeLink'
import { NavContainer, StyledDiv } from './PathTree.styles'

export default function PathTree({ text, path, deepObj = null }) {
  return (
    <NavContainer>
      <NavTreeLink text='Main page' />
      <StyledDiv></StyledDiv>
      <NavTreeLink text={text} path={`/${path}`} />
      {deepObj && (
        <>
          <StyledDiv></StyledDiv>
          <NavTreeLink text={text} path={`/${path}`} />
        </>
      )}
    </NavContainer>
  )
}
