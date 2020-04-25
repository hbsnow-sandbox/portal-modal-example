import React, { useContext, useState } from 'react'

import { NextPage } from 'next'

import Modal from '../components/Modal'
import { DispatchContext, StateType, StateContext } from '../modules/modules'

const Page: NextPage = () => {
  const dispatch = useContext(DispatchContext)
  const state = useContext<StateType>(StateContext)

  const [modalName, setModalName] = useState('')

  const onClickHandler = (): void => {
    if (!modalName) {
      dispatch({ type: 'unshift', modal: 'error.empty' })
      return
    }
    dispatch({ type: 'push', modal: modalName })
  }

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
        <button onClick={onClickHandler}>
          add {modalName ? modalName : null} modal
        </button>

        <pre>{JSON.stringify(state.modals)}</pre>
      </div>

      <Modal />
    </>
  )
}

export default Page
