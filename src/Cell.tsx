import React = require('react')

type Props = {
  type: 'button' | 'left-trans' | 'left-title' | 'left-item'
}

const Cell: React.FC<Props> = ({ type = 'button' }) => {
  return <div></div>
}

export default Cell
