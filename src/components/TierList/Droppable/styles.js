import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  min-width: 150px;

  background-color: ${({ isDraggingOver }) =>
    isDraggingOver ? 'rgba(225,225,225,.1)' : '#000'};
  color: blue;

  font-weight: 600;

  display: flex;
  flex-direction: column;
  overflow-x: auto;

  user-select: none;

  @media (min-width: 601px) {
    flex-direction: row;
  }
`
