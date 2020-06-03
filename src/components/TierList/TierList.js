import React, { useContext } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'

import { TierListContext } from '../../contexts/TierListContext'

import { Row } from './Row'

import { Table } from './styles'

export const TierList = () => {
  const { tierList, tierListDispatch } = useContext(TierListContext)

  return (
    <DragDropContext
      onDragEnd={({ destination, source }) => {
        // // dropped outside the list
        if (!destination) {
          return
        }
        tierListDispatch({ type: 'REORDER_ROWS', source, destination })
      }}
    >
      <Table>
        {tierList.rows.map((row, i) => (
          <Row key={row.id} index={i} row={row} />
        ))}
      </Table>
    </DragDropContext>
  )
}
