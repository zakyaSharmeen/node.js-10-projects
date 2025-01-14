import React from 'react'
import data from '../restApi.json';


function Menu() {

    const dishValue = data.data.dishes;

  
    // console.log(data);
    // console.log(dishValue);
    
  return (
    <section className='menu' id='menu'>
        <div className="container">
            <div className="heading_section">
                <h1 className="heading">POPULAR DISHES</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, iusto dolorem! Voluptatibus ipsum nam mollitia architecto. Soluta pariatur eius et recusandae veritatis. Quasi, et molestias!</p>
            </div>
            <div className="dishes_container">
                {
                    dishValue.map((elem)=>{
                        return(
                            <div className="card">
                                <img src={elem.image} alt="" />
                                <h3>{elem.title}</h3>
                                <button>{elem.category}</button>
                            </div>
                        )
                    })
                }
            </div>
            
        </div>
      </section>
  )
}

export default Menu