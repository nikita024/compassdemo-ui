import React from 'react';
import { ArrowLeft20Regular } from '@fluentui/react-icons';
import'../index.css'

const Navbar = ({ name }) => {
  return (
    <div className="navbar-new">
        <ArrowLeft20Regular className="back-arrow" />
        <h1>{name}</h1>
    </div>
  );
}

export default Navbar