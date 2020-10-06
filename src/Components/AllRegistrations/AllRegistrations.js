import React, { useState, useEffect, useContext } from 'react';
import { Button, Card, CardDeck } from 'react-bootstrap';
import { UserContext } from '../../App';
import HeaderTop from '../HeaderTop/HeaderTop';

const AllRegistrations = () => {
    const [allRegistrations, setAllRegistrations] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('http://localhost:5000/allRegistrations')
            .then(res => res.json())
            .then(data => setAllRegistrations(data));

    }, [])
    return (
        <div>
            <HeaderTop></HeaderTop>
            <h4> Total registrations : {allRegistrations.length} </h4>
            {
                allRegistrations.map(reg =>
                    <CardDeck style={{ float: 'left', margin: '5px' }}>
                        <Card bg='primary' style={{ width: '250px', height: '400px' }}>
                            <Card.Img style={{ height: '350px', width: '250px' }} className="image" variant="top" src={reg.image} />
                            <Card.Title style={{ color: 'white' }}><strong> {reg.Activity}</strong></Card.Title>
                        </Card>

                    </CardDeck>


                )}
        </div>
    );
};

export default AllRegistrations;