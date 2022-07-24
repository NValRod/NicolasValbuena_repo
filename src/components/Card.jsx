import React from "react";


/*<-------- Card that Shows in the left -------->*/
const Card = ({ loading,infoPokemon, result}) => {

    return (
        <>
        {

           
           loading ? <div class="d-flex justify-content-center">
                        <div class="spinner-grow" role="status">
                        <span class="visually-hidden">Loading...</span>
                        </div>
                    </div> :
                result.map(item=>{                    
                    return (
                        <>
                            <div className="card" key={item.id} onClick={()=>infoPokemon(item)}>
                                <img src={item.sprites.front_default} alt="Imagen Pokemon"/>
                                <h1>Id:{item.id}</h1>
                                <h2>{item.name}</h2>
                            </div>
                        </>)
                    })
        }
        </>
    )

}
export default Card;

