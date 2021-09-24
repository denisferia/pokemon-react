import React, {useState, useEffect} from 'react';
import Pokemon from "../Pokemon/Pokemon";
import './PokeBall.scss'

const PokeBall = ({url, name}) => {

  console.log(url)

  const [details, setDetails] = useState(null);
  const [releasePokemon, setReleasedPk] = useState(false);
  const [errorMsg, setError] = useState(false);

  useEffect(() => {

    fetch(url)
      .then(response => response.json())
      .then(rawDetails => {
        setDetails(rawDetails);
      })

      .catch( (error)=>{
        console.log("error", error);
        setError(true);
      })

    }, [url]);

  const handleClick = () => {
    releasePokemon ? setReleasedPk(false) : setReleasedPk(true);
  }

  return (
    <div className="pokeBall-wrapper">
      {errorMsg && <div className={`error-msg`}><h3>An error has occurred. Please reload the page.</h3></div>}
      {details &&
        <div className={`pokeBall ${name}`}>
          <div className={`pk-glimpse ${name}`} onClick={()=> handleClick()}>
            <h3>{name}</h3>
            <div className={`pokemon-img`}>
              <img src={details.sprites.front_default} alt={name} title={name} />
            </div>
          </div>
          {releasePokemon &&
            <div className={`pk-released`}>
              <Pokemon details={details} />
              <div className={`pokeBall-shadow`} onClick={()=> setReleasedPk(false)}/>
            </div>
          }
        </div>
      }
    </div>
  )
}

export default PokeBall;
