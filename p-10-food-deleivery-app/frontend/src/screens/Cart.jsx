import { useDispatchCart, useCart } from "../components/ContextReducer"



export default function Cart() {
    let dispatch = useDispatchCart()
    let data=useCart()
    
    if(data.length === 0){
        return (
            <div>
                <div className="m-5 w-100 text-center text-white fs-3">
                    The cart is empty
                </div>
            </div>
        )
    }


    const handelCHeckOut = async()=>{
      let userEmail = localStorage.getItem("userEmail")
      let response = await fetch('http://localhost:5000/api/orderData',{
        method: 'POST',
        headers: {
            "Content-Type": "application/json",

        },
        body: JSON.stringify({
          order_data: data,
             email: userEmail,
             order_date: new Date().toDateString()
        })

      });
      console.log("order response", response);
      
      if(response.status===200){
        dispatch({type: "DROP"})
      }
      

    }





    
    let totalPrice = data.reduce((total, food) => {
        return total + food.price;
    }, 0);
    
  

  

  return (
    <div>

      <div className='container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md' >
        <table className='table table-hover '>
          <thead className=' text-success fs-4'>
            <tr >
              <th scope='col' className="text-success">#</th>
              <th scope='col' className="text-success">Name</th>
              <th scope='col' className="text-success">Quantity</th>
              <th scope='col' className="text-success">Option</th>
              <th scope='col' className="text-success">Amount</th>
              <th scope='col' className="text-success"></th>
            </tr>
          </thead>
          {/* <hr className="text-success"/> */}
          <tbody>
            {data.map((food, index) => (
              <tr key={index}>
                <th scope='row' >{index + 1}</th>
                <td >{food.name}</td>
                <td>{food.qty}</td>
                <td>{food.size}</td>
                <td>{food.price}</td>
                <td><button className="btn bg-danger text-white" onClick={()=> {
                    dispatch({type:"REMOVE", 
                        index: index
                    })
                }}>DELETE</button></td>
                </tr>
            ))}
          </tbody>
        </table>
        <div><h1 className='fs-2 text-white'>Total Price:{totalPrice}/-</h1></div>
        <div>
          <button className='btn bg-success mt-5 ' onClick={handelCHeckOut}> Check Out </button>
        </div>
      </div>



    </div>
  )
}