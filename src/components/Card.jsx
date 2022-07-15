import React from "react";

const Card = ({ pokemon, loading,infoPokemon}) => {

    return (
        <>
        {
            loading ? <h1>Loading...</h1> :
                pokemon.map(item=>{                    
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