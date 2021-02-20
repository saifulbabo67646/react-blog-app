import React from 'react'

function Spinner() {
    return ( 
        <div className='d-flex align-items-center my-4'>
            <span>Loading...</span>
            <div className='spinner-border text-danger ml-auto' role='status' aria-hidden='true'></div>
        </div>
    )
}

export default Spinner
