import React from 'react'
import data from '../restApi.json';


function Qualities() {
  
  const Quantvalue = data.data.ourQualities

  
  // console.log(data);
  // console.log(Quantvalue);
  
  

  return (
    <section className='qualities' id='qualities'>
          <div className="container">
            {
              Quantvalue.map(element=>{
                return(
                  <div className='card' key={element.id}>
                      <img src={element.image} alt={element.title} />
                      <p className='title'>{element.title}</p>
                      <p className='description'>{element.description}</p>
                  </div>
                )
              })
            }
          </div>
        </section>
  )
}

export default Qualities