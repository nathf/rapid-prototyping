import React, { Component } from 'react'
import { BrowserRouter, Match, Miss } from 'react-router'
import NoMatch from './components/NoMatch'
import Page from './components/Page'
import Home from './components/Home'
import Sidebar from './components/Sidebar'

class App extends Component {
  render() {
    return (
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
    );
  }
}

export default App;
