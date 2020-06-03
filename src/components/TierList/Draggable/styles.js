import styled from 'styled-components'

export const Container = styled.div`
  padding: 0.75em;
  white-space: nowrap;

  color: #ffffff;
  background-color: ${({ isDragging }) => (isDragging ? 'lightgrey' : 'grey')};

  display: grid;
  align-content: center;
`
