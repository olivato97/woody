import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import img from '../immagini/maglietta.png'

const prodotto = () => (
    <Grid celled>
          <h2>maglietta super figa</h2>
      <Image src={img} link=""/>
        <p>"descrizzione super accattivante"</p>

  </Grid>
)

export default prodotto