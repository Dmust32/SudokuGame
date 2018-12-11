import React, {Component} from 'react'
import {connect} from 'react-redux'
import {updateSelectedValue} from '../redux/reducer'

class ValuePicker extends Component {
    state = {
        values : [1,2,3,4,5,6,7,8,9],
    }

    render(){
        return(
            <div>
                <h3 style={{marginLeft: '50px'}}>Select number to place in box.</h3>
                <h4>Current number: {this.props.selectedValue}</h4>
                <div className = 'box-container' style={{marginLeft: '50px'}}>
                    
                    {this.state.values.map((value, index) => {
                        return(
                            <div key={index} className = 'picker-cube' onClick={() =>this.props.updateSelectedValue(value)}>
                                {value}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

}

function mapSateToProps(state){
    return(
        state
    )
    
}

export default connect(mapSateToProps, {updateSelectedValue})(ValuePicker)