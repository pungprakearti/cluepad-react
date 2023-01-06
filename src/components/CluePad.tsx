import { useState } from 'react'

const CluePad = () => {
  // Create 2d array for tracking selected cells
  const initializeTracker = () => {
    let tracker = []
    for (let outerIndex = 0; outerIndex < 7; outerIndex++) {
      let innerArray = []
      for (let innerIndex = 0; innerIndex < 21; innerIndex++) {
        innerArray.push(false)
      }
      tracker.push(innerArray)
    }
    return tracker
  }

  const [tracker, setTracker] = useState(initializeTracker())

  return (
    <div>
      <h1>Clue Pad</h1>
      <div>
        <div>
          <h2>Players</h2>
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    </div>
  )
}

export default CluePad

//6x21 = 126 - One column is the player, we don't need 6 other columns
//because there are only a total of 6 players
