import React from 'react'

import TierListContextProvider from './contexts/TierListContext'

import { TierList } from './components/TierList/'

const App = () => {
  return (
    <TierListContextProvider>
      <TierList />
    </TierListContextProvider>
  )
}

export default App
