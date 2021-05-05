import React from 'react';
import { Link, useParams } from 'react-router-dom';
import photo1 from '../images/photo1.jpeg';
import photo2 from '../images/photo2.jpeg';
import '../scss/galery.scss';

function Galery(){
    return(


      <div className= "galery">
        <h1 className= "sitetitle">Galeria</h1>

        <section className = "photos">
          <img src = {photo1} className = "galeryPhoto"></img>
          <img src = {photo2} className = "galeryPhoto"></img>
        </section>
      </div>
    )
  }

  export default Galery;