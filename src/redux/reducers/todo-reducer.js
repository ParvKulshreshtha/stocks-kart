import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../actions/action-types"

const initialState = []

export default (state=initialState, action) => {
    switch(action.type){
        case ADD_TODO:
            //add todo
            console.log([...state, action.payload]);
            return [...state, action.payload]
        case DELETE_TODO:
            //delete todo
            return state.filter(todo=>todo.id!==action.payload)
        case UPDATE_TODO:
            //update todo
            return state.map(todo=>todo.id==action.payload.todoId ?action.payload.todo :todo)
        default:
            return state
    }
}