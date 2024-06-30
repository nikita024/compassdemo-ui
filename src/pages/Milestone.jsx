import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Input from '@empuls/dsm/core/input/Input';
import AddForm from '../components/AddForm';
import Dropdown from '@empuls/dsm/core/dropdown/Dropdown';
import Radio, { RadioGroup } from '@empuls/dsm/core/radio/Radio';
import { Checkbox, CheckboxGroup } from '@empuls/dsm';
import Footer from '../components/Footer';
import editImg from '../assets/images/Edit.svg';

const rewardDropdownOptions = [
  { value: 'Theresa Webb', label: 'Theresa Webb' },
  { value: 'Bessie Cooper', label: 'Bessie Cooper' },
  { value: 'Dianne Russell', label: 'Dianne Russell' },
  { value: 'Brooklyn Simmons', label: 'Brooklyn Simmons' },
  { value: 'Leslie Alexander', label: 'Leslie Alexander' }
];

const Milestone = () => {
  const [showInput, setShowInput] = useState(false);
  const [addForms, setAddForms] = useState([{ id: 0, component: <AddForm key={0} /> }]);
  const [showRewardForm, setShowRewardForm] = useState(false);
  const [rewardType, setRewardType] = useState('');
  const [showPlaceholderInput, setShowPlaceholderInput] = useState(false);
  const [rewardAmountCondition, setRewardAmountCondition] = useState('');
  const [participants, setParticipants] = useState([]);
  const [selectedBadge, setSelectedBadge] = useState([]);
  const [selectedScores, setSelectedScores] = useState([]);
  const [savedRewards, setSavedRewards] = useState([]);

  const handleButtonClick = () => {
    setShowInput(!showInput);
  };

  const handleAdd = () => {
    const newAddFormId = addForms.length;
    setAddForms([...addForms, { id: newAddFormId, component: <AddForm key={newAddFormId} id={newAddFormId} deleteAddForm={deleteAddForm} /> }]);
  };

  const deleteAddForm = (id) => {
    setAddForms(addForms.filter(form => form.id !== id));
  };

  const handleAddReward = () => {
    setShowRewardForm(true);
  };

  const handleRewardTypeChange = (e) => {
    setRewardType(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    setShowPlaceholderInput(e.target.checked);
  };

  const handleRewardAmountConditionChange = (e) => {
    setRewardAmountCondition(e.target.value);
  };

  const handleParticipantsChange = (selectedOptions) => {
    setParticipants(selectedOptions || []);
  };

  const handleBadgeChange = (selectedOptions) => {
    setSelectedBadge(selectedOptions || []);
  };

  const handleScoresChange = (selectedOptions) => {
    setSelectedScores(selectedOptions || []);
  };

  const isSaveButtonDisabled = () => {
    if (participants.length === 0) {
      return true;
    }
    if (!rewardType) {
      return true;
    }
    if (rewardType === 'points' && !rewardAmountCondition) {
      return true;
    }
    if (rewardType === 'badges' && selectedBadge.length === 0) {
      return true;
    }
    if (rewardType === 'scores' && (selectedScores.length === 0 || !rewardAmountCondition)) {
      return true;
    }
    return false;
  };

  const handleSave = () => {
    const rewardData = {
      rewardType,
      rewardAmountCondition,
      selectedBadge,
      selectedScores
    };
    setSavedRewards([...savedRewards, rewardData]);
    setShowRewardForm(false);
  };

  const renderBadge = (rewardData, index) => {
    return (
      <div key={index} className="badge">
        <p> {rewardData.rewardType}</p>

        <span style={{ 
              margin: "0px 5px",
              borderRight: "2px solid #bababa"
         }}></span>

        {rewardData.rewardType === 'points' && (

        <p> {rewardData.rewardAmountCondition}</p>
        )}
        {rewardData.rewardType === 'badges' && (
          <p> {rewardData.selectedBadge.map(b => b.label).join(', ')}</p>
        )}
        {rewardData.rewardType === 'scores' && (
          <>
            <p> {rewardData.selectedScores.map(s => s.label).join(', ')}</p>
            <p>{rewardData.rewardAmountCondition}</p>
          </>
        )}
      </div>
    );
  };

  return (
    <>
      <div className="milestone-container" style={{ marginBottom: "100px", paddingBottom: "100px" }}>
        <Navbar name="Create Milestones" back={"/"} />

        <div className="accordion-container" style={{ marginBottom: "200px" }}>
          <Accordion className="accordion-item">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              className="accordion-header"
            >
              {" SDR Commission Pool >= 20 & < 40"}
            </AccordionSummary>
            <AccordionDetails className="accordion-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionDetails>
          </Accordion>
          <Accordion className="accordion-item">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              className="accordion-header"
            >
              {" SDR Commission Pool >= 40 & < 50"}
            </AccordionSummary>
            <AccordionDetails className="accordion-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionDetails>
          </Accordion>

          <Accordion defaultExpanded className="accordion-item">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
              className="accordion-header"
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span>Milestone</span>
              </div>
            </AccordionSummary>

            <AccordionDetails className="accordion-body">
              <div style={{ display: 'flex', flexDirection: 'column', borderRadius: '8px',
                 border: '1px solid #EFF2F5', padding: '25px 20px',boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                {addForms.map((form) => (
                  <React.Fragment key={form.id}>{form.component}</React.Fragment>
                ))}

                <div
                  style={{
                    width: '20%',
                    borderRadius: '25px',
                    border: '1px solid #C6FFEC',
                    padding: '5px',
                    textAlign: 'center',
                    backgroundColor: '#C6FFEC',
                  }}
                >
                  <Button variant='plain' color='primary' onClick={handleAdd} style={{padding:'5px 15px'}}>
                    + Add AND Condition
                  </Button>
                </div>
              </div>

              <div
                style={{
                  margin: '10px',
                  width: '20%',
                  borderRadius: '25px',
                  // border: '1px solid ',
                  padding: '5px ',
                  textAlign: 'center',
                  backgroundColor: '#E6EEFF'
                }}
              >
                <Button variant='plain' color='primary' onClick={""}>
                  + Add OR Condition
                </Button>
              </div>
              <div className="edit-option" >
                 <Button variant='plain' color='primary' onClick={() => console.log('button click')}>
               <div className="edit">   
                 <img src={editImg} alt="plan image" className="box-image" />
               
                    Edit Condition
               </div>
                  </Button>{' '}
                  &nbsp;
             </div>
             

              <div className="reward-btn">
                <Button variant='fill' color='primary' onClick={handleAddReward} style={{ backgroundColor: '#007bff', color: 'white',marginBottom:'10px' }}>
                  + Add a reward
                </Button>
              </div>

              {showRewardForm && (
              
                <div className="reward-section">
                  <h3 style={{ marginBottom: '15px' }}>Adding Rewards</h3>
                  <div className="reward-form">
                  <div className="participants">
                    <Dropdown
                      isMulti={true}
                      isCreatable
                      placeholder='select options'
                      label='Participants'
                      options={rewardDropdownOptions}
                      onChange={handleParticipantsChange}
                    />
                  </div>

                  <div style={{ marginBottom: '10px', fontSize: '12px' }}>
                    Reward Type
                  </div>
                  <RadioGroup direction='row' label='Reward Type'>
                    <Radio label='Points' name='radio' value='points' onChange={handleRewardTypeChange} />
                    <Radio label='Scores' name='radio' value='scores' onChange={handleRewardTypeChange} />
                    <Radio label='Badges' name='radio' value='badges' onChange={handleRewardTypeChange} />
                  </RadioGroup>

                  {rewardType === 'points' && (
                    <>
                      <div className="reward-text">
                        <Input
                          className="my-class"
                          label="Reward Amount or Condition "
                          onBlur={function noRefCheck() { }}
                          onChange={handleRewardAmountConditionChange}
                          onFocus={function noRefCheck() { }}
                          onKeyPress={function noRefCheck() { }}
                          placeholder="Placeholder Text"
                        />
                      </div>
                      <div className="check-box">
                        <CheckboxGroup direction='column'>
                          <Checkbox label='Cap-reward' onChange={handleCheckboxChange} />
                        </CheckboxGroup>
                        {showPlaceholderInput && (
                          <Input
                            className="my-class"
                            onBlur={function noRefCheck() { }}
                            onChange={function noRefCheck() { }}
                            onFocus={function noRefCheck() { }}
                            onKeyPress={function noRefCheck() { }}
                            placeholder="Placeholder Text"
                          />
                        )}
                      </div>
                    </>
                  )}
                  

                  {rewardType === 'scores' && (
                    <>
                      <div className="score-dropdown">
                        <Dropdown
                          isMulti={true}
                          isCreatable
                          placeholder='Select Option'
                          label='Select Score'
                          options={rewardDropdownOptions}
                          onChange={handleScoresChange}
                        />
                      </div>

                      <div className="reward-text">
                        <Input
                          className="my-class"
                          label="Reward Amount or Condition "
                          onBlur={function noRefCheck() { }}
                          onChange={handleRewardAmountConditionChange}
                          onFocus={function noRefCheck() { }}
                          onKeyPress={function noRefCheck() { }}
                          placeholder="Placeholder Text"
                        />
                      </div>
                      
                    </>
                  
                  )}

                  {rewardType === 'badges' && (
                    <>
                      <div className="badge-dropdown">
                        <Dropdown
                          isMulti={true}
                          isCreatable
                          placeholder='Select badge'
                          label='Select badge'
                          options={rewardDropdownOptions}
                          onChange={handleBadgeChange}
                        />
                      </div>
                    </>
                  )}
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px', color: 'white' }}>
                    <Button
                      variant='fill'
                      color='primary'
                      style={{ backgroundColor: '#007bff' }}
                      onClick={handleSave}
                      disabled={isSaveButtonDisabled()}
                    >
                      Save
                    </Button>
                  </div>
                </div>
              )}

          <div style={{ display: "flex", gap: "20px" }}>
              {savedRewards.map((rewardData, index) => renderBadge(rewardData, index))}
              </div>

            </AccordionDetails>
          </Accordion>
        </div>
       
      </div>

      <Footer />
      <style >{`
        .badge {
          display: flex;
          flex-direction: row;
          border: 1px solid #ccc;
          border-radius: 20px;
          padding: 8px 12px 8px 12px; 
          margin: 10px 0;
          background-color: #f9f9f9;
          gap:4px;
          height: 40px;
          width: fit-content;
        }
      `}</style>
     
    </>
    
  );
};

export default Milestone;
