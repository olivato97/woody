import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import img from '../immagini/maglietta.png'
import { Link, Route, Switch } from 'react-router-dom';
const prodotto = () => (
  <div>
  <h2>maglietta super figa</h2>
  <Image src={img} />
  <p>descrizione super accattivante</p>
  <p>Varie info che non ho volgia di inventarmi</p>
  </div>
)

export default prodotto