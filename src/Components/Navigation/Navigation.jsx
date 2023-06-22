import React from 'react'
import { connect } from 'react-redux'

const Navigation = ({todoList}) => {
  return (
    <div>
        
    </div>
  )
}

const mapStateToProps = (state) =>{
  return {todoList:state.todoReducer}
}

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps,mapDispatchToProps) (Navigation)