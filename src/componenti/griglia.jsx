import React from 'react'
import { Grid, Image, Button } from 'semantic-ui-react'
import img from '../immagini/maglietta.png'
import prodotto from './prodotto.jsx'
import { Link, Route, Switch } from 'react-router-dom';

const Griglia = () => (
    <Grid celled>
    <Grid.Row>
      <Grid.Column width={13}>
      <h2>maglietta super figa</h2>
      <Image src={img} onClick={""} />
      <Link to="/prodotto">Category</Link>
        <p>"descrizione super accattivante"</p>
      </Grid.Column>
      <Grid.Column width={13}>
      <h2>maglietta super figa2</h2>
      <Image src={img}/>
        <p>"descrizione super accattivante2"</p>
      </Grid.Column>
      <Grid.Column width={13}>
      <h2>maglietta super figa3</h2>
      <Image src={img}/>
        <p>"descrizione super accattivante3"</p>
      </Grid.Column>
    </Grid.Row>
    <Route path="/prodotto" component={prodotto}/>
  </Grid>
  
)

export default Griglia