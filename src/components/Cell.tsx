import cx from 'classnames'
import styles from './Cell.module.scss'

type Props = {
  selected: boolean
  handleClick: React.MouseEventHandler<HTMLButtonElement>
}

const Cell: React.FC<Props> = ({ selected = false, handleClick }) => (
  <button
    className={cx(styles.cell, { [styles.selected]: selected })}
    onClick={handleClick}
  >
    ✓
  </button>
)

export default Cell
