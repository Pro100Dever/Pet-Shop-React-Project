import styled from '@emotion/styled'

export const theme = {
  style: `
    display: inline-block;
    padding: 16px 0;
    text-align: center;
    border: none;
    border-radius: 8px;
    font-weight: 600;
  `,
  colors: {
    basic: '#FFFFFF',
    focus: '#282828',
    focusNegative: '#0D50FF',
  },
  background: {
    basic: '#0D50FF',
    hover: '#282828',
    focus: '#FFFFFF',
  },
}

export const StyledBtn = styled.button`
  ${theme.style}
  width: ${props => props.width || '100%'};
  color: ${props => (props.type ? theme.colors.focus : theme.colors.basic)};
  background: ${props =>
    props.type ? theme.background.focus : theme.background.basic};

  &:hover {
    color: ${props => (props.type ? theme.colors.basic : theme.colors.hover)};
    background: ${theme.background.hover};
  }

  &.active {
    color: ${props =>
      props.type ? theme.colors.focusNegative : theme.colors.focus};
    background-color: ${theme.background.focus};
    border: ${props =>
      !props.type && `border: 1px solid ${theme.colors.focus};`};
  }
`
