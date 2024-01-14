import './App.css'
// import { ADD_FRUIT } from './redux/actionType'
import {legacy_createStore as createStore} from "redux"
import { fruitReducer } from './redux/reducer'
import {Provider} from 'react-redux'


// const myFruitsList = [
//   {fruitName: '🥥', id: 1},
//   {fruitName: '🫐', id: 2},
//   {fruitName: '🍉', id: 3},
//   {fruitName: '🍐', id: 4},
//   {fruitName: '🍒', id: 5},
//   {fruitName: '🍑', id: 6},
// ]


// Store Creation

const store = createStore(fruitReducer);

function App() {

  return (

  <Provider store={store}>
      <>
          <h1>Hello from REDUX!!</h1>
      </>
  </Provider>
  )
}

export default App
