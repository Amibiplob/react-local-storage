import React, { useEffect, useState } from 'react';
import './History.css'
const History = () => {
    //   console.log(props)
    const [items, setItems] = useState([]);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('user'));
        if (items) {
            setItems(items);
        }
    }, []);

    // console.log(items)
    let count = 1;

    const remove= () => {
       localStorage.clear('user');
        window.location.reload();
      };



    return (
        <div>
            <div className='history'>
                <hr />
                <h1>History</h1>
                <hr />
            </div>



            {items.map(data => (

                <div className='history-data'>
                    <div>
                        <h2>{count++} : </h2>
                    </div>
                    <div>
                        <h4>
                            {data.id}
                        </h4>
                    </div>
                    <div>
                        <button onClick={remove}>
                            Remove All
                        </button>
                    </div>
                </div>
                ))}
        </div>
    );
};

export default History;