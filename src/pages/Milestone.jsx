import React,{useState} from 'react';
import Navbar from '../components/Navbar';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import EditImg from '../assets/images/Edit.svg'; 
import Input from '@empuls/dsm/core/input/Input';
import AddForm from '../components/AddForm';
import Dropdown from '@empuls/dsm/core/dropdown/Dropdown';
import Radio, { RadioGroup } from '@empuls/dsm/core/radio/Radio';

const rewardDropdownOptions = [{
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


const Milestone = () => {
  const [showInput, setShowInput] = useState(false);
  const [addForms, setAddForms] = useState([{
    id: 0,
    component: <AddForm key={0} />
  }]);

  const handleButtonClick = () => {
    setShowInput(!showInput);
  }

  const handleAdd = () => {
    const newAddFormId = addForms.length;
    setAddForms([...addForms, { id: newAddFormId, component: <AddForm key={newAddFormId} id={newAddFormId} deleteAddForm={deleteAddForm} /> }]);
  }

  const deleteAddForm = (id) => {
    setAddForms(addForms.filter(form => form.id !== id));
  }

  return (
    <div className="milestone-container">
      <Navbar name="Create Milestones" back={"/"} />

      <div>
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
              
               
              {/* <div>
              <Button variant='plain' color='primary' onClick={handleButtonClick}>
                <img src={EditImg} alt="edit icon" className="box-image" />
                </Button>{' '}
                 
            </div> */}

            {/* <div>
              <Button variant='plain' color='primary' onClick={handleButtonClick}>
                Add Description 
              </Button>{' '}
            </div>
            */}
           </div> 
          </AccordionSummary>

           <AccordionDetails className="accordion-body">
            <div style={{ display: 'flex', flexDirection: 'column', border: '1px solid #ccc', padding: 10 }}>

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
                  backgroundColor: '#C6FFEC'
                }}
              >
                <Button variant='plain' color='primary' onClick={handleAdd}>
                + Add AND Condition
              </Button>{' '}
                

              </div>
            </div>
            

            <div
              style={{
                margin: '10px',
                width: '20%',
                borderRadius: '25px',
                border: '1px solid #C6FFEC',
                padding: '5px ',
                textAlign: 'center',
                backgroundColor: 'lightblue'
              }}
            >
               <Button variant='plain' color='primary' onClick={""}>
                + Add OR Condition
              </Button>{' '}
             
            </div>
            {showInput && (
              <Input
                className="my-class"
                label="Field label"
                onBlur={function noRefCheck() { }}
                onChange={function noRefCheck() { }}
                onFocus={function noRefCheck() { }}
                onKeyPress={function noRefCheck() { }}
                placeholder="Placeholder Text"
              />
            )}
             <div className= "reward-btn">
              <Button variant='fill' color='primary'>
              + Add a reward
            </Button>
            </div>

          <div className="reward-section">  

            <div style={{
              height: '120px'
            }}>

                <h3 style={{marginBottom: '15px'}}>Adding Rewards</h3>
                  <Dropdown 
                    isMulti={true} 
                    isCreatable
                    placeholder='select options' 
                    label='participants' 
                    options={rewardDropdownOptions} 
                  />
                </div>

                <div style={{marginBottom: '10px', fontSize: '12px'}}>
                  Reward Type
                </div>
                <RadioGroup direction='row' label='Reward Type'>
                  <Radio label='Points' name='radio' value='v1'  onChange={e => console.log(e.target.value)} />
                  <Radio label='Scores' name='radio' value='v2'  onChange={e => console.log(e.target.value)} />
                  <Radio label='badges' name='radio' value='v3'  onChange={e => console.log(e.target.value)} />
                </RadioGroup>

                <div className="reward-text">
                  <Input
                    className="my-class"
                    label="Reward Amount or Condition "
                    onBlur={function noRefCheck(){}}
                    onChange={function noRefCheck(){}}
                    onFocus={function noRefCheck(){}}
                    onKeyPress={function noRefCheck(){}}
                    placeholder="Placeholder Text"
                  />
                </div>

              </div>

          </AccordionDetails>
        </Accordion>

        
       
      </div>

      {/* <div>
              <Button variant='plain' color='primary' onClick={handleButtonClick}>
                <img src={EditImg} alt="edit icon" className="box-image" />
                </Button>{' '}
                 
            </div>

            <div>
              <Button variant='plain' color='primary'onClick={handleButtonClick} >
                Add Description
              </Button>{' '}
            </div>
       */}
              
      
      
    </div>
  );
};

export default Milestone;
