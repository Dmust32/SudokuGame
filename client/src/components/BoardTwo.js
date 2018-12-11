import React, {Component} from 'react'
import InputSquare from './InputSquare'
import {connect} from 'react-redux'

class Board extends Component {
    state = {
        board: [
            [5,3,4,6,7,8,9,1,2],
            [6,7,2,1,9,5,3,4,8],
            [1,9,8,3,4,2,5,6,7],
            [8,5,9,7,6,1,4,2,3],
            [4,2,6,8,5,3,7,9,1],
            [7,1,3,9,2,4,8,5,6],
            [9,6,1,5,3,7,2,8,4],
            [2,8,7,4,1,9,6,3,5],
            [3,4,5,2,8,6,1,7,9]
        ],
        rows: [],
        columns: [],
        boxes: []
    }

    componentDidMount = () => {
        if(this.props.boardValues){
            this.makeBoard(this.props.boardValues)
        }
        this.makeBoard(this.state.board)
    }

    makeBoard = (boardValues) => {
      let rows = boardValues
      let columns = []
      let boxes = []

      for(var i = 0; i < 9; i ++){
        columns.push([])
        boxes.push([])
      }

      for(var row = 0; row < 9; row ++){
          for(var col = 0; col < 9; col ++){

                columns[col][row] = boardValues[row][col]

                let boxRow = Math.floor( row/3 )
                let boxCol = Math.floor( row/3 )
                let boxIndex = boxRow * 3 + boxCol

                boxes[boxIndex].push(boardValues[row][col])
          }
      }
    //   console.log(rows, columns, boxes)
      this.setState({board: boardValues, rows, columns, boxes})
    }

    validateBoard = () => {

    }

    render(){
        return(
            <div>
                <h1>Sudoku!</h1>
                <div className='board-container'>
                    {this.state.board.map((row, index) => {
                        return (
                            <div className='box-container' key ={index} >
                                {row.map((input, index) => {
                                    return (
                                        <div key = {index}>
                                            <InputSquare 
                                                squareValue = {input} 
                                                updateBoard = {this.updateBoard}
                                            />
                                        </div>
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

function mapStateToProps(state){
    return(
        state
    )
}

export default connect(mapStateToProps, null)(Board)