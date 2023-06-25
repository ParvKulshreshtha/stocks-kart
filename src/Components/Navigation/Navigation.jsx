import React from 'react'
import { connect } from 'react-redux'
import {BsFillBookmarkCheckFill} from 'react-icons/bs'
import {BiBriefcaseAlt} from 'react-icons/bi'
import {MdManageAccounts} from 'react-icons/md'
import {GiNewspaper} from 'react-icons/gi'

const Navigation = () => {
  return (
    <nav className=' '>
        <ul className='w-full lg:w-[20%] lg:h-screen lg:flex-col flex shadow-[0_0_2px_#00000029] justify-around text-center p-1 items-center'>
            <li className='cursor-pointer'>
                <BsFillBookmarkCheckFill className='mx-[auto]' size={25}/>
                WatchList
            </li>
            
            <li className='cursor-pointer'>
                <BiBriefcaseAlt className='mx-[auto]' size={25}/>
                Position
            </li>
            
            <li className='cursor-pointer'>
                <GiNewspaper className='mx-[auto]' size={25}/>
                News
            </li>
            
            <li className='cursor-pointer'> 
                <MdManageAccounts className='mx-[auto]' size={25}/>
                Profile
            </li>
        </ul>
    </nav>
  )
}

const mapStateToProps = (state) =>{
  return {todoList:state.todoReducer}
}

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps,mapDispatchToProps) (Navigation)