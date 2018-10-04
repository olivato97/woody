import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import img from '../immagini/maglietta.png'
import { Link} from 'react-router-dom';

const Prodotto1 ="/Prodotto1";

const Griglia = () => (

  <Grid celled>
    <Grid.Row>
      <Grid.Column width={13}>
        <h2>maglietta super figa</h2>
        <Link to={Prodotto1}>
        <Image src={img} />
        </Link>
        <p>"descrizione super accattivante"</p>
      </Grid.Column>
      <Grid.Column width={13}>
        <h2>maglietta super figa2</h2>
        <Link to="/Prodotto2">
        <Image src={img} />
        </Link>
        <p>"descrizione super accattivante2"</p>
      </Grid.Column>
      <Grid.Column width={13}>
        <h2>maglietta super figa3</h2>
        <Link to="/Prodotto3">
        <Image src={img} />
        </Link>
        <p>"descrizione super accattivante3"</p>
      </Grid.Column>
    </Grid.Row>
  </Grid>

)

export default Griglia