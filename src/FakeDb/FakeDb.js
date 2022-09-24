import React, { useEffect, useState } from 'react';
import "./FakeDb.css"
const FakeDb = () => {
    const [fakeDb ,setfakeDb] = useState([]);
    useEffect( () =>{
        fetch('fakedb.json')
        .then(res=> res.json())
        .then(data =>setfakeDb(data))
    },[])
    return (
        <div className='fakedata'>
            {
              fakeDb.map(data => (
                <div className='data'>
                <h1>
                    Name : {data.name}
                </h1>
                <p>
                    Age : {data.age}
                </p>
                <p>
                    id : {data.id}
                </p>
                <button>Add To Local Stroage</button>
                <button>Remove From Local Stroage</button>
            </div>
              ))
            }
        </div>
    );
};

export default FakeDb;