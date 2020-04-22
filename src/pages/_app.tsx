import React, { useReducer } from 'react'

import { NextPage } from 'next'
import { AppProps } from 'next/app'

import {
  StateContext,
  DispatchContext,
  reducer,
  initialState,
} from '../modules/modules'

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <Component {...pageProps} />
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

export default App
