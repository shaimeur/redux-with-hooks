import './App.css'
// import { ADD_FRUIT } from './redux/actionType'

import Cart from './components/Cart'
// import {useDispatch,useSelector} from "react-redux"

// const cart  = useSelector(state => state.cart)

// const dispatch = useDispatch()

// const myFruitsList = [
//   {fruitName: '🥥', id: 1},
//   {fruitName: '🫐', id: 2},
//   {fruitName: '🍉', id: 3},
//   {fruitName: '🍐', id: 4},
//   {fruitName: '🍒', id: 5},
//   {fruitName: '🍑', id: 6},
// ]


// Store Creation


function App() {

  return (

      <>

          <h1>Hello from REDUX!!</h1>
          <Cart/>
      </>

  )
}

export default App
