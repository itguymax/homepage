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

const expandOnHover = css`
  display: none;
  position: absolute;
  background: ${props => props.theme.lightGreen};
  border-radius: ${props => props.theme.smallBorderRadius};
  padding: 1vmin;
  font-size: 1.8em;
  ${Wrapper}:hover & {
    display: grid;
  }
`

const alwaysShow = css`
  grid-auto-flow: column;
  align-items: end;
  grid-auto-columns: max-content;
  grid-area: social;
  ${props => props.css};
`

export const Container = styled.div`
  display: grid;
  grid-gap: 1.5vmin;
  ${mediaQuery.minLaptop} {
    ${alwaysShow};
  }
  ${mediaQuery.laptop} {
    ${props => (props.expandOnHover ? expandOnHover : alwaysShow)};
  }
`

export const Toggle = styled(Share)`
  cursor: pointer;
  font-size: 1.7em;
  ${mediaQuery.minLaptop} {
    display: none !important;
  }
`

export const Icons = {
  Email,
  Youtube,
  Linkedin,
  Facebook,
  Github,
}
