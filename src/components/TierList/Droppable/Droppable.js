import React, { useState, useEffect } from 'react'
import { Droppable } from 'react-beautiful-dnd'

import useWindowSize from '../../../hooks/useWindowSize'

import { Draggable } from '../Draggable'

import { Container } from './styles'

const Component = ({ row }) => {
  const [width] = useWindowSize()
  const [droppableDirection, setDroppableDirection] = useState('horizontal')

  useEffect(() => {
    if (width <= 600) {
      setDroppableDirection('vertical')
    } else {
      setDroppableDirection('horizontal')
    }
  }, [width])

  return (
    <Droppable
      droppableId={row.id}
      direction={droppableDirection}
      isCombineEnabled={false}
    >
      {(provided, snapshot) => {
        return (
          <Container
            {...provided.droppableProps}
            ref={provided.innerRef}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {row.items.map((item, index) => {
              return <Draggable key={index} item={item} index={index} />
            })}
            {provided.placeholder}
          </Container>
        )
      }}
    </Droppable>
  )
}

export { Component }
