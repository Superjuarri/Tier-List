import React, { useState, useContext } from 'react'

import { TierListContext } from '../../../contexts/TierListContext'

import { Droppable } from '../Droppable'
import { Modal } from '../Modal'

import { Label, SettingsContainer, Arrows, Svg } from './styles'

const Row = ({ row, index }) => {
  const { tierListDispatch } = useContext(TierListContext)

  const [isModalOpen, setModalOpen] = useState(false)

  return (
    <>
      <Label color={row.color}>{row.label}</Label>

      <Droppable row={row} />

      <SettingsContainer>
        <button onClick={() => setModalOpen(true)}>
          <Svg viewBox='0 0 20 20'>
            <path
              fillRule='evenodd'
              d='M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z'
              clipRule='evenodd'
            ></path>
          </Svg>
        </button>
        <Arrows>
          <button
            onClick={() => tierListDispatch({ type: 'MOVE_ROW_UP', index })}
          >
            <Svg viewBox='0 0 20 20'>
              <path
                fillRule='evenodd'
                d='M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z'
                clipRule='evenodd'
              ></path>
            </Svg>
          </button>
          <button
            onClick={() =>
              tierListDispatch({ type: 'MOVE_ROW_DOWN', index: index })
            }
          >
            <Svg viewBox='0 0 20 20'>
              <path
                fillRule='evenodd'
                d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                clipRule='evenodd'
              ></path>
            </Svg>
          </button>
        </Arrows>
      </SettingsContainer>

      <Modal
        row={row}
        index={index}
        isModalOpen={isModalOpen}
        setModalOpen={setModalOpen}
      />
    </>
  )
}

export { Row }
