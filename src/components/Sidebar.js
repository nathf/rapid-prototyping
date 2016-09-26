import React, { Component } from 'react'
import { Link } from 'react-router'

class Sidebar extends Component {
  state = { expanded: false }

  routes = [
    { to: '/page/about', label: 'About' },
    { to: '/page/contact', label: 'Contact' }
  ]

  onClick() {
    this.setState({
      expanded: !this.state.expanded
    })
  }

  render() {
    const { expanded } = this.state
    return (
      <aside className="sidebar" id="nav">
        <button aria-controls="local-nav" className="local-nav-toggle" aria-expanded={expanded} onClick={this.onClick.bind(this)}>Menu</button>
        <nav className="local-nav" aria-label="main navigation" aria-expanded={expanded}>
          <ul>
            <li>
              <Link to="/" className="is-active">Navigation</Link>
              <ul>
                {this.routes.map(({ to, label }, i) => (
                  <li key={i}>
                    <Link to={to}>{label}</Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </nav>
      </aside>
    )
  }
}

export default Sidebar
