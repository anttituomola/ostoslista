import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import recipeSlice from './data/recipeSlice'

export function makeStore() {
  return configureStore({
    reducer: { recipes: recipeSlice },
  })
}

const store = makeStore()

export const wrapper = createWrapper(() => store) 
export default store    