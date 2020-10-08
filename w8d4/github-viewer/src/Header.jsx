import React from 'react'

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { time } = this.props
    return (
      <nav>
        <h1>Hello! It is currently {time}</h1>
      </nav>
    )
  }
}

export default Header