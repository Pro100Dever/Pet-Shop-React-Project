import NavTreeLink from '../../shared/ui/ActionUI/navTreeLink/NavTreeLink'
import { NavContainer, StyledContainer, StyledDiv } from './PathTree.styles'

export default function PathTree({
  text = 'Categories',
  path = 'categories',
  categoryId = null,
  productId = null,
}) {
  const links = [{ text, path: `/${path}` }]

  if (categoryId) {
    links.push({ text: categoryId, path: `/${path}/${categoryId}` })
  }
  if (productId) {
    links.push({ text: productId, path: `/${path}/${categoryId}/${productId}` })
  }

  return (
    <NavContainer>
      <NavTreeLink text='Main page' path='/' />
      {links.map((link, index) => (
        <StyledContainer key={link.path}>
          <StyledDiv />
          <NavTreeLink
            text={link.text}
            path={link.path}
            isActive={index === links.length - 1 ? 'active' : ''}
          />
        </StyledContainer>
      ))}
    </NavContainer>
  )
}
