import React, { Component } from 'react'
import { BrowserRouter, Match, Miss } from 'react-router'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

import NoMatch from './components/NoMatch'
import Page from './components/Page'
import Home from './components/Home'
import Sidebar from './components/Sidebar'

import rootReducer from './reducers'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, createLogger())
)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <main role="main">
            <Sidebar />
            <article>
              <Match pattern="/" exactly component={Home} />
              <Match pattern="/page/:id" component={Page} />
              {/* If none of those match, then a sibling `Miss` will render. */}
              <Miss component={NoMatch}/>
            </article>
          </main>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
