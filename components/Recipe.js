import { useRouter } from "next/router"

const Recipe = ({ recipe }) => {
    const router = useRouter()
  return (
    <h2 onClick={() => router.push(`/recipes/${recipe.id}`)}>{recipe.name}</h2>
  )
}

export default Recipe