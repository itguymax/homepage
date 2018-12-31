import styled, { createGlobalStyle } from 'styled-components'

import mediaQuery, { screenSize } from '../../utils/mediaQuery'
import typography from '../../utils/typography'

const { phone, desktop } = screenSize
const {
  fonts,
  minFontSize,
  maxFontSize,
  minLineHeight,
  maxLineHeight,
} = typography

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: ${fonts};
    font-size: ${minFontSize}em;
    line-height: ${minLineHeight}em;
    ${mediaQuery.minPhone} {
      font-size: calc(${minFontSize}em + (${maxFontSize} - ${minFontSize}) * ((100vw - ${phone}em) / (${desktop} - ${phone})));
      line-height: calc(${minLineHeight}em + (${maxLineHeight} - ${minLineHeight}) * ((100vw - ${phone}em) / (${desktop} - ${phone})));
    }
    ${mediaQuery.minDesktop} {
      font-size: ${maxFontSize}em;
      line-height: ${maxLineHeight}em;
    }
  }
  h1, h2, h3, h4, h5, h6 {
    line-height: initial;
  }
  a {
    text-decoration: none;
    color: ${props => props.theme.blue};
    :hover {
      color: ${props => props.theme.lightBlue};
    }
  }
  #___gatsby > * {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .btn {
    background: ${props => props.theme.darkBlue};
    color: ${props => props.theme.white} !important;
    border-radius: ${props => props.theme.smallBorderRadius};
    padding: 0.4em 0.6em;
    font-size: ${props => props.size};
    transition: ${props => props.theme.shortTrans};
    margin: 0 auto;
    :hover {
      background: ${props => props.theme.lightBlue};
    }
  }
`

export const Content = styled.main`
  flex: 1;
  margin: 5vh 0;
  display: grid;
  grid-gap: 3vmin;
  grid-template-columns: 1fr 1fr minmax(auto, ${props => props.theme.maxWidth}) 1fr 1fr;
  grid-auto-rows: max-content;
  > * {
    grid-column: 3;
  }
`
