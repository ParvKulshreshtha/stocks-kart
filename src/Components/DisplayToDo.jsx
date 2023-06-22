import React from 'react'
import DisplayCounter from './DisplayCounter'
import { connect } from 'react-redux'

const DisplayToDo = ({todoList}) => {
  return (
    <div>
        <DisplayCounter />

        {todoList.map((todo,index)=>
          <div key={index}>
            <h4>{todo.title}</h4>
            <p>{todo.description}</p>
            <button>delete</button>
            <button>update</button>
          </div>)}
    </div>
  )
}

const mapStateToProps = (state) =>{
  return {todoList:state.todoReducer}
}

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps,mapDispatchToProps) (DisplayToDo)