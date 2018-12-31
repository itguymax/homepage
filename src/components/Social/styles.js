import styled, { css } from 'styled-components'
import { Share } from 'styled-icons/material/Share'
import { Email } from 'styled-icons/material/Email'
import { Youtube } from 'styled-icons/fa-brands/Youtube'
import { LinkedinIn as Linkedin } from 'styled-icons/fa-brands/LinkedinIn'
import { FacebookF as Facebook } from 'styled-icons/fa-brands/FacebookF'
import { Github } from 'styled-icons/fa-brands/Github'

import mediaQuery from '../../utils/mediaQuery'

export const Wrapper = styled.div`
  position: relative;
`

const collapse = css`
  display: grid;
  visibility: hidden;
  opacity: 0;
  position: absolute;
  background: ${props => props.theme.darkBlue};
  border: 1px solid ${props => props.theme.white};
  border-radius: ${props => props.theme.smallBorderRadius};
  padding: 1vmin;
  font-size: 1.3em;
  transition: ${props => props.theme.shortTrans};
  ${Wrapper}:hover & {
    visibility: visible;
    opacity: 1;
  }
`

const alwaysShow = css`
  grid-auto-flow: column;
  align-items: end;
  grid-auto-columns: max-content;
  grid-area: social;
  ${props => props.styles};
`

export const Container = styled.div`
  display: grid;
  grid-gap: 0.5em;
  ${mediaQuery.minLaptop} {
    ${alwaysShow};
  }
  ${mediaQuery.maxLaptop} {
    ${props => (props.collapse ? collapse : alwaysShow)};
  }
`

export const Toggle = styled(Share)`
  cursor: pointer;
  font-size: 1.3em;
  ${props => props.styles};
  ${mediaQuery.minLaptop} {
    display: none !important;
  }
`

export const Link = styled.a`
  ${props => props.styles};
`

export const Icons = {
  Email: styled(Email)`
    vertical-align: -0.15em;
    transform: scale(1, 1.2);
  `,
  Youtube: styled(Youtube)`
    vertical-align: -0.18em;
  `,
  Linkedin,
  Facebook,
  Github,
}
