import React, { Component } from 'react';
import './App.css';
import Prodotto from './componenti/prodotto.jsx'
import SingUp from './componenti/SingUp'
import Griglia from './componenti/griglia'
import { Menu, Button } from 'semantic-ui-react'
import { Route, Switch, Link } from 'react-router-dom'


//const Home = () => <div>Home</div>
// const Suore = () => <div>suore</div>
// const Storia = () => <div>storia</div>
// const Galleria = () => <div>Galleria</div>
const NoMatch = () => <div>404 NoMatch</div>
class App extends Component {

  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu>
          <Link to="/">
            <Menu.Item
              name='Home'
              active={activeItem === 'Home'}
              content='Home'
              onClick={this.handleItemClick}
            /></Link>

          <Menu.Menu position='right'>
            <Menu.Item>
            <Link to="/SingUp"><Button primary>Sign Up</Button></Link>
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        <Switch>
          <Route exact path='/' component={Griglia} />
          <Route exact path='/SingUp' component={SingUp} />
          <Route exact path='/:prodotto' component={Prodotto} />
         
          {/* when none of the above match, <NoMatch> will be rendered */}
          <Route component={NoMatch} />
        </Switch>
      </div >
    );
  }
}

export default App;
