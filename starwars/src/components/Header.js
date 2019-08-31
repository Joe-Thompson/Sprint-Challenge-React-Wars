import React from 'react';
import { Jumbotron } from 'reactstrap';

const Header = () => {
    return (
        <div className='Header'>
            <Jumbotron>
                <h1 className="display-3">React Wars</h1>
                <p className="lead">Welcome to the React Wars solider, lets meet the team.</p>
                <hr className="my-2" />
            </Jumbotron>
        </div>
    );
};

export default Header;