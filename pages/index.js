
import styles from '../styles/Home.module.css'
import { getAllRecipes } from '../data/apiCalls'

const Home = () => {
  return (
    <div className={styles.container}>
      <h1>Ostoslistageneraattori</h1>
      <button onClick={() => getAllRecipes()}>Get all recipes</button>
    </div>
  )
}

export default Home
