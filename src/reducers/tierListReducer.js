import { v4 as uuidv4 } from 'uuid'
import chroma from 'chroma-js'
import { reorderRows, reorder } from '../lib/reorder'

export const tierListReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TIERLIST': {
      return action.data
    }

    case 'REORDER_ROWS': {
      return {
        ...state,
        rows: reorderRows(state.rows, action.source, action.destination),
      }
    }

    case 'ADD_ROW': {
      return {
        ...state,
        rows: [
          {
            id: uuidv4(),
            label: 'Temporary Label',
            items: [],
            color: chroma.random().set('hsl.s', 1).set('hsl.l', 0.75).hex(),
          },
          ...state.rows,
        ],
      }
    }

    case 'ADD_ROW_ABOVE': {
      const newRow = {
        id: uuidv4(),
        label: 'Temporary Label',
        items: [],
        color: chroma.random().set('hsl.s', 1).set('hsl.l', 0.75).hex(),
      }

      const tempRows = state.rows
      const newRows = tempRows.slice()
      newRows.splice(action.index, 0, newRow)

      return {
        ...state,
        rows: newRows,
      }
    }

    case 'ADD_ROW_BELOW': {
      const newRow = {
        id: uuidv4(),
        label: 'Temporary Label',
        items: [],
        color: chroma.random().set('hsl.s', 1).set('hsl.l', 0.75).hex(),
      }

      const tempRows = state.rows
      const newRows = tempRows.slice()
      newRows.splice(action.index + 1, 0, newRow)

      return {
        ...state,
        rows: newRows,
      }
    }

    case 'REMOVE_ROW': {
      if (state.rows.length === 1) return state

      const deletedItems = state.rows
        .filter((row) => row.id === action.id)
        .flatMap((item) => item.items)

      const filteredRows = state.rows.filter((row) => row.id !== action.id)
      const newRows = filteredRows.map((row, i) =>
        i === filteredRows.length - 1
          ? { ...row, items: [...deletedItems, ...row.items] }
          : row
      )

      return {
        ...state,
        rows: newRows,
      }
    }

    case 'CLEAR_ROW': {
      const clearedItems = state.rows
        .filter((row) => row.id === action.id)
        .flatMap((item) => item.items)

      const newRows = state.rows
        .map((row) => (row.id === action.id ? { ...row, items: [] } : row))
        .map((row, i) =>
          i === state.rows.length - 1
            ? { ...row, items: [...clearedItems, ...row.items] }
            : row
        )

      return {
        ...state,
        rows: newRows,
      }
    }

    case 'MOVE_ROW_UP': {
      return {
        ...state,
        rows:
          action.index !== 0
            ? reorder([...state.rows], action.index, action.index - 1)
            : [...state.rows],
      }
    }

    case 'MOVE_ROW_DOWN': {
      return {
        ...state,
        rows:
          action.index !== state.rows.length - 1
            ? reorder([...state.rows], action.index, action.index + 1)
            : [...state.rows],
      }
    }

    case 'CHANGE_ROW_LABEL': {
      return {
        ...state,
        rows: state.rows.map((row) =>
          row.id === action.id ? { ...row, label: action.newLabel } : row
        ),
      }
    }

    case 'CHANGE_ROW_COLOR': {
      return {
        ...state,
        rows: state.rows.map((row) =>
          row.id === action.id ? { ...row, color: action.newColor } : row
        ),
      }
    }

    default:
      throw new Error('Unexpected action')
  }
}
