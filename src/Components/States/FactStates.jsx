import React , {useState} from 'react';

function FactStates() {

    const [text, setText] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    //  Fetch_start : loading : true;
    //  Fetch_success : loading : false;  
    //                  fact : res.data.fact
    //  Fetch_error : loading : false
    //                error : true

    const handleFetch = () => {
        setLoading(true);
        setError(false);
        fetch('https://catfact.ninja/fact')
            .then(res => res.json())
            .then(data => {
                setText(data.fact);
                setLoading(false);
            })
            .catch(err => {
                setError(true);
                setLoading(false);
            })
    }
  return (
      <div className={`${loading ? 'wrapper warning' : 'wrapper'} 
              ${error ? 'wrapper danger' : 'wrapper'}
    `}>
          <div className="cat_image">
              <img src="./img/Cat.jpeg" alt="cat" />
          </div>
          <button
              className='btn_fetch'
              onClick={handleFetch}
          >
              {loading ? 'is loading ...' : 'Fetch Cat Fact'}
          </button>
          <div className="desc">
              {error && (<p>Error, Something is wrong...</p>)}
              <p>{text}</p>
          </div>
      </div>
  )
}

export default FactStates