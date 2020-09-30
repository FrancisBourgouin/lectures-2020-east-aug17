import React from 'react'

const Buttons = (props) => {

  const setParticipant = () => {
    props.setParticipants(prevState => {
      return { ...prevState, ninja: newPlayer }
    })
  }

  return (
    <section>
      <button onClick={setParticipant}>Add the ninja player</button>
      <button onClick={props.changeName}>Change cadaei's name</button>
    </section>
  )
}