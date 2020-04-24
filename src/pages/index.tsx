import React, { useContext, useState } from 'react'

import { NextPage } from 'next'

import Modal from '../components/Modal'
import { DispatchContext, StateType, StateContext } from '../modules/modules'

const Page: NextPage = () => {
  const dispatch = useContext(DispatchContext)
  const state = useContext<StateType>(StateContext)

  const [modalName, setModalName] = useState('')

  return (
    <>
      <h1>Potal Modal Example</h1>

      <div>
        <input
          type="text"
          value={modalName}
          onChange={(event): void => setModalName(`${event.target.value}`)}
        />
      </div>
      <div>
        <button
          onClick={(): void => dispatch({ type: 'push', modal: modalName })}
        >
          add {modalName ? modalName : null} modal
        </button>

        <pre>{JSON.stringify(state.modals)}</pre>
      </div>

      <Modal />
    </>
  )
}

export default Page
