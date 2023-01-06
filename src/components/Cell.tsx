import cx from 'classnames'
import styles from './Cell.module.scss'

type Props = {
  selected: boolean
  number: number
}

const Cell: React.FC<Props> = ({ selected = false, number = 0 }) => (
  <button
    name={number.toString()}
    className={cx(styles.cell, { [styles.selected]: selected })}
  >
    {selected ? 'X' : ''}
  </button>
)

export default Cell
