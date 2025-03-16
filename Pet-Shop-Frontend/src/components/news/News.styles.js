import styled from '@emotion/styled'
import newsImg from '../../shared/assets/images/NewsImg.png'

export const NewsContainer = styled.div`
  background-image: url(${newsImg});
  position: absolute;
  width: 100%;
  height: 600px;
  top: 0;
  left: 0;
  z-index: -1;
`
export const StyledSection = styled.section`
  position: relative;
  width: 100%;
  height: 600px;
  padding: 80px 40px;
`
export const NewsTitile = styled.h3`
  font-weight: 700;
  font-size: 96px;
  line-height: 110%;
  color: #ffffff;
  margin-bottom: 40px;
`
