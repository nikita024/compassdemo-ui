import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Navbar from '../components/Navbar';
import { Checkbox, Dropdown, Input, CheckboxGroup, Label, Button } from '@empuls/dsm';
import DateRangePicker from '@empuls/dsm/core/date-picker/DateRangePicker';
import mobileimg from '../assets/images/mobileImg.svg';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';


const formatFileSize = (size) => {
    if (size < 1024) {
        return `${size} bytes`;
    } else if (size < 1024 * 1024) {
        return `${(size / 1024).toFixed(2)} KB`;
    } else if (size < 1024 * 1024 * 1024) {
        return `${(size / (1024 * 1024)).toFixed(2)} MB`;
    } else {
        return `${(size / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
};

const dropdownOptions = [{
    value: 'Theresa Webb',
    label: 'Theresa Webb'
}, {
    value: 'Bessie Cooper',
    label: 'Bessie Cooper'
}, {
    value: 'Dianne Russell',
    label: 'Dianne Russell'
}, {
    value: 'Brooklyn Simmons',
    label: 'Brooklyn Simmons'
}, {
    value: 'Leslie Alexander',
    label: 'Leslie Alexander'
}]

const Settings = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState([null, null]);
    const [files, setFiles] = useState([]);
    const [showAdditionalSettings, setShowAdditionalSettings] = useState(false);
    const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
        onDrop: (acceptedFiles) => {
            setFiles([...files, ...acceptedFiles]);
        }
    });

    const [programDescription, setProgramDescription] = useState('');
    const [rewardingBufferTime, setRewardingBufferTime] = useState('');
    const [transactionDate, setTransactionDate] = useState([]);
    const [isNextButtonEnabled, setIsNextButtonEnabled] = useState(false);

    const handleFileCancel = (index) => {
        setFiles(files.filter((file, i) => i !== index));
    };

    const handlePlanThemeClick = () => {
        navigate('/plan-theme');
    }

    const handleMetricSettingClick = () => {
        navigate('/metric-settings');
    }

    const handleSetupEstimatorClick = () => {
        navigate('/setup-estimator');
    }

    const handleFeedbackSurveyClick = () => {
        navigate('/feedback-survey');
    }

    const handleShowAdditionalSettings = () => {
        setShowAdditionalSettings(true);
    }

    const handleHideAdditionalSettings = () => {
        setShowAdditionalSettings(false);
    }

    const validateForm = () => {
       console.log("validateForm")
    }

    useEffect(() => {
        const isFormValid = files.length > 0 &&
            programDescription !== '' &&
            value[0] !== null &&
            value[1] !== null &&
            rewardingBufferTime !== '' &&
            transactionDate.length > 0;
        setIsNextButtonEnabled(isFormValid);
    }, [files, programDescription, value, rewardingBufferTime, transactionDate]);

    return (
        <>
            <div className="milestone-container">
                <Navbar name="Settings" back={"/"} />
                <div className="setting-container">
                    <h1 className='setting-title'>Setup Plan</h1>
                    
                    <div className="set-container">

                        <div className="content"> 
                            <div>
                                <Label style={{ color: '#041A2F', fontSize: '14px', fontWeight: '500' }}>Upload Cover Photo*</Label>
                                <div>
                                    {files && files.length ? (
                                        files.map((file, index) => (
                                            <div className='dropzone' key={file.path}>
                                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                                        <div style={{ marginRight: '10px', borderRadius: '5px', backgroundColor: 'orange', width: '50px', height: '50px' }}></div>
                                                        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                                                            <h4 style={{ color: '#000' }}>{file.path}</h4>
                                                            <p style={{ color: '#AFBCCF' }}>{formatFileSize(file.size)}</p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <button
                                                            onClick={() => handleFileCancel(index)}
                                                            style={{
                                                                backgroundColor: '#fff',
                                                                border: 'none',
                                                                color: '#000',
                                                                padding: '5px 10px',
                                                                borderRadius: '5px',
                                                                cursor: 'pointer'
                                                            }}
                                                        >
                                                            X
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div {...getRootProps({ className: 'dropzone-setting' })} style={{ marginTop: '8px' }}>
                                            <input {...getInputProps()} />
                                            <p style={{ color: "#8095B2", fontSize: "16px", fontWeight: "700" }}>Drag & drop files here, or <span className="upload">Choose file</span> to upload</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="description" style={{ marginTop: '20px' }}>
                                <Label style={{ color: '#041A2F', fontSize: '14px', fontWeight: '500' }}>Program Description*</Label>
                                <Input
                                    className="my-class"
                                    onBlur={function noRefCheck() { }}
                                    onChange={(e) => setProgramDescription(e.target.value)}
                                    onFocus={function noRefCheck() { }}
                                    onKeyPress={function noRefCheck() { }}
                                    placeholder="Placeholder Text"
                                    required
                                />
                            </div>
                            <div className="date" style={{ marginTop: '20px' }}>
                            <Label style={{ color: '#041A2F', fontSize: '14px', fontWeight: '500' }}>Start date-End date*</Label>
                                <DateRangePicker
                                    placeholder='Please Select Start and End Date'
                                    onChange={setValue}
                                    value={value}
                                    required
                                    style={{ width: '100%' }}
                                />
                            </div>
                            <div className="description" style={{ marginTop: '20px' }}>
                                <Label style={{ color: '#041A2F', fontSize: '14px', fontWeight: '500' }}>Rewarding Buffer Time*</Label>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                    <div style={{ width: '8%' }}>
                                        <Input
                                            className="my-class"
                                            onBlur={function noRefCheck() { }}
                                            onChange={(e) => setRewardingBufferTime(e.target.value)}
                                            onFocus={function noRefCheck() { }}
                                            onKeyPress={function noRefCheck() { }}
                                            placeholder="0"
                                            required
                                        />
                                    </div>
                                    <p style={{ color: '#041A2F', fontSize: '14px', fontWeight: '500' }}>Days after the program has ended</p>
                                </div>
                            </div>
                            <div className="setting-dropdown" style={{ marginTop: '20px' }}>
                                <Label style={{ color: '#041A2F', fontSize: '14px', fontWeight: '500' }}>Get transaction date from*</Label>
                                <Dropdown 
                                    isMulti={true}
                                    isCreatable 
                                    placeholder='Select Option' 
                                    options={dropdownOptions}
                                    onChange={(selected) => setTransactionDate(selected)}
                                    required 
                                />
                            </div>

                            {!showAdditionalSettings ? (
                                <div 
                                    className="additional-settings"
                                    onClick={handleShowAdditionalSettings}
                                >
                                    <h5>Show Additional Settings</h5>
                                </div>
                            ) : null}

                            {showAdditionalSettings ? (
                                <div 
                                    className="additional-settings"
                                    onClick={handleHideAdditionalSettings}
                                >
                                    <h5>Hide Additional Settings</h5>
                                </div>
                            ) : null}
                            
                            {showAdditionalSettings ? (
                              <>
                                <div className="setting-dropdown" style={{ marginTop: '20px' }}>
                                    <Label style={{ color: '#041A2F', fontSize: '14px', fontWeight: '500' }}>Recurrance</Label>
                                    <Dropdown 
                                        isMulti={true} 
                                        isCreatable 
                                        placeholder='Select Option' 
                                        options={dropdownOptions}    
                                    />
                                </div>
                                <div className="setting-checkbox" style={{ marginTop: '20px' }}>
                                    <CheckboxGroup direction='column'>
                                        <Checkbox label='this program will be hidden' />
                                        <Checkbox label='Make this a cascading program.' />
                                    </CheckboxGroup>
                                </div>
                              </>  
                            ) : null}
                            
                        </div>
                       <div className="box-image">
                            <img src={mobileimg} alt="plan image" />
                        </div> 
                    </div>
                </div>

                <div className="accordion-container" style={{ marginBottom: "50px" }}>
                    <div style={{ margin: "15px 0px" }}>
                        <Accordion className="accordion-item" style={{ width: "98%", margin: "auto" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            className="accordion-header"
                        >
                            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <div style={{ fontSize: '16px' }}>Optional Settings</div>
                            </div>
                        </AccordionSummary>


                        <AccordionDetails className="accordion-body">
                            <div 
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px",
                                    justifyContent: "space-between",
                                    borderTop: "1px solid #CFD7E2",
                                    padding: "15px",
                                }}
                            >
                                <div>
                                        <h2 style={{ fontSize: "18px" }}>Plan Theme</h2>
                                        <p style={{ fontSize: "12px" }}>Themes customize your plan with different visuals. Change themes even while plan is running.</p>
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "10px",
                                    }}
                                >
                                        <div 
                                            style={{
                                                border: "1px solid #ccc",
                                                borderRadius: "15px",
                                                padding: "6px 18px",
                                                fontSize: "12px",
                                            }}
                                        ><span style={{ fontWeight: "bold" }}>Mansion</span> (Default)</div>
                                        <div
                                            style={{
                                                fontSize: "14px",
                                                fontWeight: "500",
                                                color: "#246EF6F6",
                                                cursor: "pointer",
                                            }}
                                            onClick={handlePlanThemeClick}
                                        >
                                            Change Theme
                                        </div>
                                </div>
                           </div>

                           <div 
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px",
                                    justifyContent: "space-between",
                                    borderTop: "1px solid #CFD7E2",
                                    padding: "15px",
                                }}
                            >
                                <div>
                                        <h2 style={{ fontSize: "18px" }}>Metric Settings</h2>
                                        <p style={{ fontSize: "12px" }}>Metrics and their targets will be added to the scorecard, and the Compass App will also display them.</p>
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "10px",
                                    }}
                                >
                                        <div
                                            style={{
                                                fontSize: "14px",
                                                fontWeight: "500",
                                                color: "#246EF6F6",
                                                cursor: "pointer",
                                            }}
                                            onClick={handleMetricSettingClick}
                                        >Customise</div>
                                </div>
                           </div>

                           <div 
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px",
                                    justifyContent: "space-between",
                                    borderTop: "1px solid #CFD7E2",
                                    padding: "15px",
                                }}
                            >
                                <div>
                                        <h2 style={{ fontSize: "18px" }}>Add Feedback Survey</h2>
                                        <p style={{ fontSize: "12px" }}> A feedback survey is a process to measure satisfaction or loyalty to the plan created.</p>
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "10px",
                                    }}
                                >
                                        {/* <div 
                                            style={{
                                                border: "1px solid #ccc",
                                                borderRadius: "15px",
                                                padding: "6px 18px",
                                                fontSize: "13px",
                                            }}
                                        ><span style={{ fontWeight: "bold" }}>Mansion</span> (Default)</div> */}
                                        <div
                                            style={{
                                                fontSize: "14px",
                                                fontWeight: "500",
                                                color: "#246EF6F6",
                                                cursor: "pointer",
                                            }}
                                            onClick={handleFeedbackSurveyClick}
                                        >Create a Survey</div>
                                </div>
                           </div>

                           <div 
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px",
                                    justifyContent: "space-between",
                                    borderTop: "1px solid #CFD7E2",
                                    padding: "15px 15px 0 15px",
                                }}
                            >
                                <div>
                                        <h2 style={{ fontSize: "18px" }}>Setup Estimator</h2>
                                        <p style={{ fontSize: "12px" }}>Users can calculate how much they can earn from plans using an estimator.</p>
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "10px",
                                    }}
                                >
                                        {/* <div 
                                            style={{
                                                border: "1px solid #ccc",
                                                borderRadius: "15px",
                                                padding: "6px 18px",
                                                fontSize: "13px",
                                            }}
                                        ><span style={{ fontWeight: "bold" }}>Mansion</span> (Default)</div> */}
                                        <div
                                            style={{
                                                fontSize: "14px",
                                                fontWeight: "500",
                                                color: "#246EF6F6",
                                                cursor: "pointer",
                                            }}
                                            onClick={handleSetupEstimatorClick} 
                                        >Create an Estimator</div>
                                </div>
                           </div>
                        </AccordionDetails>
                        </Accordion>
                    </div>
                </div>

                <div>
                    csdn
                </div>

            </div>
            <Footer />
            <div className="footer">
            <div className="left-buttons">
                <Button variant='plain' className="button" onClick={function noRefCheck() {}}>
                    Cancel
                </Button>
            </div>
            <div className="right-buttons">
                <Button variant='outlined' className="button" onClick={function noRefCheck() {}}>
                    Save to Draft
                </Button>
                <Button 
                    className="button" 
                    disabled={!isNextButtonEnabled} 
                    onClick={validateForm} 
                >
                    Next
                </Button>
            </div>
        </div>
        </>
    );
}

export default Settings;
