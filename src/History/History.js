import React from 'react';
import './History.css'
const History = (props) => {
 //   console.log(props)
 //   let local = localStorage.getItem()
    let count = 1;
    return (
        <div>
            <div className='history'>
                <hr />
                <h1>History</h1>
                <hr />
            </div>
            <div className='history-data'>
                <div>
                    <h2>{count} : </h2>
                </div>
                <div>
                    <h4>
                        632eff5f2d97fdb6affbd544
                    </h4>
                </div>
                <div>
                    <button>
                        Remove
                    </button>
                </div>
            </div>
        </div>
    );
};

export default History;