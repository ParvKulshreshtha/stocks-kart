import React, { useState } from 'react'
import {addTodo} from '../redux/actions/action'
import { connect } from 'react-redux'

const AddToDo = ({addToDo}) => {
    const [toDo, setToDo] = useState({
        title:'',description:''
    })

    const submitHandler = (e) => {
        e.preventDefault()
       addToDo(toDo);
        setToDo({
            title:'',description:''
        })
    }
  return (
    <div>
        <form onSubmit={submitHandler}>
            Title : <input type='text' value={toDo.title} onChange={e=>setToDo(toDo=>({...toDo,title:e.target.value}))}></input>
            Descreption : <input type='text' value={toDo.description} onChange={e=>setToDo(toDo=>({...toDo,description:e.target.value}))}></input>
            <button type='submit'>
                Add To Do
            </button>
        </form>
        

    </div>
  )
}


const mapStateToProps=(state)=>({})
const mapDispatchToProps=(dispatch)=>({
    addToDo:(todo)=>(dispatch(addTodo(todo)))
})
export default connect(mapStateToProps,mapDispatchToProps) (AddToDo)