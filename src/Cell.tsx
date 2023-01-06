import React = require('react')
import styles from './Cell.module.scss'

type Props = {
  type: 'button' | 'left-trans' | 'left-title' | 'left-item'
}

const Cell: React.FC<Props> = ({ type = 'button' }) => {
  return <div className={styles[`wrap__${type}`]}></div>
}

export default Cell
