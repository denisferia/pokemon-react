import React from 'react';
import './Pokemon.scss'

const Pokemon = ({details, released}) => {

  const {abilities, sprites, weight, height, name, types, id} = details;

  const handleClose = () => {
    released(false);
  }

  return (
      <div className={`pk-full ${name}`}>
        <h3>{name}</h3>
        <div className={`pk-detail-list`}>
          <ul>
            <li className={`pk-id`}>
              <h4>ID</h4>
              <p>{id}</p>
            </li>
            <li className={`pk-width`}>
              <h4>Weight</h4>
              <p>{weight}</p>
            </li>
            <li className={`pk-height`}>
              <h4>Height</h4>
              <p>{height}</p>
            </li>
            <li className={`pk-type`}>
              <h4>Type</h4>
              <ul>
              {types.map( (slot,i) =>{
                return(
                  <li key={i}>
                    <p>{slot.type.name}</p>
                  </li>)
              })}
              </ul>
            </li>
            <li className={`pk-abilities`}>
              <h4>Abilities</h4>
              <ul>
              {abilities.map( (ab,i) =>{
                return(
                  <li key={i}>
                    <p>{ab.ability.name}</p>
                  </li>)
              })}
              </ul>
            </li>
          </ul>
        </div>
        <div className={`pk-img`}>
          <img alt={name} title={name} src={sprites.front_shiny} />
          <img alt={name} title={name} src={sprites.back_shiny} />
        </div>
        <div className={`pk-close`} onClick={handleClose}/>
      </div>
  )
}

export default Pokemon;
