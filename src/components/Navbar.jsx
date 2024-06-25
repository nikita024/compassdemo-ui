import React from 'react';
import { ArrowLeft20Regular } from '@fluentui/react-icons';
import'../index.css'
import { useNavigate } from 'react-router-dom';

const Navbar = ({ name, back }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(back);
  };
  return (
    <div className="navbar-new">
        <ArrowLeft20Regular onClick={handleBack} className="back-arrow" />
        <h1>{name}</h1>
    </div>
  );
}

export default Navbar