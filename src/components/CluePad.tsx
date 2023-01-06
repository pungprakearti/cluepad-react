import { useState } from 'react'
import cx from 'classnames'
import Cell from './Cell'
import styles from './CluePad.module.scss'

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
  const [modalActive, setModalActive] = useState(false)

  // Change state of cell if clicked
  const handleClick = (name) => {
    let tempName = name.split('-')
    let tempTracker = tracker.slice()
    tempTracker[tempName[0]][tempName[1]] =
      !tempTracker[tempName[0]][tempName[1]]
    setTracker(tempTracker)
  }

  const handleModal = () => {
    setModalActive(true)
  }

  const handleClear = () => {
    setTracker(initializeTracker())
    setModalActive(false)
  }

  // Static text
  const players = ['Green', 'Mustard', 'Orchid', 'Peacock', 'Plum', 'Scarlet']
  const weapons = [
    'Candlestick',
    'Dagger',
    'Lead Pipe',
    'Revolver',
    'Rope',
    'Wrench',
  ]
  const rooms = [
    'Ballroom',
    'Billiard Room',
    'Conservatory',
    'Dining Room',
    'Hall',
    'Kitchen',
    'Library',
    'Lounge',
    'Study',
  ]

  // Create clickable cells to keep track of guesses
  const createCells = (sectionTitle: string, rowNum: number) => {
    let tempRow = []
    tempRow.push(
      <h3 className={cx(styles.cell, styles.sectionItem)} key={sectionTitle}>
        {sectionTitle}
      </h3>
    )
    for (let colNum = 0; colNum < 6; colNum++) {
      const name = `${colNum}-${rowNum}`
      tempRow.push(
        <Cell
          selected={tracker[colNum][rowNum]}
          key={name}
          handleClick={() => handleClick(name)}
        />
      )
    }
    return (
      <div className={styles.row} key={`${sectionTitle}-wrap`}>
        {tempRow}
      </div>
    )
  }

  // Create top row
  let topRowEl = []
  topRowEl.push(
    <h2 className={cx(styles.leftCell, styles.players)} key='players'>
      Players
    </h2>
  )
  players.forEach((player) => {
    topRowEl.push(
      <div
        className={cx(styles.cell, styles[player.toLowerCase()])}
        key={player}
      >
        <span className='sr-only'>{`${player} player marker`}</span>
      </div>
    )
  })

  // Create other rows
  let playersEl = []
  let weaponsEl = []
  let roomsEl = []
  for (let row = 0; row < 21; row++) {
    if (row < 6) {
      playersEl.push(createCells(players[row], row))
    }
    if (row >= 6 && row < 12) {
      weaponsEl.push(createCells(weapons[row - 6], row))
    }
    if (row >= 12) roomsEl.push(createCells(rooms[row - 12], row))
  }

  return (
    <div className={styles.wrap}>
      {modalActive && (
        <div className={styles.breakout} onClick={() => setModalActive(false)}>
          <div>
            <h2 className={styles.clearText}>Clear your pad?</h2>
            <div className={styles.buttons}>
              <button className={styles.button} onClick={handleClear}>
                ✅
              </button>
              <button
                className={styles.button}
                onClick={() => setModalActive(false)}
              >
                🚫
              </button>
            </div>
          </div>
        </div>
      )}
      <div className={cx(styles.inner, { [styles.blur]: modalActive })}>
        <button className={styles.clear} onClick={handleModal}>
          🧹
        </button>
        <h1 className={styles.title}>Clue pad</h1>
        <div>
          <div className={styles.row}>{topRowEl}</div>
          <div className={styles.row}>
            <h3 className={cx(styles.leftCell, styles.sectionTitle)}>Who?</h3>
          </div>
          {playersEl}
          <div className={styles.row}>
            <h3 className={cx(styles.leftCell, styles.sectionTitle)}>What?</h3>
          </div>
          {weaponsEl}
          <div className={styles.row}>
            <h3 className={cx(styles.leftCell, styles.sectionTitle)}>Where?</h3>
          </div>
          {roomsEl}
        </div>
      </div>
      <a
        className={styles.link}
        href='https://github.com/pungprakearti/cluepad-react'
        target='_blank'
        rel='noopener noreferrer'
      >
        github.com/pungprakearti/cluepad-react
      </a>
    </div>
  )
}

export default CluePad
