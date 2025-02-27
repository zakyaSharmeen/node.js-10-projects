import { useState } from "react"
import itemData from "../data"

function ItemsDisplay() {
  const [displayItem, setDisplayItem] = useState(itemData)
  console.log("this is ImageTrackList", displayItem);
  
  return (
    <div className="itemSection">
      {
        displayItem.map((item) => {
          return(
           <>
            <div className="gallery" key={item.id}>
              <img src={item.item_img} alt="images" />
              
              </div>
           </>
          )
        })
      }
    </div>
  )
}

export default ItemsDisplay