import { useSelector,useDispatch } from "react-redux"
import { decrementByOne, incrementByOne,deleteFruit } from "../redux/action";
const Cart = () => {

    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    // const increment = (id) => {
    // }
    // const decrement = (id) => {
    // }

    return (

    <div className="flex justify-center">

        <div className=" m-5 p-2.5 w-96 border-green-400 rounded bg-gray-600">
            <h1>My Cart</h1>
                <div className="flex-auto flex-col">

                    {cart.map((item)=>(
                        <div key={item.id} className="w-52 mt-1 p-1 border-orange-400 bg-red-400 rounded">
                            <span className="inline-block w-16 border-indigo-900">id: {item.id} Product:{item.fruit} Quantity : {item.quantity}</span>


                            <button className="bg-green-500 w-4 mx-3 " onClick={()=>dispatch(incrementByOne(item.id))}>+</button>

                            <button className="bg-red-600 w-4 mx-3" onClick={()=>dispatch(decrementByOne(item.id)) }>-</button>

                            <button className="bg-red-600 w-4 mx-3" onClick={()=>dispatch(deleteFruit(item.id)) }>x</button>

                        </div>
                    ))}

                </div>


        </div>

    </div>
    )
}


export default Cart