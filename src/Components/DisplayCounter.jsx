import React from 'react'
import { connect } from 'react-redux'

const DisplayCounter = ({todolength}) => {
  return (
    <div>
        <h4>{todolength}</h4>
    </div>
  )
}

const mapStateToProps = (state) => {
  return{todolength:state.todoReducer.length}
}

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps) (DisplayCounter)