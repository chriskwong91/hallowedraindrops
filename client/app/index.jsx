import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
// // import { syncHistoryWithStore } from 'react-router-redux'
// // import Root from './app/containers/Root'
import configureStore from './store/index'
import routes from '../routes'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'

const store = configureStore;
// const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
)

// store.subscribe(render);
