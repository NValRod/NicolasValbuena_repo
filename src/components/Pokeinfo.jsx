import React from "react";

/*<-------- Card tha shows the info on the right -------->*/
const Pokeinfo = ({ data }) => {
    return (
        <>
        {
            (!data) ? "" : (
                <>
                
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt="" className="pokeImgOne"/>
                    <div className="nameCnt">
                        <h2>#{data.id}</h2>
                        <h1>{data.name}</h1>
                    </div>
                    
                    <div className="BaseCnt"> 
                        <div className="infCnt">
                            <h2>Tipo:</h2>
                                    {
                                        data.types.map(poke=>{
                                            return(
                                                <>
                                                <span>{poke.type.name}&nbsp;</span> 
                                                </>
                                                
                                            )
                                        })
                                    }
                        </div>    

                        <div className="infCnt">
                            <h2>Peso:</h2>
                            <h4>{data.weight}Kg</h4>
                        </div>  

                        <div className="infCnt">
                        <h2>Sprites:</h2>
                            <div className="imgCnt">
                                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${data.id}.png`} alt="Pokemon Sprite" className="imgPoke"/>
                                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${data.id}.png`} alt="Pokemon Sprite"  className="imgPoke"/>
                                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`} alt="Pokemon Sprite" className="imgPoke"/>                            
                                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${data.id}.png`} alt="Pokemon Sprite" className="imgPoke"/>
                            </div>
                        </div>
                        <div>
                                <h2>Movimientos:</h2>
                                <div className="infCnt">
                                    {
                                        data.moves.slice(0,10).map(poke=>{
                                            return(
                                                <>
                                                    <span>
                                                        {poke.move.name},&nbsp;
                                                    </span>
                                                </>
                                            )
                                        })
                                    }
                                </div>
                        </div>
                    </div>
                </>
            )
        }

        </>
    )
    
}


export default Pokeinfo