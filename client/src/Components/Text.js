import React from 'react';

class Text extends React.Component{
    constructor(){
        super()

    }

    render(){
        return(
            <>
                <p>Name: {this.props.name}</p>
                <p>Age: {this.props.age}</p>
            </>
        )
    }
}

export default Text;