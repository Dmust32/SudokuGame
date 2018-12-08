import React, {Component} from 'react'

class InputSquare extends Component {
    state = {
        squareValue: this.props.squareValue
    }

    updateValue = (value) => {
        this.setState({squareValue: value})
        this.props.updateBoard(value, this.props.position)
    }



    render(){
        return(
            <div className='input-container'>
                <input 
                    value = {this.state.squareValue}
                    onChange = {(e) => this.updateValue(e.target.value)}
                ></input>
                
            </div>
        )
    }
}

export default InputSquare