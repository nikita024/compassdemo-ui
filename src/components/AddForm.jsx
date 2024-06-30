import { Dropdown, Input } from '@empuls/dsm'
import DeleteImg from "../assets/images/Delete.svg";
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
    <div className="mil-form" >
        <div style={{ display: 'flex', flexDirection: 'row', gap: 10  }}>
            <div style={{ width: 500 }}>
               
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
            <div style={{ width: 500, padding: '20px' }}>
                <Dropdown
                options={dropdownOptions}
                size="sm"
                menuWidth={400}
                placeholder="choose Operator"
                label=""
                menuPlacement="bottom"
                isClearable={false}
                isMulti={false}
                onChange={data => console.log(data)}
                />
            </div>
            

            <div style={{ width: 500, padding: '17px'}}>
                <Input
                className="my-class"
                label=""
                onBlur={function noRefCheck() { }}
                onChange={function noRefCheck() { }}
                onFocus={function noRefCheck() { }}
                onKeyPress={function noRefCheck() { }}
                placeholder="Enter Value"
                />
            </div>
            {}
            <div onClick={deleteAddForm} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>
                <Delete20Regular style={{ color: 'red', height: 22, width: 22 }} onClick={deleteAddForm} />
                {/* <img src={DeleteImg} alt="edit icon" className="box-image" /> */}
            </div>
            </div>
    </div>
  )
}

export default AddForm