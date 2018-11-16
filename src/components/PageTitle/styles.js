import styled from 'styled-components'

export const Title = styled.div`
  text-align: center;
  padding: 0.5em;
  border-bottom: 1px solid ${props => props.theme.lightGray};
  grid-column: ${props => props.cols};
`
