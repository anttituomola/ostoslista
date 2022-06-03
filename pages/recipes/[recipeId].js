
const portion = (props) => {
  console.log("Props from recipe: ", props)
  return (
    <div>
      <h1>{props.recipeName}</h1>
      <h3>ID: {props.recipeId}</h3>
    </div>
  )
}

export default portion

export async function getServerSideProps(context) {
  console.log("context: ", context.query)
  return {
    props: {
      recipeName: context.query.recipeName,
      recipeId: context.query.id,
      recipeSeasons: context.query.recipeSeasons,
    }
  }
}