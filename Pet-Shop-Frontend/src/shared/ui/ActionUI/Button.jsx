import styled from '@emotion/styled'

const theme = {
  style: `
    display: inline-block;
    padding: 16px 0;
    text-align: center;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    `,
  colors: {
    basic: ' #FFFFFF',
    focus: '#282828',
    focusNegative: '#0D50FF',
  },
  background: {
    basic: '#0D50FF',
    hover: '#282828',
    focus: ' #FFFFFF',
  },
}

export default function AnyButton({ text, width }) {
  const StyledBtn = styled.button`
    ${theme.style}
    width: ${width};
    color: ${theme.colors.basic};
    background: ${theme.background.basic};
    &:hover {
      background: ${theme.background.hover};
    }
    &:active {
      color: ${theme.colors.focus};
      background-color: ${theme.background.focus};
    }
  `

  return <StyledBtn>{text}</StyledBtn>
}
