import React, { useContext } from 'react'

import ReactDOM from 'react-dom'

import { StateType, StateContext } from '../modules/modules'

const Modal = () => {
  const state = useContext<StateType>(StateContext)

  const renderModal = (): JSX.Element => {
    return (
      <div>
        <div>Modal</div>
        <button onClick={(): void => alert('未実装')}>Close</button>
      </div>
    )
  }

  return ReactDOM.createPortal(
    state.modals.length > 0 && renderModal(),
    document?.getElementById('modal')
  )
}

export default Modal
