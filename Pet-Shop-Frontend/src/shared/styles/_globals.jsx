import { Global, css } from '@emotion/react'
import React from 'react'

export const globalStyles = (
  <Global
    styles={css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      *,
      input,
      textarea,
      button {
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        font-size: 20px;
        line-height: 130%;
        letter-spacing: 0%;
      }
      body {
        margin: 0 auto;
        padding-bottom: 80px;
        min-height: 100vh;
      }
      ul,
      ol {
        list-style: none;
      }
      a {
        text-decoration: none;
        color: #282828;
      }
    `}
  />
)
