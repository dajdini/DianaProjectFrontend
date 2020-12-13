//Parent component
import { Grid, Paper, TableContainer, Table, TableHead,
    TableRow, TableCell, TableBody, withStyles, ButtonGroup, Button } from '@material-ui/core';
    import React, {useState, useEffect  } from 'react';
    import {connect} from 'react-redux';
    import * as actions from '../actions/bBoking'
    import BookingForm from './BookingForm'; 
    import EditIcon from '@material-ui/icons/Edit';
    import DeleteIcon from '@material-ui/icons/Delete';
    import { useToasts } from "react-toast-notifications";
    
    const styles = theme =>({
        paper : {
            margin: theme.spacing(2),
            padding: theme.spacing(2)
        }
    })
    
    const Bookings = ({classes,...props}) => {
    
        const [currentId, setCurrentId] = useState(0)
    
        useEffect(()=>{
        props.fetchAllBooking()
    
        //const { addToast } = useToasts()
    
        },[]) // insted of componentDidMount, using 'hooks'
    
        const onDelete = bookID =>{
            props.deleteDCandidate(bookID)
        }
    
        /*const onDelete = bookID => {
        if (window.confirm('Are you sure to delete this record?'))
        props.deleteDCandidate(bookID,()=>addToast("Deleted successfully", { appearance: 'info' }))*/
    
        return (
            <Paper className={classes.paper} elevation={3}>
            <Grid container> 
                <Grid items xs={6}>
                    <BookingForm {...({ currentId, setCurrentId })}/>
                </Grid>
                <Grid items xs={6}>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Tider: </TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    props.BookingReducList.map((record, index) =>
                                    {
                                        return (<TableRow key={index}>
                                            <TableCell>{record.times}</TableCell>
                                            <TableCell>
                                                <ButtonGroup>
                                                    <Button><EditIcon color ="primary"
                                                    //bookID ??
                                                    onClick={()=>{setCurrentId(record.bookID)}} /></Button>
                                                    <Button><DeleteIcon color ="secondary" 
                                                    onClick={()=> onDelete(record.bookID)}/></Button>
                                                </ButtonGroup>
                                            </TableCell>
                                        </TableRow>)
                                    })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
            </Paper>
        );
    }
    
    // return
    const mapStateToProps = state => ({
            BookingReducList:state.BookingReduc.list
    })
    
    const mapActionToProps = {
        fetchAllBooking : actions.fetchAll,
        deleteDCandidate: actions.Delete
    }
    
    export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(Bookings));