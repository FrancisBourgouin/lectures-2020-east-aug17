import React from 'react';
import axios from 'axios';

import Header from './Header'
import Commits from './Commits';
import Spy from './Spy';

import './App.css';

// https://api.github.com/repos/FrancisBourgouin/lectures-2020-east-aug17/commits

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      repo: "lectures-2020-east-aug17",
      username: "FrancisBourgouin",
      spyRevealed: false
    }
    this.changeRepo = this.changeRepo.bind(this)
  }

  changeRepo() {
    const repos = [
      "lectures-2020-east-aug17",
      "lectures-2020-east-jul20"
    ]

    if (this.state.repo === repos[0]) {
      this.setState(prev => ({ ...prev, repo: repos[1] }))
    } else {
      this.setState(prev => ({ ...prev, repo: repos[0] }))
    }
  }

  componentDidMount() {
    axios
      .get(`https://api.github.com/repos/${this.state.username}/${this.state.repo}/commits`)
      .then(res => {
        this.setState(prev => ({ ...prev, commits: res.data }))
      })
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, prevState)
    console.log("UPDATE YAS")

    if (prevState.repo !== this.state.repo) {
      axios
        .get(`https://api.github.com/repos/${this.state.username}/${this.state.repo}/commits`)
        .then(res => {
          this.setState(prev => ({ ...prev, commits: res.data }))
        })
    }
  }

  render() {
    const { repo, username, commits } = this.state
    return (
      <>
        <Header time={new Date().toDateString()} />
        <h1 onClick={this.changeRepo}>Hello!</h1>
        <button onClick={() => this.setState(prev => ({ ...prev, spyRevealed: true }))}>📢</button>
        <section>
          <h1>We will look for the {repo} repo from {username}</h1>
        </section>
        <Commits commits={commits} />
        {!this.state.spyRevealed && <Spy />}
      </>
    )
  }
}

// function App (){
//   return(
//     <h1>Hello!</h1>
//   )
// }

export default App;
