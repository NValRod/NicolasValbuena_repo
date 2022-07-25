import React from "react";


/*<-------- Card that Shows in the left -------->*/
const Card = ({ loading,infoPokemon, result}) => {

    return (
        <>
        {
           loading ? <div className="d-flex justify-content-center">
                        <div className="spinner-grow" role="status">
                        <span className="visually-hidden">Loading...</span>
                        </div>
                    </div> :
                result.map((item)=>{                    
                    return (
                        <>
                            <div className="card" onClick={()=>infoPokemon(item)}>
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

