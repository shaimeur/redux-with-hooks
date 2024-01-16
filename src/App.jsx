import './App.css'

import Cart from './components/Cart'
import AddFruit from './components/AddFruit'


// const myFruitsList = [
//   {fruitName: '🥥', id: 1},
//   {fruitName: '🫐', id: 2},
//   {fruitName: '🍉', id: 3},
//   {fruitName: '🍐', id: 4},
//   {fruitName: '🍒', id: 5},
//   {fruitName: '🍑', id: 6},
// ]




function App() {

  return (

      <>

          <h1>Hello from REDUX!!</h1>
          <Cart/>
          <AddFruit/>
      </>

  )
}

export default App
