import React, { Component } from 'react'
import axios from 'axios'

export default class BeerDetail extends Component {
    state = {
        beer: {}
    }

    componentDidMount(){
        console.log(this.props) 
     
       let beerId = this.props.match.params.beerId
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
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
                <h4>Details are:</h4>
                <div>{beer.name}</div>
                <div>{beer.tagline}</div>
            </div>
        )
    }
}
