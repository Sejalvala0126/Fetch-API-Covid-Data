import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {


    return(
        <>
        <div className='Nav'>
        <NavLink className='Navigation' exact to="/">Home |</NavLink>
        <NavLink className='Navigation' exact to="/casestimeseries"> CasesTimeSeries |</NavLink>
        <NavLink className='Navigation' exact to="/statewise"> Statewise |</NavLink>
        <NavLink className='Navigation' exact to="/tasted"> Tasted |</NavLink>
        </div>
        </>
    );
}

export default Menu;