import cx from 'classnames'
import styles from './Cell.module.scss'

type Props = {
  selected: boolean
  name: string
}

const Cell: React.FC<Props> = ({ selected = false, name }) => (
  <button
    name={name.toString()}
    className={cx(styles.cell, { [styles.selected]: selected })}
  >
    {selected ? 'X' : ''}
  </button>
)

export default Cell
