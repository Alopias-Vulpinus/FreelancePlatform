import React from 'react'
import 'materialize-css'
import './static/css/app.css'
import {Provider} from 'react-redux'
import { store } from './redux/store'
import {ReduxApp} from "./ReduxApp";

function App() {

  return (
    <Provider store={store}>
        <ReduxApp/>
    </Provider>
  )
}

export default App