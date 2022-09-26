import React, { useEffect, useState } from 'react';
import { addToLocal, removeFromLocal } from '../LocalStroage/LocalStroage';
import "./FakeDb.css"
const FakeDb = () => {
    const [fakeDb, setfakeDb] = useState([]);
    useEffect(() => {
        fetch('fakedb.json')
            .then(res => res.json())
            .then(data => setfakeDb(data))
    }, [])
    const addLocal = (props) => {
        addToLocal(props)
        console.log(props)
    }
    const removeLocal = (props) => {
        removeFromLocal(props)
    }
    return (
        <div className='fakedata'>
            {
                fakeDb.map(data => (
                    <div className='data'>
                        <h3>
                            Name : {data.name}
                        </h3>
                        <p>
                            Age : {data.age}
                        </p>
                        <p>
                            id : {data.id}
                        </p>
                        <button onClick={() => addLocal(data.id)}>Add To Local Stroage</button>
                        <button onClick={() => removeLocal(data.id)}>Remove From Local Stroage</button>
                    </div>
                ))
            }
        </div>
    );
};

export default FakeDb;