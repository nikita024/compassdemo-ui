import React, { useState } from 'react';
import Input from '@empuls/dsm/core/input/Input';
import Dropdown from '@empuls/dsm/core/dropdown/Dropdown';
import FlagImg from "../assets/images/flag.png";
import FrameImg from "../assets/images/frame.png";
import Radio, { RadioGroup } from '@empuls/dsm/core/radio/Radio';
import ParticipantsGroupForm from '../components/ParticipantsGroupForm';
import Modal from '../components/Modal';
import Typography from '@empuls/dsm/core/typography/Typography';  
import Button from '@empuls/dsm/core/button/Button'; 
import DateRangePicker from '@empuls/dsm/core/date-picker/DateRangePicker';
import ShapeImg from "../assets/images/Shape.svg";
import { AddFilled } from '@fluentui/react-icons';
import Footer from '../components/Footer'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

function Plan() {
    const navigate = useNavigate();
    const [showParticipantsForm, setShowParticipantsForm] = useState(false);
    const [showApprovalForm, setShowApprovalForm] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [value, setValue] = useState('');
    const [dropdownValue, setDropdownValue] = useState(null);
    const [selectedPlanType, setSelectedPlanType] = useState(null);
    const [participantGroups, setParticipantGroups] = useState([{}]);
    const [isMilestoneSelected, setIsMilestoneSelected] = useState(false);
    const [isRadioSelected, setIsRadioSelected] = useState(false); 
    const [errormessage, setErrorMessage] = useState(null);
    const [selectedApprovers, setSelectedApprovers] = useState([]); 
    const [groupName, setGroupName] = useState('');
    const [isManualFiles, setIsManualFiles] = useState(false);
    const [isAutomaticDropdownSelected, setIsAutomaticDropdownSelected] = useState(false);

    const [newPlanGroupName, setNewPlanGroupName] = useState('');
    const [dropdownOptions, setDropdownOptions] = useState([
        { value: 'Theresa Webb', label: 'Theresa Webb' },
        { value: 'Bessie Cooper', label: 'Bessie Cooper' },
        { value: 'Dianne Russell', label: 'Dianne Russell' },
        { value: 'Brooklyn Simmons', label: 'Brooklyn Simmons' },
        { value: 'Leslie Alexander', label: 'Leslie Alexander' },
        { value: 'new-plan-group', label: 'Create New Plan Group' }
    ]);

    const handleRadioChange = (e) => {
        if (e.target.value === "createGroup") {
            setShowParticipantsForm(true);
        } else {
            setShowParticipantsForm(false);
        }
        setIsRadioSelected(true); 
    };

    const handleApprovalChange = (e) => {
        if (e.target.value === "select-approvers") {
            setShowApprovalForm(true);
        } else {
            setShowApprovalForm(false);
            setSelectedApprovers([]); 
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleDropdownChange = (data) => {
        if (data.value === 'new-plan-group') {
            setIsModalOpen(true);
        } else {
            setDropdownValue(data);
        }
    };

    const handlePlanTypeClick = (type) => {
        setSelectedPlanType(type);
        if (type === 'milestone') {
            setIsMilestoneSelected(true);
        } else {
            setIsMilestoneSelected(false);
        }
    };

    const addAnotherGroup = () => {
        setParticipantGroups([...participantGroups, {}]);
    };

    const deleteGroup = (index) => {
        const newGroups = participantGroups.filter((_, i) => i !== index);
        setParticipantGroups(newGroups);
    };

    const validateForm = () => {
        let isValid = true;
       
        const planName = document.querySelector('input[placeholder="Enter Plan Name"]').value;
        if (!planName) {
            toast.error('The Plan Name field is required.');
            isValid = false;
            setErrorMessage('The Plan Name field is required.');
        } else if (!dropdownValue) {
            toast.error('The Plan Group field is required.');
            isValid = false;
            setErrorMessage('The Plan Group field is required.');
        } else if (!groupName) {
            toast.error('Name this Group of Participants field is required.');
            isValid = false;
        } else if (isAutomaticDropdownSelected) {
            toast.error('Add condition field is required.');
            isValid = false;
        } else {
            if (isValid) {
                navigate("/milestone");
            }
            return isValid;
        }
    };

    const validateModalForm = () => {
        let isValid = true;
       
        const planGroupName = document.querySelector('input[placeholder="Please enter the plan group name"]').value;
        if (!planGroupName) {
            toast.error('The Plan Group Name field is required.');
            isValid = false;
        } else if (!value) {
            toast.error('The Date Range field is required.');
            isValid = false;
        } else if (showApprovalForm && selectedApprovers.length === 0) {
            toast.error('At least one approver must be selected.');
            isValid = false;
        } else {
            return isValid;
        }
    };


    const handleSaveModal = () => {
        if (validateModalForm()) {
            const newOption = { value: newPlanGroupName, label: newPlanGroupName };
            // setDropdownOptions([...dropdownOptions, newOption]);
            setDropdownValue(newOption);  
            setIsModalOpen(false);
        }
    };

    const handleApproversChange = (data) => {
        setSelectedApprovers(data);
    };

    return (
        <>
        <Navbar name="Creating a Plan" />
        <div className="outer-container">
            <div className="container">
                <div className="input-group">
                    <Input
                        className="my-class"
                        label="Plan Name"
                        placeholder="Enter Plan Name"
                        required
                    />
                </div>
                <div className="input-group">
                    <div className="dropdown-container">
                        <Dropdown
                            label="Plan Group"
                            placeholder='Select Option'
                            isCreatable={true}
                            onChange={handleDropdownChange}
                            options={dropdownOptions}
                            value={dropdownValue}
                            required
                        />
                    </div>
                </div>
                <div></div>   
            </div>
            <div className="box-container">
                <div className="box-content" onClick={() => handlePlanTypeClick('milestone')}>
                    <div className="image-container">
                        <img src={FlagImg} alt="plan image" className="box-image" />
                    </div>
                    <div className="content">
                        <h3>Milestone</h3>
                        <p>This Plan lets you set goals in a progressive pattern. Add a reward for every goal to nudge your participants to keep pushing themselves.</p>
                       
                        {selectedPlanType === 'milestone' && (
                            <RadioGroup direction='row' onChange={handleRadioChange}>
                                <div className="radio-box">
                                    <Radio name='radio' value="includeEveryone" label="Include Everyone" />
                                    <img src={ShapeImg} alt="shape image" className="shape" />
                                </div>
                                <div className="radio-box">
                                    <Radio name='radio' value="createGroup" label="Create a Participants Group" />
                                    <img src={ShapeImg} alt="shape image" className="shape" />
                                </div>
                            </RadioGroup>
                        )}

                        {showParticipantsForm && (
                            <>
                                {participantGroups.map((group, index) => (
                                    <div key={index}>
                                        <ParticipantsGroupForm 
                                            index={index} 
                                            onDelete={deleteGroup} 
                                            groupName={groupName} 
                                            setGroupName={setGroupName}
                                            setIsManualFiles={setIsManualFiles}
                                            setIsAutomaticDropdownSelected={setIsAutomaticDropdownSelected}
                                        />
                                         <div className="seperator"></div>
                                    </div>
                                ))}

                                <div className="addBtn">
                                    <Button 
                                        variant='plain' 
                                        color='primary' 
                                        onClick={addAnotherGroup} 
                                        startIcon={<AddFilled size={18} fill='#0245F0' />}
                                    >
                                        Add Another Group
                                    </Button>
                                </div> 
                            </>
                        )}
                    </div>
                </div>
                
                <div className="box-content">
                    <div className="picture">
                        <img src={FrameImg} alt="plan image" className="box-image" />
                    </div>
                    <div className="content">
                        <h3>Commission</h3>
                        <p>Setup a complete commission workflow across Compass which encompasses all aspects of commissions namely, commission quota and plan setting, defining rules and relations between achievements and quota, defining multipliers or bonuses if applicable.</p>
                    </div>
                </div>
            </div>
           
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} size="md" enableOverflow={true}>
                <div>
                    <Typography.H3>Create a Plan Group</Typography.H3>
                    <Input
                        className="my-class"
                        label="Plan Group Name"
                        placeholder="Please enter the plan group name"
                        value={newPlanGroupName}
                        onChange={(e) => setNewPlanGroupName(e.target.value)}
                        required
                    />

                    <div style={{ marginTop: '10px', width: '100%'}}>
                        <DateRangePicker 
                            label='Start date-End date' 
                            placeholder='Please Select Start and End Date' 
                            onChange={setValue} 
                            value={value} 
                            required 
                            style={{ width: '100%' }}
                        />

                        <RadioGroup direction='row' onChange={handleApprovalChange} style={{ marginTop: '10px' }}>
                            <Radio value='approve-automatically' label='Approve Automatically ' name='r' defaultChecked />
                            <Radio value='select-approvers' label='Select Approvers' name='r' />
                        </RadioGroup>

                        {showApprovalForm && ( 
                            <div style={{ marginTop: '10px', marginBottom: '10px' }}>
                                <Dropdown 
                                    isMulti={true} 
                                    isCreatable 
                                    placeholder='You can choose up to 3 approvers' 
                                    label='Add Approvers (0/3)' 
                                    options={[
                                        { value: 'Theresa Webb', label: 'Theresa Webb' },
                                        { value: 'Bessie Cooper', label: 'Bessie Cooper' },
                                        { value: 'Dianne Russell', label: 'Dianne Russell' },
                                    ]}
                                    required
                                    onChange={handleApproversChange}
                                    value={selectedApprovers}
                                />
                            </div>
                        )}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '0px' }}>
                        <Button onClick={handleCloseModal} variant='outlined'>Cancel</Button>
                        <Button ml={2} onClick={handleSaveModal}>Save</Button>
                    </div>
                </div>
            </Modal>
        </div>
        <Footer isMilestoneSelected={selectedPlanType === 'milestone'} isManualFiles={isManualFiles} isRadioSelected={isRadioSelected} validateForm={validateForm} />
        <ToastContainer />
        </>
    );
}

export default Plan;
