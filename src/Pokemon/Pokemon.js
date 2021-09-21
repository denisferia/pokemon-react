import React from 'react';
import './Pokemon.scss'

const Pokemon = ({details}) => {

  const {abilities, sprites, weight, height, name, types, id} = details;

  return (
      <div className={`pk-full ${name}`}>
        <h3>{name}</h3>
        <div className={`pk-img`}>
          <img alt={name} title={name} src={sprites.front_default} />
          <img alt={name} title={name} src={sprites.back_default} />
        </div>
        <div className={`pk-detail-list`}>
          <ul>
            <li className={`pk-width`}>
              <h4>Weight</h4>
              <p>{weight}</p>
            </li>
            <li className={`pk-height`}>
              <h4>Height</h4>
              <p>{height}</p>
            </li>
            <li className={`pk-id`}>
              <h4>ID</h4>
              <p>{id}</p>
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
        <div className={`pk-evolution`}>

        </div>
      </div>
  )
}

export default Pokemon;
