import React, { useState , useEffect} from 'react';
import Input from '@empuls/dsm/core/input/Input';
import Dropdown from '@empuls/dsm/core/dropdown/Dropdown';
import Radio, { RadioGroup } from '@empuls/dsm/core/radio/Radio';
import { useDropzone } from 'react-dropzone';
import ShapeImg from "../assets/images/Shape.svg";
import { Button } from '@empuls/dsm';
import { DeleteFilled } from '@fluentui/react-icons';
// import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

const dropdownOptions = [
    { value: 'Theresa Webb', label: 'Theresa Webb' },
    { value: 'Bessie Cooper', label: 'Bessie Cooper' },
    { value: 'Dianne Russell', label: 'Dianne Russell' },
    { value: 'Brooklyn Simmons', label: 'Brooklyn Simmons' },
    { value: 'Leslie Alexander', label: 'Leslie Alexander' }
]

function ParticipantsGroupForm({ 
    index, 
    onDelete, 
    group, 
    setGroup, 
    setIsManualFiles, 
    setIsAutomaticDropdownSelected,
    isFormComplete,
    setIsFormComplete
}) {
    const [showAutomaticallyForm, setShowAutomaticallyForm] = useState(true);
    const [files, setFiles] = useState([]);
    const [conditions, setConditions] = useState([]);

    useEffect(() => {
        if (!showAutomaticallyForm && files.length == 0) {
            setIsManualFiles(true);
        } else if (!showAutomaticallyForm && files.length > 0) {
            setIsManualFiles(false);
        }

        if (showAutomaticallyForm) {
            setIsManualFiles(false);
        }
    }, [ showAutomaticallyForm, setIsManualFiles, files ]);

    useEffect(() => {
        if (conditions.length === 0) {
            setIsAutomaticDropdownSelected(true);
        } else {
            setIsAutomaticDropdownSelected(false);
        }
    }, [conditions, setIsAutomaticDropdownSelected]);

    useEffect(() => {
        checkFormCompletion();
    }, [group, showAutomaticallyForm, files]);

    const checkFormCompletion = () => {
        if (
            group.groupName &&
            (showAutomaticallyForm ? conditions.length > 0 : files.length > 0)
        ) {
            setIsFormComplete(true);
        } else {
            setIsFormComplete(false);
        }
    };

    const handleRadioChange = (e) => {
        setShowAutomaticallyForm(e.target.value === "Automatically");
        // setShowAutomaticallyForm(isAutomatically);
        // if (!isAutomatically) {
        //     onFileUploadChange(false);
        // }
    };

    const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
        onDrop: (acceptedFiles) => {
            setFiles([...files, ...acceptedFiles]);
            // onFileUploadChange(true);
        }
    });

    const handleFileCancel = (index) => {
        setFiles(files.filter((file, i) => i !== index));
        // setFiles(newFiles);
        // if (newFiles.length === 0) {
        //     onFileUploadChange(false);
        // }
    };

    const handleGroupNameChange = (e) => {
        setGroup({
            ...group,
            groupName: e.target.value
        });
    };

    const handleConditionChange = (selectedOptions) => {
        setConditions(selectedOptions);
        setGroup({
            ...group,
            conditions: selectedOptions
        });
    }

  
    return (
        <div>
            <div className="Add">
                <Input
                    className="my-class"
                    label={`Name Group ${index + 1}`}
                    placeholder="Enter name for group"
                    required
                    value={group.groupName}
                    onChange={handleGroupNameChange}
                />
            </div>
            <div className="sub">
                <RadioGroup direction="row" onChange={handleRadioChange}>
                    <Radio name={`radio-${index}`} value="Automatically" label="Automatically" checked={showAutomaticallyForm} />
                    <div style={{ marginRight: "10px" }}>
                        <img src={ShapeImg} alt="ShapeImg" className="shape" />
                    </div>
                    <Radio name={`radio-${index}`} value="Manually" label="Manually" checked={!showAutomaticallyForm} />
                    <img src={ShapeImg} alt="ShapeImg" className="shape" />
                </RadioGroup>
            </div>

            <div>
                {showAutomaticallyForm ? (
                    <div className= "drop" style={{marginBottom: "20px"}}>
                        <Dropdown
                            isMulti={true}
                            isCreatable
                            placeholder="Select Option"
                            label="Add Condition"
                            options={dropdownOptions}
                            value={group.conditions}  
                            onChange={handleConditionChange}
                            required 
                        />
                    </div>
                ) : (
                    <div>
                        {files && files.length ? (
                            files.map((file, index) => (
                                <div className='dropzone' key={file.path}>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <div style={{ marginRight: '10px', backgroundColor: '#DEFFE7', width: '50px', height: '50px' }}></div>
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
                            <div {...getRootProps({ className: 'dropzone' })}>
                                <input {...getInputProps()} />
                                <p>Drag & drop files here, or <span className="upload">Choose file</span> to upload</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
            {index && index !== 0 ? (
                <div className="delBtn">
                    <Button 
                        variant='plain' 
                        color='primary' 
                        onClick={() => onDelete(index)} 
                        startIcon={<DeleteFilled size={18} fill='#0245F0' />}
                    >
                        Delete Group
                    </Button>
                </div>
            ) : null}
        </div>
    );
}

export default ParticipantsGroupForm;
