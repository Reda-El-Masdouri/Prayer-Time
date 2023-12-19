import { createRoot } from 'react-dom/client'
import React from 'react'
import { App } from './App'
import { Provider } from 'react-redux'
import { store } from './features/store'

const domNode = document.getElementById('root')!
const root = createRoot(domNode)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
