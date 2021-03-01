import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Beers extends Component {
    render() {
        const {beers} = this.props
        console.log(beers)
        return (
            <div>
                <h1>All Beers</h1>
                {
                    beers.map((beer) => {
                    return <Link to={`/${beer._id}`}>
                    <div key={beer._id}>
                        {/* <img src={require('beer.image_url')}/> */}
                        <h3>{beer.name}</h3> 
                        <p>{beer.tagline} </p> 
                        <i>{beer.contributed_by}</i>
                    </div>
                    </Link>
                    })
                }
            </div>
        )
    }
}
