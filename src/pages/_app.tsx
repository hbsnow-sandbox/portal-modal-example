import React, { useReducer } from 'react'

import { NextPage } from 'next'
import { AppProps } from 'next/app'

import { Context, reducer, initialState } from '../modules/modules'

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <Context.Provider value={{ state, dispatch }}>
      <Component {...pageProps} />
    </Context.Provider>
  )
}

export default App
