import styled from 'styled-components'

export const Label = styled.div`
  padding: 1em;

  display: grid;
  justify-content: center;
  align-content: center;

  background: ${({ color }) => (color ? color : '#fff')};
  transition: background 0.3s;

  font-weight: 600;

  word-wrap: anywhere;
  hyphens: auto;
`

export const SettingsContainer = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;

  > button {
    border: none;
    background: none;

    cursor: pointer;
  }
`

export const Arrows = styled.div`
  display: flex;
  flex-direction: column;

  > button {
    border: none;
    background: none;

    cursor: pointer;
  }
`

export const Svg = styled.svg`
  width: 22px;
  fill: #ccc;
  transition: 0.2s;

  :hover,
  :focus {
    transform: rotate(360deg) scale(1.2, 1.2);
    fill: #fff;
  }
`
