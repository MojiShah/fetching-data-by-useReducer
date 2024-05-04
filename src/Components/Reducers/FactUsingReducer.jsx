import React , {useReducer} from 'react';
import { factReducer , initialState} from './FactReducer';
import { actionTypes } from './actionTypes';

function FactUsingReducer() {
  
  const [state , dispatch] = useReducer(factReducer,initialState)

  const handleFetch = () => {
    dispatch({ type:actionTypes.fetch_start});

    fetch('https://catfact.ninja/fact')
      .then(res => res.json())
      .then(catData => {
        dispatch({ type:actionTypes.fetch_success , data:catData.fact})
      })
      .catch(err => {
        dispatch({ type:actionTypes.fetch_error})
      })
  }
  return (
    <div className={`${state.loading ? 'wrapper warning' : 'wrapper'} 
              ${state.error ? 'wrapper danger' : 'wrapper'}
    `}>
      <div className="cat_image">
        <img src="./img/Cat.jpeg" alt="cat" />
      </div>
      <button
        className='btn_fetch'
        onClick={handleFetch}
      >
        {state.loading ? 'is loading ...' : 'Fetch Cat Fact'}
      </button>
      <div className="desc">
        {state.error && (<p>Error, Something is wrong...</p>)}
        <p>{state.text}</p>
      </div>
    </div>
  )
}

export default FactUsingReducer