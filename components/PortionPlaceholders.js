import { v4 as uuid } from 'uuid'
import dayjs from 'dayjs'
import Day from './Day'
import { useState } from "react"
import Modal from "./Modal"

const PortionPlaceholders = (props) => {
  const { numberOfDiners, numberOfDays, portionsPerDay, currentPlan } = props
  const [showModal, setModal] = useState(false)
  const [modalPortion, setModalPortion] = useState({})

  const closeModal = () => {
    setModal(false)
  }

  const selectPortion = (portion) => {
    setModal(true)
    setModalPortion(portion)
  }


  // Divide portions into days
  const chunk = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) => 
      arr.slice(i * size, i * size + size)
    )

  const chunks = chunk(currentPlan, portionsPerDay)
  console.log(chunks)

  const days = Array.from({ length: numberOfDays }, (x, i) => {
    return <Day key={uuid()} portions={chunks[i]} weekday={dayjs().add(i, "day").format("dddd")}
      selectPortion={selectPortion}
    />
  })

  return (
    <div id="dayContainer">
      {days}
      <Modal
        showModal={showModal}
        closeModal={closeModal}
        selectPortion={selectPortion}
        portion={modalPortion}
      />
    </div>
  )
}

export default PortionPlaceholders