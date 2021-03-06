import React from 'react'
import '../styles/base.scss'
import Container from './container'
import Navigation from './navigation'

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <Container>
        <Navigation />
        {children}
      </Container>
    )
  }
}

export default Template
