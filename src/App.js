import React, { Component } from 'react'
import {Route, Switch, withRouter} from 'react-router-dom';
import axios from 'axios';
import MyNav from './components/MyNav';
import Beers from './components/Beers';
import NewBeer from './components/NewBeer';
import RandomBeer from './components/RandomBeer';
import Home from './components/Home';
import BeerDetail from './components/BeerDetail';




class App extends Component {

  state = {
    beers: []
  }

  componentDidMount(){
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        console.log('rasponse' + response.data)
        this.setState({ 
          beers: [...response.data]
        })
      })
      .catch(() => {
        console.log('Fetching failed')
      })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let name = event.target.name.value
    let description = event.target.description.value

    axios.post(`https://ih-beers-api2.herokuapp.com/beers`, {
      name: name,
      description: description,
    })
      .then((response) => {
        console.log(response.data)
          this.setState({
            beers: [response.data, ...this.state.beers]
          }, () => {
            this.props.history.push('/Beers')
          })

      })
      .catch((err) => {
        console.log('Create failed', err)
      })
 }


  render() {
    const {beers} = this.state

    return (
      <div>
      <MyNav/>

      <h1>Iron Beers</h1>
      <Switch>
      <Route exact path="/" render={() => {
                return <Home />
      }} />
      <Route path="/Beers" render={() => {
                return <Beers beers={beers}/>
      }} />
      <Route path="/RandomBeer" render={() => {
                return <RandomBeer />
      }} />
      <Route path="/NewBeer" render={() => {
                return <NewBeer onAdd={this.handleSubmit} />
      }} />
      <Route  path="/:beerId" render={(routeProps) => {
                return <BeerDetail {...routeProps}/>
            }} />
      </Switch>
      </div>
    )
  }
}

export default withRouter(App)
