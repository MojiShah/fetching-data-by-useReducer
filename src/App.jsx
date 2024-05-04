import './App.css';
import {Routes , Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import FactStates from './Components/States/FactStates';
import FactUsingReducer from './Components/Reducers/FactUsingReducer';
import Header from './Components/Header/Header';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/states' element={<FactStates />} />
        <Route path='/reducers' element={<FactUsingReducer />} />
      </Routes>
    </>
  )
}

export default App
