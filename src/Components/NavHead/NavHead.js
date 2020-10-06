import React, { useState } from 'react';
// import banner from '../../logos/banner.jpg'
// import logo from '../../logos/Group 1329.png'
// import { Link } from 'react-router-dom';
import fakeData from '../../fakeData';
import Activity from '../Activity/Activity';
import HeaderTop from '../HeaderTop/HeaderTop';


const NavHead = () => {

    const activities = fakeData;
    const [activity, setActivity] = useState(activities);
    return (
        <div>
            <div className="container menu-item">
                <HeaderTop></HeaderTop>
                <div className="container search-box" style={{ float: 'center', margin:'5px' }}>
                    <h2>I grow by helping people in need.</h2>
                    <form action="">
                        <input type="text" name="" placeholder="Search..." id="" /><button class="btn btn-primary search-button">Search</button>
                    </form>
                </div>

                <div className="row">
                    {
                        activity.map(act => <Activity act={act}></Activity>)
                    }
                </div>
            </div>
        </div>
    );
};

export default NavHead;