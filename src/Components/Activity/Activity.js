import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';



const Activity = ({ act }) => {
    const history = useHistory();

    const handleRegister = () => {
        history.push(`/registration/${act.id}`)
    }
    return (

        <Card style={{ float: 'left', margin:'5px' }}>
            <Card bg='primary' style={{ width: '270px', height: '410px' }}>
                <Link onClick={handleRegister}><Card.Img style={{ height: '350px', width: '270px' }} variant="top" src={act.image} alt="" /></Link>
                <Card.Body>
                    <Card.Title ><Link style={{ color: 'white', 'textAlign': 'center','textDecoration': 'none' }} onClick={handleRegister}><h3>{act.title}</h3></Link></Card.Title>
                </Card.Body>
            </Card>
        </Card>
    )
};

export default Activity;