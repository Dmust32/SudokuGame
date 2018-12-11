import React, {Component} from 'react'

class ValuePicker extends Component {
    state = {
        values : [1,2,3,4,5,6,7,8,9],
        selectedValue : null
    }

    handleValueChange = (value) => {
        console.log('fireball', value)
    }

    render(){
        return(
            <div>
                <h3 style={{marginLeft: '50px'}}>Select number to place in box.</h3>
                <div className = 'box-container' style={{marginLeft: '50px'}}>
                    
                    {this.state.values.map((value, index) => {
                        return(
                            <div className = 'picker-cube' onClick={() =>this.handleValueChange(value)}>
                                {value}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

}

export default ValuePicker