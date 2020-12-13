import axios from 'axios';

// url to the api
const baseUrl = "http://localhost:58326/api/"

export default{
    BookingReduc(url = baseUrl + 'bookings/'){
        return{
            fetchAll: () => axios.get(url),
            fetchById: bookID => axios.get(url+bookID),
            create: newRecord => axios.post(url, newRecord),
            update: (bookID, updatedRecord) => axios.put(url+bookID, updatedRecord),
            delete: bookID => axios.delete(url + bookID)
        }
    }
}