import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { API_URL } from "../api"
import TopBar from "./TopBar"


function ProductMenu() {
    const [products, setProducts] = useState([])
    const {firmId, firmName} = useParams()

    const productHandler = async()=>{
        try{
            const response = await fetch(`${API_URL}/product/${firmId}/products`)
            const newProductData = await response.json()
            setProducts(newProductData.products)
            console.log(newProductData.products);
            


        }catch(err){
            alert("api fetching failed")
            console.log(err)
        }
    }

    useEffect(()=>{
        productHandler()
    },[firmId])



  return (
    // <section className="productSection">
    //     {
    //         products.map((item)=>{
                
    //             return(
    //                 <>
                    
    //             {item.productName}
    //             <div className="">
    //                 {/* <img src={`${API_URL}/uploads/${item.image}`} alt="images present" /> */}
    //                 <img src= "/assets/item/Poori.jpg" alt={item.firmName} />

    //             </div>

                
    //                 </>
    //             )
    //         })
    //     }

    // </section>
   <>
    <TopBar/>

<section className="productSection">
<h3>{firmName}</h3>
{products.map((item, index) => {
  return (
    <div className="productBox" key={item.index}>
      <div>
        <div><strong>{item.productName}</strong></div>
        <div>₹{item.price}</div>
        <div>{item.description}</div>
      </div>
      <div className="productGroup">
        <img src={`${API_URL}/uploads/${item.image}`} />
        <div className="addButton">ADD</div>
      </div>
    </div>
  );
})}
</section>
   </>
  )
}

export default ProductMenu


