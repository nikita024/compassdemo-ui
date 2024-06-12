import React from 'react';
import { ArrowLeft20Regular } from '@fluentui/react-icons';
import'../index.css'

const Navbar = () => {
  return (
    <div className="navbar">
        <ArrowLeft20Regular className="back-arrow" />
    <h1>Creating a Plan</h1>
    </div>
  );
}

export default Navbar