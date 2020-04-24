import React, { useContext, useRef, useState, useEffect } from 'react'

import { createPortal } from 'react-dom'

import { StateType, StateContext, DispatchContext } from '../modules/modules'

const Modal: React.FC = () => {
  const ref = useRef()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    ref.current = document.querySelector('#__next')
    setMounted(true)
  }, [])

  const dispatch = useContext(DispatchContext)
  const state = useContext<StateType>(StateContext)

  return mounted
    ? createPortal(
        <div>
          <button onClick={(): void => dispatch({ type: 'shift' })}>
            close
          </button>
          <pre>{JSON.stringify(state.modals)}</pre>
          {state.modals?.[0] && <div>type: {state.modals[0]}</div>}
        </div>,
        ref.current
      )
    : null
}

export default Modal
