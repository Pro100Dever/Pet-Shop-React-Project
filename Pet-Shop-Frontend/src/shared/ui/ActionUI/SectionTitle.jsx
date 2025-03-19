import styled from '@emotion/styled'

const StyledTitle = styled.h3`
  white-space: nowrap;
  font-weight: 700;
  font-size: 64px;
  line-height: 110%;
  margin-bottom: 40px;
`

export default function SectionTitle({ text }) {
  return <StyledTitle>{text ? text : 'Title'}</StyledTitle>
}
