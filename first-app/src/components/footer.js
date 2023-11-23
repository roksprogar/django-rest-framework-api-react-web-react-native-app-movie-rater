import React, { Component } from 'react'
import { CtxConsumer } from '..'

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
            <CtxConsumer>
                { (context) => (
                    <div>
                    {context.animals.map(animal => {
                        return (
                            <div key={animal}>
                                <h1>{animal}</h1>
                                <h1>{animal}</h1>
                            </div>
                        )
                    })}
                    </div>
                )}
            </CtxConsumer>
        )
    }
}

export default Footer