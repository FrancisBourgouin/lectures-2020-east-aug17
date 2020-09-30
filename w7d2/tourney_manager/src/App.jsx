import React, { useState } from 'react';
import MatchForm from './MatchForm'
import './App.css';

const initialParticipants = {
  "cadaei": {
    id: "cadaei",
    name: "Francis Bourgouin",
    email: "none@none.com",
    main: "Inkling"
  },
  "moonsoon": {
    id: "moonsoon",
    name: "David Sykes",
    email: "none1@none.com",
    main: "Luigi"
  },
  "lawfulkami": {
    id: "lawfulkami",
    name: "Lanny Rivest",
    email: "none2@none.com",
    main: "Link"
  },
  "silentflyer": {
    id: "silentflyer",
    name: "Adnan Ashfaq",
    email: "none3@none.com",
    main: "Kirby"
  }
}

const matches = {
  a: {
    player1: "ninja",
    player2: "silentflyer",
    winner: "silentflyer"
  }
}
function App() {

  const newPlayer = {
    id: "ninja",
    name: "Ninja ninja",
    email: "pock@pock.com",
    main: "Link"
  }
  const newnewPlayer = {
    id: "pirate",
    name: "Ninjarrr",
    email: "cluck@cluck.com",
    main: "King K. Rool"
  }
  // const [count, setCount] = useState(0)
  const [participants, setParticipants] = useState(initialParticipants)
  const [matches, setMatches] = useState([])

  const listOfNames = Object.values(participants).map(participant => <li key={participant.id}>{participant.name}</li>)

  const addPlayer = () => {
    // participants[newPlayer.id] = newPlayer
    // const newParticipants = participants
    const newParticipants = { ...participants }
    newParticipants.cadaei.secret = 42
    console.log("mutated?", initialParticipants)
    console.log("mutated?", participants)
    console.log("mutated?", newParticipants)
    console.log(participants)
    newParticipants.ninja = newPlayer
    newParticipants.pirate = newnewPlayer
    setParticipants(newParticipants)
    // console.log(participants)
    // setParticipants({ ...participants, 'pirate': newnewPlayer })
    // console.log(participants)
  }

  const batchAddPlayer = () => {
    // prevState === participants
    setParticipants(prevState => {
      return { ...prevState, ninja: newPlayer }
    })
    // prevState === participants + ninja
    setParticipants(prevState => {
      return { ...prevState, pirate: newnewPlayer }
    })
    // prevState === participants + ninja + pirate
  }

  const changeName = () => {
    const newParticipants = { ...participants }
    const newCadaei = { ...newParticipants.cadaei }
    newCadaei.name = "Francis Peter Bourgouin"
    newParticipants.cadaei = newCadaei
    console.log(participants, newParticipants, initialParticipants)
    setParticipants(newParticipants)
  }
  return (
    <div className="App">
      <h1>I AM TOURNEY MANAGER</h1>
      <ul>
        {listOfNames}
      </ul>
      <MatchForm setMatches={setMatches} />
      <button onClick={batchAddPlayer}>batch add!</button>
    </div>
  );
}

export default App;
