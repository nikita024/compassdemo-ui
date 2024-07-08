import React from 'react';
import Select from 'react-select';

const customStyles = {
    option: (provided, state) => ({
        ...provided,
        color: state.data.value === 'new-plan-group' ? '#246EF6' : 'black',
        borderTop: state.data.value === 'new-plan-group' ? '1px solid #CFD7E2' : "",
        backgroundColor: state.isSelected ? '#F6F7F9' : provided.backgroundColor,
        cursor: state.isDisabled ? 'not-allowed' : 'pointer',
    }),
    singleValue: (provided, state) => ({
        ...provided,
        color: state.data.value === 'new-plan-group' ? '#246EF6' : 'black',
        borderTop: state.data.value === 'new-plan-group' ? '1px solid #CFD7E2' : "",
    }),
};

const PlanGroupDropdown = ({ options, value, onChange, placeholder, label }) => (
    <div>
        <label style={{ fontSize: '12px',color:'#041A2F', }}>{label}</label>
        <Select
            styles={customStyles}
            options={options}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    </div>
);

export default PlanGroupDropdown;