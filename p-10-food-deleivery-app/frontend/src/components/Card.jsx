import { useEffect, useRef, useState } from "react"
import { useDispatchCart, useCart } from "./ContextReducer"
// import { data } from "react-router-dom"
function Card(props) {

let options = props.options
let priceOptions = Object.keys(options)

let dispatch = useDispatchCart()
let data=useCart()

const priceRef = useRef()


const [qty,setQty] = useState(1)
const[size, setSize] = useState("")


const handleAddToCart= async ()=>{
  // to update
  let food = []
  for(const item of data){
    if(item.id === props.foodItem._id){
      food =item
      break
    }
  }
 

  if(food.length > 0){
    // if(!food == []){

    if(food.size === size){
      await dispatch({
        type: "UPDATE",
        id: props.foodItem._id,
        price:finalPrice,
        qty:qty,
      }) 
      return  
     }else if(food.size !== size){
      await dispatch({
        type: "ADD",
          id: props.foodItem._id,
          name:props.foodItem.name,
          price:finalPrice,
          qty:qty,
          size:size
      }) 
      return  


     }
     return
    }
     await dispatch({
  type: "ADD",
  id: props.foodItem._id,
  name:props.foodItem.name,
  price:finalPrice,
  qty:qty,
  size:size
})
console.log(data);
  








}

let finalPrice = qty* parseInt(options[size])
useEffect(()=>{
  setSize(priceRef.current.value)
},[])

  return (
    <div>
         <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
         {/* <img className="card-img-top"  src="/p1.jpg" alt="Card image cap"/> */}
         <img className="card-img-top" style={{height:"120px", objectFit: "fill"}} src={props.foodItem.img} alt="Card image cap"/>

     


        <div className="card-body">
          <h5 className="card-title">{props.foodItem.name}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the content.
          </p>
          <div className="container w-100 text-white">
            <select className="m-2 h-100 text-white  bg-success rounded" onChange={(e)=> setQty(e.target.value)}>
                {
                    Array.from(Array(6), (e, i) =>{
                        return(
                            <option key={i+1} value={i+1}>{i+1}</option>
                        )
                    })
                }
            </select>
            <select className="m-2 h-100 text-white bg-success rounded" ref={priceRef} onChange={(e)=> setSize(e.target.value)}>
                {/* <option value="half">Half</option>
                <option value="full">Full</option> */}


                {
                  priceOptions.map((data) =>{
                    return (<option key={data} value={data}>{data}</option>)

                  }
                  )
                }

            </select>

            <div className="d-inline m-2 p-1 text-white bg-success rounded">
                {/* TotalPrice
                 */}
                Rs. {finalPrice}/-
            </div>
          </div>
          <hr />
          <button className="btn btn-success text-white justify-content-center" onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Card

