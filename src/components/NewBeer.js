import React, { Component } from 'react'

export default class NewBeer extends Component {

   

    render() {
        return (
            <div>
                <h1>Add Beer</h1>
                <form onSubmit={this.props.onAdd}>
                    <input name ="name" type="text" placeholder="Enter Name"></input>
                    <input name ="description" type="text" placeholder="Enter Description"></input>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
