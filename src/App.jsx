import { BrowserRouter , Route, Router , Routes} from 'react-router-dom'
import Home from './cmp/home'
import Notfound from './cmp/not-found'
import 'material-icons/iconfont/material-icons.css'

const App = () => {
  
  return(
    <>
        <BrowserRouter>
          <Routes>
            
            <Route path='/' element={<Home/>}/>
            <Route path='*' element={<Notfound/>}/>

         
          </Routes>
        </BrowserRouter>
    </>

  )
}

export default App