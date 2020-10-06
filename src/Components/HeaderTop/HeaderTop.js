import React from 'react';
import logo from '../../logos/Group 1329.png'
import { Link } from 'react-router-dom';

const HeaderTop = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light">
                    <a class="navbar-brand" href="#"><img class="img-fluid w-25" src={logo} alt="" /></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active">
                                <Link to="/" class="nav-link">Home</Link>
                            </li>

                            <li class="nav-item">
                                <Link to="/" class="nav-link">Donation</Link>
                            </li>

                            <li class="nav-item">
                                <Link to="/" class="nav-link">Events</Link>
                            </li>

                            <li class="nav-item">
                                <Link to="/" class="nav-link">Blog</Link>
                            </li>
                        </ul>
                        <form class="form-inline my-2 my-lg-0">
                            <Link to="/registration/1" class=""><button class="btn btn-primary my-2 my-sm-0 mr-3" type="submit">Register</button></Link>
                            <Link to="/allRegistrations"><button class="btn btn-dark my-2 my-sm-0" type="submit">Admin</button></Link>
                        </form>
                    </div>
                </nav>
        </div>
    );
};

export default HeaderTop;