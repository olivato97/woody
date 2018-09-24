import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
// import immagine from '../../immagini/download'
// import felpa from '../immagini/download.png'

const Griglia = () => (
    <Grid celled>
    <Grid.Row>
      <Grid.Column width={13}>
        <Image src="../../immagini/download"/>
        <p>"ciao"</p>
      </Grid.Column>
      <Grid.Column width={13}>
        <Image src='../../immagini/download.jpg' />
        <p>"ciao"</p>
      </Grid.Column>
      <Grid.Column width={13}>
        <Image src='../../immagini/download.jpg' />
        <p>"ciao"</p>
      </Grid.Column>
    </Grid.Row>

  </Grid>
)

export default Griglia