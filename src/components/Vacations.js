import React from 'react';
import moment from 'moment';


function Vacations({ vacations }) {
    // console.log("VACA", vacations)

    const handleDelete = () => { }

    // vacations.map((vacation, index) => {

    return (
        <div>
            <ul>
                <li >
                    {/* {vacation.startDate} to {vacation.endDate} */}
                    <button className="delete" onClick={() => handleDelete()}>Delete</button>
                </li>

            </ul>
        </div>
    )
    // })
}


export default Vacations;

// key={index}