import NavTreeLink from '../../shared/ui/ActionUI/navTreeLink/NavTreeLink'
import { NavContainer, StyledDiv } from './PathTree.styles'

export default function PathTree({
  text = 'Categories',
  path = 'categories',
  categoryId = null,
  productId = null,
}) {
  return (
    <NavContainer>
      <NavTreeLink text='Main page' />
      <StyledDiv></StyledDiv>
      <NavTreeLink text={text} path={'/' + path} />
      {categoryId && (
        <>
          <StyledDiv></StyledDiv>
          <NavTreeLink text={categoryId} path={`/${path}/${categoryId}`} />
          {productId && (
            <>
              <StyledDiv></StyledDiv>
              <NavTreeLink
                text={productId}
                path={`/${path}/${categoryId}/${productId}`}
              />
            </>
          )}
        </>
      )}
    </NavContainer>
  )
}
