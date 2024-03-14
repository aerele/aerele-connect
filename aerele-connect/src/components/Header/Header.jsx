import { useState } from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export const Header= () => {

  return (
  <>
  <nav className="navbar fixed-top bg-body-tertiary bg-dark border-bottom border-body" data-bs-theme="dark">
  <div className='container-fluid d-flex felx-row justify-content-between pe-3 ps-3'>
  <div>
  <Link to='/'><a className="navbar-brand">Aerele + Connect</a></Link>
  </div>
  <div className="">
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
    </form>
  </div>
  <div>
    <AccountCircleIcon  color="primary"/>
  </div>
  </div>
</nav>
</>
)
}