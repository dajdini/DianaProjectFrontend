import React, {useState, useEffect} from 'react'
import './BookingSection.css'
import {Button} from './Button';
import {Link} from 'react-router-dom';
import axios from 'axios';

function BookingSection({
    lightBg, topLine, lightText, lightTextDesc, headline, description,
    buttonLabel, img, alt, imgStart, bookS
}) {

    //const [data, setData] = useState(0);
    // hooks
    const [bookings, setBookings] = useState([]);
    const [status, setStatus] = useState("");
    const [load, setLoad] = useState(false);
    
    //get booking, to display the times created in adminpage to the user
    const getBooking = async () => {
        try{
            const rsp = await axios.get('http://localhost:58326/api/bookings')
            setLoad(true)
            setBookings(rsp.data)
            console.log(rsp)
        }

        // if the api is not running, an text saying "error" will show
        catch(error){
            setStatus("error")

        }
    }

    // useEffect for the hooks
    useEffect(() => {
        if (load)return;
        getBooking(bookings)
    },[bookings, load]);

    if (bookS === true) return (
        <>
            <div 
            className={lightBg ? 'book_book-section' : 'book_book-section darkBg'}
            >
            <div className="container">
                <div className="row book_book-row"
                style={{display: 'flex', direction: imgStart ===
                'start' ? 'row-reverse' : 'row'}}>
                    <div className="col">
                        <div className="book_book-text-wrapper">
                            <div className="top-line">{topLine}</div>
                            <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                            <p className={lightTextDesc ? 'book_book-subtitle' : 'book_book-subtitle dark'}>
                            {description}</p>
                            {status && <p>{status}</p>}
                            <div className={lightText ? 'bokadeTider': 'bokadeTider dark'}>{bookS}
                            {bookings.map((booking) => {
                            return (
                            <tr key={booking.bookID}>
                            <td>{booking.times}</td><br/>
                            <td><Button buttonSize='btn--medium' buttonColor='red'>{buttonLabel}</Button></td>
                            </tr> );
                            })}
                        </div>
                        </div>
                    </div>
                    <div className="col">
                       <div className="book_book-img-wrapper">
                           <img src={img} alt={alt} className="book_book-img"/>
                        </div> 
                    </div>
                </div>
            </div>
            </div>
        </>
    )

    return (
        <>
            <div 
            className={lightBg ? 'book_book-section' : 'book_book-section darkBg'}
            >
            <div className="container">
                <div className="row book_book-row"
                style={{display: 'flex', direction: imgStart ===
                'start' ? 'row-reverse' : 'row'}}>
                    <div className="col">
                        <div className="book_book-text-wrapper">
                            <div className="top-line">{topLine}</div>
                            <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                            <p className={lightTextDesc ? 'book_book-subtitle' : 'book_book-subtitle dark'}>
                            {description}</p>
                            {status && <p>{status}</p>}
                            <Link to="/sign-up">
                            <Button buttonSize='btn--wider' buttonColor='red'>{buttonLabel}</Button>
                            </Link>
                        </div>
                    </div>
                    <div className="col">
                       <div className="book_book-img-wrapper">
                           <img src={img} alt={alt} className="book_book-img"/>
                        </div> 
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default BookingSection

/*useEffect(async () => {
    debugger;
    const response = await fetch('http://localhost:58326/api/bookings');
    const jsondata = await response.json();
    const [item] = jsondata.results;
    console.log(response);
    setBookings(item); 
}, []);*/

/*
                        <div className="bokadeTider">{bookS}

{bookings.map((booking) => {
return (
<tr key={booking.bookID}>
<td>{booking.times}</td>
<td><Button buttonSize='btn--medium' buttonColor='red'>{buttonLabel}</Button></td>
</tr> );
})}
</div>
*/