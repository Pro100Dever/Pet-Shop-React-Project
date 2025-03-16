/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react'

export const globalStyles = (
  <Global
    styles={css`
      body,
      input,
      textarea,
      button {
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        font-size: 20px;
        line-height: 130%;
        letter-spacing: 0%;
      }
    `}
  />
)
