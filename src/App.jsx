import React from 'react'
import { Provider } from 'react-redux'

import store from './store'
import MainWidget from './components/mainWidget/MainWidget'
import '../src/styles/main.scss'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MainWidget />
      </div>
    </Provider>
  )
}

export default App
