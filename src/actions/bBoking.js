import api from './api'

export const ACTION_TYPES = {
    CREATE : 'CREATE',
    UPDATE : 'UPDATE',
    DELETE : 'DELETE',
    FETCH_ALL : 'FETCH_ALL'
}

const formateData = data =>({
    ...data
})

export const fetchAll = () => dispatch => {
    
        ///// get api request
        api.BookingReduc().fetchAll()
        .then(
            response => {
            console.log(response)
            dispatch({
            type: ACTION_TYPES.FETCH_ALL,
            payload: response.data
        })
        }
        )
        .catch(err => console.log(err))
}

//create
export const create = (data, onSuccess) => dispatch =>{
    data = formateData(data)
    api.BookingReduc().create(data)
    .then(res =>{
        dispatch({
            type: ACTION_TYPES.CREATE,
            payload: res.data
        })
        onSuccess()
    })
    .catch(err => console.log(err))
}

//update
export const update = (bookID, data, onSuccess) => dispatch =>{
    data = formateData(data)
    api.BookingReduc().update(bookID, data)
    .then(res =>{
        dispatch({
            type: ACTION_TYPES.UPDATE,
            payload: {bookID:bookID,...data}
        })
        onSuccess()
    })
    .catch(err => console.log(err))
}

//delete
export const Delete = (bookID, onSuccess) => dispatch =>{
    api.BookingReduc().delete(bookID)
    .then(res =>{
        dispatch({
            type: ACTION_TYPES.DELETE,
            payload: bookID
        })
        onSuccess()
    })
    .catch(err => console.log(err))
}