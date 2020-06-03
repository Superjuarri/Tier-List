import React, { useReducer, createContext } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { tierListReducer } from '../reducers/tierListReducer'

const dataFromBackend = [
  { id: uuidv4(), content: 'Mario' },
  { id: uuidv4(), content: 'Donkey Kong' },
  { id: uuidv4(), content: 'Link' },
  { id: uuidv4(), content: 'Samus' },
  { id: uuidv4(), content: 'Yoshi' },
  { id: uuidv4(), content: 'Kirby' },
  { id: uuidv4(), content: 'Fox' },
  { id: uuidv4(), content: 'Pikachu' },
  { id: uuidv4(), content: 'Luigi' },
  { id: uuidv4(), content: 'Ness' },
  { id: uuidv4(), content: 'Captain Falcon' },
  { id: uuidv4(), content: 'Jigglypuff' },
]

const rowsFromBackend = [
  {
    id: uuidv4(),
    label: 'S',
    items: [],
    color: 'rgb(255, 127, 127)',
  },
  {
    id: uuidv4(),
    label: 'A',
    items: [],
    color: 'rgb(255, 191, 127)',
  },
  {
    id: uuidv4(),
    label: 'B',
    items: [],
    color: 'rgb(255, 223, 127)',
  },
  {
    id: uuidv4(),
    label: 'C',
    items: [],
    color: '#FFFF7F',
  },
  {
    id: uuidv4(),
    label: 'D',
    items: [],
    color: 'rgb(127, 255, 255)',
  },
  {
    id: uuidv4(),
    label: 'Unranked',
    items: dataFromBackend,
    color: '#fff',
  },
]

export const TierListContext = createContext()

const TierListContextProvider = ({ children }) => {
  const [tierList, tierListDispatch] = useReducer(tierListReducer, {
    id: uuidv4(),
    rows: rowsFromBackend,
  })

  // useEffect(() => {
  //   const data = localStorage.getItem(tierList.id)

  //   if (data) {
  //     tierListDispatch({ type: 'SET_TIERLIST', data: JSON.parse(data) })
  //   }
  // }, [])

  // useEffect(() => {
  //   localStorage.setItem(tierList.id, JSON.stringify(tierList))
  // })

  return (
    <TierListContext.Provider value={{ tierList, tierListDispatch }}>
      {children}
    </TierListContext.Provider>
  )
}

export default TierListContextProvider
