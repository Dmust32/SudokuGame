import React, {Component} from 'react'
import {connect} from 'react-redux'

class InputSquare extends Component {
    state = {
        squareValue: this.props.squareValue
    }

    updateValue = (value) => {
        this.setState({squareValue: value})
    }




    render(){
        return(
            <div className='input-container'>
                <div className='picker-cube' onClick={()=>this.updateValue(this.props.selectedValue)}>
                    {this.state.squareValue}
                </div>
                
            </div>
        )
    }
}

function mapStateToProps(state){
    return(
        state
    )
}

export default connect(mapStateToProps, null)(InputSquare)