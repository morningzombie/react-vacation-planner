import React from 'react';


function CreateVacation({ handleDateSet, handleSubmit }) {
    return (
        <form className='' onSubmit={handleSubmit}>
            <label className='start'>
                Start Date{' '}
                <input className='startBox' name='startDate' type='date' onChange={handleDateSet} />
            </label>
            <label className='end'>
                End Date{' '}
                <input className='endBox' name='endDate' type='date' onChange={handleDateSet} />
            </label>
            <button className='createButton' type='submit'>Create</button>
        </form>
    );
}

export default CreateVacation;