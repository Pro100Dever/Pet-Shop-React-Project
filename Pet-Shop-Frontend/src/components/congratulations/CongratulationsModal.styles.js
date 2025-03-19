import styled from '@emotion/styled'

export const InvertSvg = styled.img`
  siz &:hover {
    cursor: pointer;
  }
`
export const StyledBtn = styled.button`
  border: none;
  background: transparent;
  position: absolute;
  top: 32px;
  right: 32px;
  :hover {
    cursor: pointer;
  }
`
export const StyledContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: #28282866;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const TextContainer = styled.div`
  position: relative;
  border: none;
  background: transparent;
  width: 550px;
  min-height: 240px;
  height: fit-content;
  border-radius: 12px;
  padding: 32px 92px 32px 32px;
  background: #0d50ff;
`
export const StyledTitle = styled.h3`
  font-weight: 600;
  font-size: 40px;
  line-height: 110%;
  margin-bottom: 24px;
  color: #fff;
`
export const StyledText = styled.p`
  text-align: start;
  font-weight: 600;
  line-height: 110%;
  margin-bottom: 16px;
  color: #fff;
`
