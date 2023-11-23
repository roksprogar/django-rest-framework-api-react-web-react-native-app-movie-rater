import React, { Component } from 'react'

class Footer extends Component {
    changed(){
        console.log('first')
    }
    render() {
        return (
            <>
                <h2 onClick={this.props.createAlert}>
                    {this.props.trademark}
                </h2>
                <input onChange={this.changed} type='text' />
            </>
        )
    }
}

export default Footer