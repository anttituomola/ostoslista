import styles from "/styles/Portion.module.css"

const Portion = (props) => {

  return (
    <div className={styles.button} onClick={() => props.selectPortion(props.portion)} >
      <h3>{props.portion.name}</h3>
      <small>Click to change</small>
    </div>
  )
}

export default Portion