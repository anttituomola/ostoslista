import {v4 as uuid} from 'uuid'
import dayjs from 'dayjs'
import Day from './Day'

const PortionPlaceholders = (props) => {
    const { numberOfDiners, numberOfDays, portionsPerDay, currentPlan } = props

  
  // Divide portions into days
  const chunk = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    )
     
  const chunks = chunk(currentPlan, portionsPerDay)
  console.log(chunks)

  const days = Array.from({ length: numberOfDays }, (x, i) => {
    return <Day key={uuid()} portions={chunks[i]} weekday={dayjs().add(i, "day").format("dddd")} />
  })

  return (
    <div id="dayContainer">
      {days}
    </div>
  )
}

export default PortionPlaceholders