import React, { Component } from 'react'

class Footer extends Component {
    state = {
        name: '',
        age: 35,
        isLogin: true
    }

    componentDidMount() {
        this.setState({name: 'myName'})
    }

    changed = evt => {
        this.setState({name: evt.target.value})
        console.log(this.state.name)
    }

    render() {
        return (
            <>
                { this.state.isLogin ? (
                    <>
                        <h2 onClick={this.props.createAlert}>
                            {this.props.trademark}
                        </h2>
                        <input
                            value={this.state.name}
                            onChange={this.changed} type='text'
                        />
                    </>
                ) : (
                    <>
                        <h2>You can't see this content</h2>
                        <h2>You must log in</h2>
                        <input
                            value={this.state.name}
                            onChange={this.changed} type='text'
                        />
                    </>
                )}
            </>
        )
    }
}

export default Footer