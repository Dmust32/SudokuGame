const initialState = {
    selectedValue: null
}

const UPDATE_SELECTED_VALUE = 'UPDATE_SELECTED_VALUE'

function reducer(state= initialState, action){
    
    switch(action.type){ 
        case UPDATE_SELECTED_VALUE:
            return Object.assign({}, state, {selectedValue: action.payload})
        default:
            return state
    }
}

export function updateSelectedValue(value){
    return {
        type: UPDATE_SELECTED_VALUE,
        payload: value
    }
}

export default reducer
