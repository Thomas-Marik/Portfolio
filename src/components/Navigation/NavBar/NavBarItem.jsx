import React from 'react';

const NavBarItem=(props)=> {
    return (
        <div className='nav-item'>
            <img src={props.icon} className='item-icon' alt="icon" />
            <a href={props.path}><h1>{props.name}</h1></a>
        </div>
    )
}

export default NavBarItem;
