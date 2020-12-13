import React from 'react'
import BookingSection from '../BookingSection'
import {bookObjOne, bookObjTwo} from './BookingData'

// returns data from BookingData.js
function Booking() {
   
    return (
        <>
            <BookingSection {...bookObjOne} />
            <BookingSection {...bookObjTwo} />
        </>
    )
}
export default Booking
