import React, {useContext, useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import logo from '../../logos/Group 1329.png'
import { Link, useParams, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import fakeData from '../../fakeData';

const Registration = () => {
    const { actId } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const activityDetails = fakeData.filter(act => act.id == actId)
    const { title, image } = activityDetails[0];
    const newReg = {Activity : title, image}

    const history = useHistory();


    const handleRegistration = () => {
        const newRegistration = {...loggedInUser, ...newReg}
        fetch('http://localhost:5000/addRegistration', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(newRegistration)
        })
        .then(res => res.json())
        .then(data => {
            history.replace('/registrations')
        })
        

    };

    return (

        <div>
            <div className="container">
                <div>
                    <Link to="/"><img src={logo} alt="" /></Link>
                </div>

                <div>
                    <Form>
                        <Form.Group controlId="formGroupText">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="Text" value={loggedInUser.name} />
                        </Form.Group>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" value={loggedInUser.email} />
                        </Form.Group>
                        <Form.Group controlId="formGroupDate">
                            <Form.Label>Date</Form.Label>
                            <Form.Control type="date" format="dd/MM/yyyy"/>
                        </Form.Group>
                        <Form.Group controlId="formGroupText">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="Text" value={title} />
                        </Form.Group>     
                    <Button onClick={handleRegistration}  variant="primary" size="lg" block>Registration</Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Registration;