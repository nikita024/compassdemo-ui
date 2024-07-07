import React from 'react';
import { Dropdown, Input } from '@empuls/dsm';
import { Delete20Regular } from '@fluentui/react-icons';


const dropdownOptions = [
    {
        options: [
            {
                value: 'Simmons',
                label: 'Simmons',
                iconProps: {
                    iconName: 'Edit'
                }
            },
            {
                value: 'Brooklyn',
                label: 'Brooklyn',
                iconProps: {
                    iconName: 'Edit'
                }
            },
            {
                value: 'vanilla',
                label: 'Vanilla',
                iconProps: {
                    iconName: 'Edit'
                }
            }
        ]
    }
];

const AddForm = ({ deleteAddForm }) => {
    return (
        <div className="mil-form">
            <div className="dropdown-container">
                <div className="dropdown">
                    <Dropdown
                        options={dropdownOptions}
                        size="sm"
                        menuWidth={400}
                        placeholder="Select Option"
                        label="Add Condition"
                        menuPlacement="bottom"
                        isClearable={false}
                        isMulti={false}
                        onChange={data => console.log(data)}
                    />
                </div>
                <div className="dropdown" style={{ padding: '21px ' }}>
                    
                    <Dropdown
                        options={dropdownOptions}
                        size="sm"
                        menuWidth={320}
                        placeholder="choose Operator"
                        label=""
                        menuPlacement="bottom"
                        isClearable={false}
                        isMulti={false}
                        onChange={data => console.log(data)}
                    />
                    
                </div>
                <div className="input-container">
                    <Input
                        className="input"
                        label=""
                         onBlur={function noRefCheck() { }}
                        onChange={function noRefCheck() { }}
                        onFocus={function noRefCheck() { }}
                        onKeyPress={function noRefCheck() { }}
                        placeholder="Enter Value"
                    />
                </div>
                <div className="delete-icon-container" onClick={deleteAddForm}>
                    <Delete20Regular className="delete-icon" />
                </div>
            </div>
        </div>
    );
}

export default AddForm;
