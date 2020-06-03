import styled from 'styled-components'

export const Table = styled.div`
  margin: 0 auto;

  display: grid;
  gap: 3px;
  grid-template-columns: 2fr 3fr 1fr;
  grid-auto-rows: minmax(75px, 100%);

  background: #191919;
  border: 3px solid #191919;

  @media (min-width: 601px) {
    grid-template-columns: minmax(125px, 200px) 1fr 100px;
  }
`
