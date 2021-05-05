// import './Foodbox.css'
import React from 'react';
import "bulma/css/bulma.css"


const Foodbox = ( {food} ) => {

    return (
       <div className="box">
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src= {food.image} alt={food.name} />
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{food.name}</strong> <br />
          <small>{food.calories} cal</small>
        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field has-addons">
        <div className="control">
          <input className="input" type="number" defaultValue={food.quantity +1} />
        </div>
        <div className="control">
          <button className="button is-info">
            +
          </button>
        </div>
      </div>
    </div>
  </article>
</div>
    )
}

export default Foodbox