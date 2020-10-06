import React, { useState, useEffect, useContext } from 'react';
import { Button, Card, CardDeck } from 'react-bootstrap';
import { UserContext } from '../../App';
import HeaderTop from '../HeaderTop/HeaderTop';
// import './RegistrationLists.css'

const RegistrationLists = () => {
    const [registrations, setRegistrations] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [id, setId] = useState();
    useEffect(() => {
        fetch('http://localhost:5000/registrations?email=' + loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${sessionStorage.getItem('token')}`
            }

        })
            .then(res => res.json())
            .then(data => setRegistrations(data));

    }, [id])

    return (
        <div>
            <HeaderTop></HeaderTop>
            <h4> Total registrations : {registrations.length} </h4>
            {
                registrations.map(reg =>
                    <CardDeck style={{ float: 'left', margin:'5px' }}>
                        <Card bg='primary' style={{ width: '250px', height: '400px' }}>
                            <Card.Img style={{ height: '350px', width: '250px' }} className="image" variant="top" src={reg.image} />
                            <Card.Title style={{ color: 'white' }}><strong> {reg.Activity}</strong></Card.Title>
                        </Card>

                    </CardDeck>


                )}
        </div>
    );
};

export default RegistrationLists;