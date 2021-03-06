// a little function to help us with reordering the result
export const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)
  return result
}

export const reorderRows = (rows, source, destination) => {
  const current = rows.find((x) => x.id === source.droppableId)
  const next = rows.find((x) => x.id === destination.droppableId)
  const target = current.items[source.index]
  // moving to same list
  if (source.droppableId === destination.droppableId) {
    const reordered = reorder(current.items, source.index, destination.index)
    return rows.map((x) =>
      x.id === current.id
        ? Object.assign(Object.assign({}, x), { items: reordered })
        : x
    )
  }
  // moving to different list
  // remove from original
  current.items.splice(source.index, 1)
  // insert into next
  next.items.splice(destination.index, 0, target)
  return rows.map((x) => {
    if (current.id === x.id) {
      return Object.assign(Object.assign({}, x), { items: current.items })
    } else if (next.id === x.id) {
      return Object.assign(Object.assign({}, x), { items: next.items })
    }
    return x
  })
}
