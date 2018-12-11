import React, {Component} from 'react'

class InputSquare extends Component {
    state = {
        squareValue: this.props.squareValue
    }

    updateValue = async (value) => {
        this.setState({squareValue: value})
        let row = await this.findRow(this.props.postion)
        this.props.updateBoard(value, this.props.position)

    }




    render(){
        console.log('value', this.state.squareValue)
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