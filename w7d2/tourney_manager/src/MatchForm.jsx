import React, { useState } from 'react'

const MatchForm = props => {
  const [formData, setFormData] = useState({
    player1: "",
    player2: "",
    winner: ""
  })
  const handleChange = (event) => {
    console.log(event.target.value, event.target.name)
    if (event.target.value.length < 10) {
      setFormData({ ...formData, [event.target.name]: event.target.value })
    }
    // setFormData(prevState => ({ ...prevState, [event.target.name]: event.target.value }))
  }
  const handleSubmit = event => {
    event.preventDefault()
    console.log("here is the form data", formData)
    props.setMatches(prevState => [...prevState, formData])
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="player1" placeholder="id of player1" onChange={handleChange} value={formData.player1} />
      <input type="text" name="player2" placeholder="id of player2" onChange={handleChange} value={formData.player2} />
      <input type="text" name="winner" placeholder="id of winner" onChange={handleChange} value={formData.winner} />
      <button type="submit">Add match</button>
    </form>
  )
}

export default MatchForm