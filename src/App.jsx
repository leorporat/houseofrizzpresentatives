import { useState } from 'react'
import './App.css'
import HomeView from './Views/HomeView.jsx'
import {Route, Routes} from "react-router-dom"
import Girls from './Views/VoteGirlsView.jsx'
import Guys from './Views/VoteGuysView.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Routes>
        <Route path='/houseofrizzpresentatives/' element={<HomeView />} />
        <Route path='girls' element={<Girls />} />
        <Route path='guys' element={<Guys />} />
      </Routes>
    </div>
  )
}

export default App
