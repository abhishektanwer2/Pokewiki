import React from 'react'
import { Progress } from 'reactstrap';

const Progressbar = (props) => {
  const { stat: { base_stat } } = props
  let color = ''
  if (base_stat < 20) {
    color = 'primary'
  } else if (base_stat < 50) {
    color = 'info'
  } else if (base_stat < 75) {
    color = 'warning'
  } else {
    color = 'danger'
  }
  return <Progress value={base_stat} color={color} max={100} className="mb-3"></Progress>
}

export default Progressbar