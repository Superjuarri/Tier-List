import React from 'react'

import { Draggable } from 'react-beautiful-dnd'

import { Container } from './styles'

const Component = ({ item, index }) => {
  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {(provided, snapshot) => {
        return (
          <Container
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            isDragging={snapshot.isDragging}
            style={{
              ...provided.draggableProps.style,
            }}
          >
            {item.content}
          </Container>
        )
      }}
    </Draggable>
  )
}

export { Component }

/* <Draggable key={item.id} draggableId={item.id} index={index}>
  {(provided, snapshot) => {
    return (
      <Container
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        isDragging={snapshot.isDragging}
        style={{
          ...provided.draggableProps.style,
        }}
      >
        {item.content}
      </Container>
    )
  }}
</Draggable> */
