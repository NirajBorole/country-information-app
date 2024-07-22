import './style.css'
import axios from 'axios';
import { useEffect, useState } from 'react';

function CountryCard() {

    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/country')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, []);
  
    return (
    <article className='cards'>
        {
            data.map((d, i) => {
                return <div className='card' key={i}>
                    <div className='flag-img'>
                        <img src='https://fastly.picsum.photos/id/756/536/354.jpg?hmac=beAKagMgLSDg_uqqY0ijcG4brwkdN_mFQv3kBE4hzoE' alt={d.name} />
                    </div>
                    <h2> {d.name} </h2>
                    <ul>
                        <li> Population : {d.population} </li>
                        <li> Capital : {d.capital} </li>
                        <li> Region : {d.region} </li>
                    </ul>
                 </div>
            })
        }
    </article>
  )

}

export default CountryCard



//   <div className="card" key={id}>
//             <img src={flag} alt={name} />
//             <div className="card-content">
//                 <h2>
//                     {name}
//                 </h2>
//                 <ol>
//                     <li>Population : {population}</li>
//                     <li>Capital : {capital}</li>
//                     <li>Region : {region}</li>
//                 </ol>
//             </div>
//         </div>


// return <div className='blob' key={i}>
//             <div>
//             <img src={d.flag} alt={d.name} />
//                 </div>                
//                 <h2>{d.name}</h2>
//                 <ol>
//                     <li>{d.population}</li>
//                     <li>{d.capital}</li>
//                     <li>{d.region}</li>
//                 </ol>
//             </div>