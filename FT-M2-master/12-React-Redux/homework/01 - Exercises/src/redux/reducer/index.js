import { ADD_PRODUCT, DELETE_PRODUCT } from "../actions/types"

const initialState = {
    list: []
}

function rootReducer(state= initialState, action){
    switch(action.type){
        case ADD_PRODUCT:
            return {
                ...state,
                list: [...state.list, action.payload]
            }
        case DELETE_PRODUCT:
            return {
                ...state,
                list: state.list.filter(product => product.id !== action.payload)
            }
        default:
            return state;
    }
}

export default rootReducer 
