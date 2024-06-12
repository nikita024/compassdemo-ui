import React, { useState } from 'react';
import Input from '@empuls/dsm/core/input/Input';
import Dropdown from '@empuls/dsm/core/dropdown/Dropdown';
import Radio, { RadioGroup } from '@empuls/dsm/core/radio/Radio';
import { useDropzone } from 'react-dropzone';
import ShapeImg from "../assets/images/Shape.svg";
import { Button } from '@empuls/dsm';
import { DeleteFilled } from '@fluentui/react-icons';

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

function ParticipantsGroupForm({ onDelete }) {
    const [showAutomaticallyForm, setShowAutomaticallyForm] = useState(false);
    const [files, setFiles] = useState([]);

    const handleRadioChange = (e) => {
        setShowAutomaticallyForm(e.target.value === "Automatically");
    };

    const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
        onDrop: (acceptedFiles) => {
            setFiles([...files, ...acceptedFiles]);
        }
    });

    const handleFileCancel = (index) => {
        setFiles(files.filter((file, i) => i !== index));
    };

    return (
        <div>
            <div className="Add">
                <Input
                    className="my-class"
                    label="Name this Group of Participants*"
                    placeholder="Enter Plan Name"
                />
            </div>
            <div className="sub">
                <RadioGroup direction="row" onChange={handleRadioChange}>
                    <Radio name="a" value="Automatically" label="Automatically" checked={showAutomaticallyForm} />
                    <div style={{ marginRight: "10px" }}>
                        <img src={ShapeImg} alt="ShapeImg" className="shape" />
                    </div>
                    <Radio name="a" value="Manually" label="Manually" checked={!showAutomaticallyForm} />
                    <img src={ShapeImg} alt="ShapeImg" className="shape" />
                </RadioGroup>
            </div>

            <div>
                {showAutomaticallyForm ? (
                    <Dropdown
                        isMulti={true}
                        isCreatable
                        placeholder="Select Option"
                        label="Add Condition*"
                        options={[
                            { value: 'Theresa Webb', label: 'Theresa Webb' },
                            { value: 'Bessie Cooper', label: 'Bessie Cooper' },
                            { value: 'Dianne Russell', label: 'Dianne Russell' },
                            { value: 'Brooklyn Simmons', label: 'Brooklyn Simmons' },
                            { value: 'Leslie Alexander', label: 'Leslie Alexander' }
                        ]}
                    />
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
            <div className="delBtn">
                <Button 
                    variant='plain' 
                    color='primary' 
                    onClick={onDelete} 
                    startIcon={<DeleteFilled size={18} fill='#0245F0' />}
                >
                    Delete Group
                </Button>
            </div>
        </div>
    );
}

export default ParticipantsGroupForm;
