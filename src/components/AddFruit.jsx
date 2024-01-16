import { addFruit, clearAll } from "../redux/action"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
const AddFruit = () =>{

    const [myFruit,setMyFruit] = useState({id:0,fruit:'',quantity:0})

    const dispatch = useDispatch();

    useEffect(()=>{
        console.log(">>>>>>>>",addFruit)
        console.log(myFruit)
    })

    const handleChange = (e) =>{
        const {value,name} = e.target
            setMyFruit( {...myFruit,[name]:value})
    }


        return(
            <div className="m-5 p-3 w-96 h-56 border-yellow-500 bg-green-300">

                <h1>Add Fruits to Cart</h1>

                    <label className="inline border-indigo-300 bg-green-700 w-20 text-base font-normal text-left">ID :</label>
                    <input className="rounded mt-3" name="id" type="number" onChange={handleChange}/><br/>

                    <label className="inline border-indigo-300 bg-green-700 w-20 text-base font-normal text-left" >FRUIT :</label>
                    <input className="rounded mt-3"  name="fruit" onChange={handleChange}/><br/>

                    <label className="inline border-indigo-300 bg-green-700 w-20 text-base font-normal text-left" >QUANTITY :</label>
                    <input className="rounded mt-3"  name="quantity" type="number" onChange={handleChange}/><br/>

                <button className="bg-blue-700 mt-3" onClick={()=>dispatch(addFruit(myFruit.id,myFruit.fruit,myFruit.quantity))}>SUBMIT</button>
                <button className="bg-red-700 mt-3 mx-3 rounded-md" onClick={()=>dispatch(clearAll())}>Clear</button>

            </div>
        )
}



export default AddFruit;