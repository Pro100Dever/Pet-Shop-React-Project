import NavTreeLink from '../../shared/ui/ActionUI/navTreeLink/NavTreeLink'
import { NavContainer, StyledDiv } from './PathTree.styles'

export default function PathTree({ text, path, itemsPath = null }) {
  return (
    <NavContainer>
      <NavTreeLink text='Main page' />
      <StyledDiv></StyledDiv>
      <NavTreeLink text={text} path={`/${path}`} />
      {itemsPath && (
        <>
          <StyledDiv></StyledDiv>
          <NavTreeLink text={text} path={`/${path}`} />
        </>
      )}
    </NavContainer>
  )
}
