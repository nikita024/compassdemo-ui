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
import { Checkbox, CheckboxGroup, Tag } from '@empuls/dsm';
import Footer from '../components/Footer';
import editImg from '../assets/images/Edit.svg';
import { Edit20Regular } from '@fluentui/react-icons';
import FooterMilestone from '../components/FooterMilestone';
import { useNavigate } from 'react-router-dom';
// import EditIcon from '@mui/icons-material/Edit';

const rewardDropdownOptions = [
  { value: 'Theresa Webb', label: 'Theresa Webb' },
  { value: 'Bessie Cooper', label: 'Bessie Cooper' },
  { value: 'Dianne Russell', label: 'Dianne Russell' },
  { value: 'Brooklyn Simmons', label: 'Brooklyn Simmons' },
  { value: 'Leslie Alexander', label: 'Leslie Alexander' }
];

const Milestone = () => {
  const navigate = useNavigate();
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
  const [milestoneText, setMilestoneText] = useState('Milestone');
  const [editMode, setEditMode] = useState(false);
  const [newMilestoneText, setNewMilestoneText] = useState('');
 const [milestoneDesc, setMilestoneDesc] = useState('');
  const [editModeDesc, setEditModeDesc] = useState(false);
  const [newMilestoneDesc, setNewMilestoneDesc] = useState('');
  const [accordionCount, setAccordionCount] = useState(1);
  const [addFormCount, setAddFormCount] = useState(1);
  const [isRewardFormComplete, setIsRewardFormComplete] = useState(false);
  const [addFormState, setAddFormState] = useState({
    condition: null,
    operator: null,
    value: ''
  });

  const [editRewardIndex, setEditRewardIndex] = useState(null);
  const [editRewardData, setEditRewardData] = useState(null);
  

  const isFormComplete = addFormState.condition && addFormState.operator && addFormState.value;

  const handleButtonClick = () => {
    setShowInput(!showInput);
  };

  const handleAdd = () => {
    // const newAddFormId = addForms.length;
    // setAddForms([...addForms, { id: newAddFormId, component: <AddForm key={newAddFormId} id={newAddFormId} deleteAddForm={deleteAddForm} /> }]);
    setAddFormCount(addFormCount + 1);
  };

  const deleteAddForm = (id) => {
    // setAddForms(addForms.filter(form => form.id !== id));
    setAddFormCount(addFormCount - 1);
  };

  const handleAddReward = () => {
    setShowRewardForm(true);
    setIsRewardFormComplete(false);
    setEditRewardIndex(null);
    setEditRewardData(null);
    setRewardType('');
    setRewardAmountCondition('');
    setSelectedBadge([]);
    setSelectedScores([]);
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
      selectedScores,
      
    };

    if (editRewardIndex !== null) {
      const updatedRewards = [...savedRewards];
      updatedRewards[editRewardIndex] = rewardData;
      setSavedRewards(updatedRewards);
      setEditRewardIndex(null);
      setEditRewardData(null);
    } else {
      setSavedRewards([...savedRewards, rewardData]);
    }
    // setSavedRewards([...savedRewards, rewardData]);
    setShowRewardForm(false);
    setRewardType('');
    setRewardAmountCondition('');
    setSelectedBadge([]);
    setSelectedScores([]);
    setIsRewardFormComplete(true);
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
           <Button 
          variant='fill' 
          color='primary' 
          onClick={() => handleEditReward(index) } 
          style={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}
        >
          <Edit20Regular style={{ marginRight: '5px' }} />
         </Button>
        </div>
        
    );
  };

  const handleEditReward = (index) => {
    const rewardData = savedRewards[index];
    setEditRewardIndex(index);
    setEditRewardData(rewardData);
    setRewardType(rewardData.rewardType);
    setRewardAmountCondition(rewardData.rewardAmountCondition);
    setSelectedBadge(rewardData.selectedBadge);
    setSelectedScores(rewardData.selectedScores);
    setParticipants([]);  
    setShowRewardForm(true);
  };
  

  const handleEditClick = (e) => {
    e.stopPropagation();
    setEditMode(true);
  };

  const handleEditSave = (e) => {
    e.stopPropagation();
    setMilestoneText(newMilestoneText);
    setEditMode(false);
  };

  const handleEditCancel = (e) => {
    e.stopPropagation();
    setEditMode(false);
    setNewMilestoneText(milestoneText);
  };

  const handleEditDescClick = (e) => {
    e.stopPropagation(); 
    setEditModeDesc(true);
  };

  const handleEditDescSave = (e) => {
    e.stopPropagation();
    setMilestoneDesc(newMilestoneDesc);
    setEditModeDesc(false);
  };

  const handleEditDescCancel = (e) => {
    e.stopPropagation();
    setEditModeDesc(false);
    setNewMilestoneDesc(milestoneDesc);
  };

  const handleNext = () => {
    navigate('/settings');
  };

  const renderAccordion = (index) => (
    <div style={{ margin: "15px 0px" }} key={index}>
      <Accordion defaultExpanded className="accordion-item" style={{ width: "96%", margin: "auto" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id={`panel${index}-header`}
          className="accordion-header"
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div className='accordion-number'>{index}</div>
                <div>
                  {editMode ? (
                    <AccordionDetails className="accordion-body" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
                      <div style={{ width: '100%' }}>
                        <Input
                          value={newMilestoneText}
                          onChange={(e) => setNewMilestoneText(e.target.value)}
                          placeholder="Enter new milestone text"
                          // limit={50}
                          required
                          // style={{ minWidth: '1000px' }}
                        />
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'flex-end', }}>
                        <Button variant='outlined' color='primary' onClick={(e) => handleEditSave(e)} style={{ marginRight: '10px', }}>
                          Save
                        </Button>
                        <Button variant='outlined' color='error' onClick={(e) => handleEditCancel(e)}>
                          Cancel
                        </Button>
                      </div>
                    </AccordionDetails>
                  ) : (
                    <div style={{ fontSize: '16px' }}>{milestoneText}</div>
                  )}
                </div>
              {!editMode && <Edit20Regular style={{ cursor: 'pointer' }}  onClick={(e) => handleEditClick(e)} />}
            </div>

            <div>
              {editModeDesc ? (
                  <AccordionDetails className="accordion-body" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '100%' }}>
                    <Input
                      value={newMilestoneDesc}
                      onChange={(e) => setNewMilestoneDesc(e.target.value)}
                      placeholder="Enter new milestone description"
                      // limit={50}
                      required
                      // style={{ minWidth: '1000px' }}
                    />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'flex-end', }}>
                    <Button variant='outlined' color='primary' onClick={(e) => handleEditDescSave(e)} style={{ marginRight: '10px' }}>
                      Save
                    </Button>
                    <Button variant='outlined' color='error' onClick={(e) => handleEditDescCancel(e)}>
                      Cancel
                    </Button>
                  </div>
                </AccordionDetails>
              ) : (
                <div style={{ marginLeft: '30px', fontSize: '16px', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: `${milestoneDesc ? '10px' : '0'}` }}>
                  <div style={{ fontWeight: '500' }}>{milestoneDesc}</div>
                  <div onClick={(e) => handleEditDescClick(e)} style={{ color: '#246EF6', fontSize: '14px' }}>
                    {milestoneDesc ? 'Edit description' : 'Add description'}
                  </div>
                </div>
              )}
            </div>
          </div>
        </AccordionSummary>

        <div className="accordion-divider" style={{border:'1px solid #EFF2F5',marginBottom:'5px'}}></div>

        <AccordionDetails className="accordion-body">
          <div style={{ display: 'flex', flexDirection: 'column', borderRadius: '8px',
            border: '1px solid #EFF2F5', padding: '25px 20px',boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
            {/* {addForms.map((form) => (
              <React.Fragment key={form.id}>{form.component}</React.Fragment>
            ))} */}

            <AddForm 
              id={1} 
              deleteAddForm={deleteAddForm} 
              addFormCount={addFormCount}
              addFormState={addFormState}
              setAddFormState={setAddFormState}  
            />

            {addFormCount > 1 && (
              <>
                <div
                  style={{                    
                    display: 'flex',
                    justifyContent: 'flex-start',
                    marginTop: '-20px',
                    marginBottom: '10px',
                  }}
                >
                  <div style={{ 
                      borderRadius: '50px',
                      backgroundColor: "#C6FFEC",
                      padding: '5px 15px',
                      color: "#00B287",
                      fontWeight: '600',
                    }}
                  >
                    AND
                  </div>
                </div> 
                <AddForm 
                  id={2} 
                  deleteAddForm={deleteAddForm} 
                  addFormCount={addFormCount}
                  addFormState={addFormState}
                  setAddFormState={setAddFormState} 
                />
              </>
            )}

            {addFormCount < 2 && (
              <div
                style={{
                  display: 'flex',
                  justifyContent: "flex-start"
                }}
                onClick={handleAdd}
              >
                <div style={{
                  backgroundColor: '#C6FFEC',
                  borderRadius: '25px',
                  border: '1px solid #C6FFEC',
                  textAlign: 'center',
                  cursor: 'pointer',
                  padding: '8px 30px',
                  letterSpacing: '1px',
                  fontSize: '16px',
                  fontWeight: '500',
                  color: "#00B287"
                }}>
                  + Add <span style={{ fontWeight: '700' }}>AND</span> Condition
                </div>
              </div>
            )}
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: "flex-start",
              margin: '10px',
              padding: '5px ',
            }}
          >
            <div style={{
              display : 'flex',
              alignItems: 'center',
              backgroundColor: '#E6EEFF',
              borderRadius: '25px',
              // border: '1px solid #C6FFEC',
              textAlign: 'center',
              cursor: 'pointer',
              padding: '8px 30px',
              letterSpacing: '1px',
              fontSize: '16px',
              fontWeight: '500',
              color: "#246EF6",
              gap: '10px',
             
            }}>
              + Add <span style={{ fontWeight: '700' }}>OR</span> Condition
            </div>
            <button style={{
                background: 'none',
                border: 'none',
                padding:'10px',
                cursor: 'pointer',
                color: '#246EF6',
                fontSize: '14px',
                marginLeft: '1180px',
                }}>
                  {/* <div className="erase" style={{cursor: 'pointer'}}> */}
              <img src={editImg} alt="edit" />
              {/* </div> */}
             Edit Condition 
            </button>
                </div>
        

          <div className="accordion-divider" style={{border:'1px solid #EFF2F5',margin:'15px'}}></div>
        
        
          {savedRewards.length === 0 ? (
            <div className="reward-btn">
                <Button variant='fill' color='primary' onClick={handleAddReward} style={{ backgroundColor: '#007bff', color: 'white', textTransform: 'capitalize' }}>
                + Add a reward
              </Button>
            </div>
          ) : null}

          {showRewardForm && (
          
            <div className="reward-section">
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' , justifyContent: 'space-between'}}>
                <h3 style={{marginBottom:'0' }}>Adding Rewards</h3>
              </div> 

              <div className="reward-form">
                <div className="participants">
                  <Dropdown
                    isMulti={true}
                    isCreatable
                    placeholder='select options'
                    label='Participants'
                    options={rewardDropdownOptions}
                    onChange={handleParticipantsChange}
                    // value={participants}
                  />
                </div>

                <div style={{ marginBottom: '10px', fontSize: '12px' }}>
                  Reward Type
                </div>
                <RadioGroup direction='row' label='Reward Type'>
                  <Radio label='Points' name='radio' value='points' onChange={handleRewardTypeChange}  checked={rewardType === 'points'}/>
                  <Radio label='Scores' name='radio' value='scores' onChange={handleRewardTypeChange}  checked={rewardType === 'scores'}/>
                  <Radio label='Badges' name='radio' value='badges' onChange={handleRewardTypeChange}  checked={rewardType === 'badges'}/>
                </RadioGroup>

                {rewardType === 'points' && (
                  <>
                    <div className="reward-text">
                      <Input
                        className="my-class"
                        label="Reward Amount or Condition "
                        onBlur={function noRefCheck() { }}
                        onChange={handleRewardAmountConditionChange}
                        value={rewardAmountCondition}
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
                        value={selectedScores}
                      />
                    </div>

                    <div className="reward-text">
                      <Input
                        className="my-class"
                        label="Reward Amount or Condition "
                        onBlur={function noRefCheck() { }}
                        onChange={handleRewardAmountConditionChange}
                        value={rewardAmountCondition}
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
                        value={selectedBadge}
                      />
                    </div>
                  </>
                )}
                </div>

                 <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px', color: 'white', }}>
                  <Button
                    variant='fill'
                    color='primary'
                    style={{ backgroundColor: '#007bff' }}
                    onClick={handleSave}
                    disabled={isSaveButtonDisabled()  }
                  >
                    Save
                  </Button>
                  </div>
              </div>
            )}

            <div style={{ display: "flex", gap: "20px" }}>
              {savedRewards.map((rewardData, index) => renderBadge(rewardData, index))}
            </div>

            {savedRewards && savedRewards.length > 0 && (
              <div className="reward-btn">
                <Button variant='fill' color='primary' onClick={handleAddReward} style={{ backgroundColor: '#007bff', color: 'white', textTransform: 'capitalize' }}>
                  + Add another reward
                </Button>
              </div>
            )}

        </AccordionDetails>
      </Accordion>
    </div>
  );

  return (
    <>
      <div className="milestone-container" style={{ marginBottom: "100px", paddingBottom: "100px" }}>
        <Navbar name="Create Milestones" back={"/"} />

        <div className="accordion-container" style={{ marginBottom: "200px" }}>

        {[...Array(accordionCount)].map((_, index) =>  renderAccordion(index + 1))}

        <div style={{ marginTop: '10px', marginRight: '35px', textAlign: 'right' }}>
            <Button variant='outlined' color='primary' onClick={() => setAccordionCount(accordionCount + 1)} style={{ textTransform: 'capitalize'}}>
                + Add {accordionCount + 1} milestone
            </Button>
        </div>
      </div>
    </div>
     <FooterMilestone
        isRewardFormComplete={isRewardFormComplete}
        isFormComplete={isFormComplete}
        handleNext={handleNext}
      />
     <style >{`
        .badge {
          display: flex;
          flex-direction: row;
          border: 1px solid #ccc;
          border-radius: 20px;
          padding: 8px 16px 8px 16px; 
          margin: 10px 18px;
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
