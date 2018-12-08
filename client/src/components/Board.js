import React, {Component} from 'react'
import InputSquare from './InputSquare'

class Board extends Component {
    state = {
        boardMatrix: 
            [
                [[0,0,0],[0,0,0],[0,0,0]],
                [[0,0,0],[0,0,0],[0,0,0]],
                [[0,0,0],[0,0,0],[0,0,0]],
                [[0,0,0],[0,0,0],[0,0,0]],
                [[0,0,0],[0,0,0],[0,0,0]],
                [[0,0,0],[0,0,0],[0,0,0]],
                [[0,0,0],[0,0,0],[0,0,0]],
                [[0,0,0],[0,0,0],[0,0,0]],
                [[0,0,0],[0,0,0],[0,0,0]]
            ]
    }

    updateBoard = (value, position) => {
        let {indexOne, indexTwo, index} = position
        let matrixCopy = this.state.boardMatrix
        matrixCopy[indexOne][indexTwo][index] = parseInt(value)
        this.setState({boardMatrix: matrixCopy})
    }

    validateRow = () => {
        
    }

    validateColumn = () => {

    }

    validateBox = () => {

    }

    render(){
        return(
            <div>
                <h1>Sudoku!</h1>
                <div className='board-container'>
                    { this.state.boardMatrix.map((box, index)=>{
                        let indexOne = index
                        return(
                            <div className='box-container' key ={index} >
                                {box.map((row, index)=>{
                                    let indexTwo = index
                                    return(
                                        row.map((input, index)=>{
                                            let position = {
                                                indexOne,
                                                indexTwo,
                                                index
                                            }
                                            return(
                                                <div key = {index}>
                                                    <InputSquare 
                                                        squareValue = {input} 
                                                        position = {position} 
                                                        updateBoard = {this.updateBoard}
                                                    />
                                                </div>
                                            )  
                                        })
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Board