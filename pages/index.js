import prisma from "../prisma/prisma"
import styles from '../styles/Home.module.css'
import { getRecipes} from '../data/getRecipes'

const Home = (props) => {
  console.log(props)
  return (
    <div className={styles.container}>
      <h1>Ostoslistageneraattori</h1>
    </div>
  )
}

export default Home

export async function getServerSideProps() {
  let recipes = await getRecipes(prisma)
  recipes = JSON.parse( JSON.stringify(recipes) )
  return {
    props: {
      recipes
    }
  }
}
 