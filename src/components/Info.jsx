import { useSelector } from "react-redux";
const Info = () =>{
    const cart = useSelector(data=> data.cart )

    const quantity = cart.reduce((acc,cur)=> acc + +cur.quantity,0)



    return(
        <div>
          Total is : <span className="bg-red-400">
          {quantity}
            </span>
        </div>
    )
}
export default Info ;