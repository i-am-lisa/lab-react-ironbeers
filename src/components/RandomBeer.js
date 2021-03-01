import React, { Component } from 'react'
import axios from 'axios'

export default class RandomBeer extends Component {
    state = {
        beer: {}
    }

    componentDidMount(){
        console.log(this.props) 
     
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
          .then((response) => {
            this.setState({ beer: response.data })
          })
          .catch(() => {
            console.log('Detail fecth failed')
          })
      }

    render() {

        const {beer} = this.state

        return (
            <div>
                <h4>Random Beer</h4>
                <div>{beer.name}</div>
                <div>{beer.tagline}</div>
            </div>
        )
    }
}
