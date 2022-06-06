import { useSelector } from "react-redux"
import { useRouter } from "next/router"

const Portion = (props) => {
  const router = useRouter()
  console.log("Router: ", router)
  return (
    <div>
      <h1>Recipe: {router.asPath.id}</h1>
      <h3>ID: {props.recipeId}</h3>
    </div>
  )
}

export default Portion

