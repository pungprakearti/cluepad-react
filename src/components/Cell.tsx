import cx from 'classnames'
import styles from './Cell.module.scss'

type Props = {
  selected: boolean
  name: string
  handleClick: React.MouseEventHandler<HTMLButtonElement>
}

const Cell: React.FC<Props> = ({ selected = false, name, handleClick }) => (
  <button
    name={name.toString()}
    className={cx(styles.cell, { [styles.selected]: selected })}
    onClick={handleClick}
  >
    {selected ? '✓' : ''}
  </button>
)

export default Cell
