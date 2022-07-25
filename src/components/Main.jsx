import Card  from "./Card";
import Pokeinfo from "./Pokeinfo";
import axios from "axios";
import React, { useEffect} from "react";
import { useState } from "react";
import { Modal, ModalBody } from 'reactstrap';

const Main=(args)=>{
    
    const [pokeData,setPokeData]=useState([]);
    const [loading,setLoading]=useState(true);
    const [url,setUrl]=useState("https://pokeapi.co/api/v2/pokemon/")
    const [nextUrl,setNextUrl]=useState();
    const [prevUrl,setPrevUrl]=useState();
    const [pokeDex,setPokeDex]=useState();
    const [search, setSearch]=useState("");
    const [modal, setModal] = useState(false);
    
    /*<-------- Pages and loanding Variable -------->*/
    const pokeFunction=async()=>{
        setLoading(true)
        const res=await axios.get(url);
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        getPokemon(res.data.results);
        setLoading(false);
    }

    useEffect(()=>{
        pokeFunction();
    },[url])

    /*<-------- Get the pokemon Varible -------->*/ 
    const getPokemon=async(res)=>{
       res.map(async(item)=>{
          const result=await axios.get(item.url)
          setPokeData(state=>{
              state=[...state,result.data]
              state.sort((a,b)=>a.id>b.id?1:-1)
              return state;
          })
       })   
    }

    /* <----- Search Input Variable ------> */
    const searcher = (e)=>{
        setSearch(e.target.value)
    }

    const results = !search ? pokeData:pokeData.filter((data)=>data.name.toLowerCase().includes
    (search.toLocaleLowerCase()));

    /*<-------- Modal Function -------->*/
    const toggle = () => setModal(!modal);
    
    /* <-------- HTML that Returns all the app  --------> */
    return(
        <>
            <h1 className="title">Welcome to your personal Pokemon Index:</h1>
            <div className="cnt">
                <div className="inputCnt">
                    <input value={search} onChange={searcher}
                    type="text" placeholder="Search your pokemon" className="searcher"/>
                </div>
                <div>
                    <div className="btn-cnt">
                            {  prevUrl && <button onClick={()=>{
                                setPokeData([])
                            setUrl(prevUrl) 
                            }}>Previous</button>}

                            { nextUrl && <button onClick={()=>{
                                setPokeData([])
                                setUrl(nextUrl)
                            }}>Next</button>}
                    </div>
                </div>  
                <span  className="left-content" onClick={toggle}>
                        <Card pokemon={pokeData} loading={loading} infoPokemon={poke=>setPokeDex(poke)} result={results} />
                </span>
            </div>

        <footer>Copyright @2022</footer>

        <div className="modalCnt">
            <Modal isOpen={modal} toggle={toggle} {...args}>
                <ModalBody>                
                    <div>
                        <Pokeinfo data={pokeDex}/>
                    </div>
                </ModalBody>
                <div className="btn-cnt modalBtn">
                    <button onClick={toggle}>Cancel</button>
                </div>
            </Modal>
        </div>         
        </>
    )
}
export default Main;