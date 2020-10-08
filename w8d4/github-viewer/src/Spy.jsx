import React from 'react'


class Spy extends React.Component {
  constructor() {
    super()
  }
  report = (event) => console.log("Spy report:", event)

  componentDidMount() {

    window.addEventListener('click', this.report)
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.report)
  }

  render() {
    return <h1 style={{ fontSize: "0.1em" }}>Shhhuuuuut.</h1>
  }
}

export default Spy