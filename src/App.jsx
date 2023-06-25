import { Provider } from 'react-redux'
import './App.css'
import store from './redux/store'
import Navigation from './Components/Navigation/Navigation'
import {AiOutlinePlus} from 'react-icons/ai'

function App() {

  return (
    <Provider store={store}>
    
      <Navigation />

      <input style={{outline: 'none'}}
      placeholder='Search Stock by Code' 
      className='
      shadow-none border-b-[0.1px] border-b-[#00000079] border-0 border-solid
      w-[80%] ml-1 mt-1 p-2
      '/>

      <button className='border-[#fa5a5a] border-solid border-[.1px] h-[20px] w-[20px] '>
       <AiOutlinePlus color='#fa5a5a' className='m-[auto]'/>
      </button>
    </Provider>
  )
}

export default App
