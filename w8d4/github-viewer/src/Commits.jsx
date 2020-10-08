import React, { Component } from 'react'

class Commits extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const commits = this.props.commits ? this.props.commits.map(commit => <li>{commit.commit.message}</li>) : []

    return (
      <section>
        <h2>Commits</h2>
        <ul>
          {commits}
        </ul>
      </section>
    )
  }
}

export default Commits