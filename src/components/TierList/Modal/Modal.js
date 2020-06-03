import React, { useContext } from 'react'
import Modal from 'react-modal'
import { SketchPicker } from 'react-color'

import { TierListContext } from '../../../contexts/TierListContext'

import { Label, Buttons, Button } from './styles'

const customModalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '2em',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}

Modal.setAppElement('#root')

const Component = ({ row, index, isModalOpen, setModalOpen }) => {
  const { tierListDispatch } = useContext(TierListContext)

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={() => setModalOpen(false)}
      style={customModalStyles}
    >
      <Label
        type='text'
        value={row.label}
        onChange={(e) =>
          tierListDispatch({
            type: 'CHANGE_ROW_LABEL',
            id: row.id,
            newLabel: e.target.value,
          })
        }
      />
      <SketchPicker
        color={row.color}
        onChange={(newColor) =>
          tierListDispatch({
            type: 'CHANGE_ROW_COLOR',
            id: row.id,
            newColor: newColor.hex,
          })
        }
      />
      <Buttons>
        <Button
          onClick={() => tierListDispatch({ type: 'ADD_ROW_ABOVE', index })}
        >
          Create Row Above
        </Button>
        <Button
          onClick={() => tierListDispatch({ type: 'ADD_ROW_BELOW', index })}
        >
          Create Row Below
        </Button>
        <Button
          onClick={() => tierListDispatch({ type: 'CLEAR_ROW', id: row.id })}
        >
          Clear Row
        </Button>
        <Button
          onClick={() => tierListDispatch({ type: 'REMOVE_ROW', id: row.id })}
        >
          Delete Row
        </Button>
      </Buttons>

      <button onClick={() => setModalOpen(false)}>Close</button>
    </Modal>
  )
}
export { Component }
