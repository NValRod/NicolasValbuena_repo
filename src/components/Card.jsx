import React from "react";
import Main from "./Main";

const Card = ({ pokemon, loading,infoPokemon, result}) => {

    return (
        <>

        {
            loading ? <h1>Loading...</h1> :
                result.map(item=>{                    
                    return (
                        <>
                            <div className="card" key={item.id} onClick={()=>infoPokemon(item)}>
                                <img src={item.sprites.front_default} alt="Imagen Pokemon"/>
                                <h1># {item.id}</h1>
                                <h2>{item.name}</h2>
                            </div>
                        </>)
                    })
        }

        </>
    )
}
export default Card;