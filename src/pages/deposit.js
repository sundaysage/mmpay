import React from 'react'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Deposit = () => {
    return (
        <div className='bg-blue-500 md:w-4/5 md:absolute right-0 bottom-0 md:h-h-t h-screen'>
          <FontAwesomeIcon icon={faHouse} color='#FF0000'/>  Deposit
        </div>
    )
}

export default Deposit