import React, { useState } from 'react';
import Input from '@empuls/dsm/core/input/Input';
import { Checkbox, CheckboxGroup, Modal } from '@empuls/dsm';
import { Delete20Regular } from '@fluentui/react-icons';
import { Button } from '@empuls/dsm';
import Footer from '../../components/Footer';
import { useNavigate } from 'react-router-dom';

const SetupEstimator = ({ isSetupEstimatorOpen, setIsSetupEstimatorOpen }) => {
  const navigate = useNavigate();
  const [forms, setForms] = useState([{ id: Date.now(), field: 'Field 1', condition: '', display: false }]);

  const handleAddForm = () => {
    const newFieldNumber = forms.length + 1;
    setForms([...forms, { id: Date.now(), field: `Field ${newFieldNumber}`, condition: '', display: false }]);
  };

  const handleDeleteForm = (id) => {

    if (forms.length === 1) {
      return;
    }
    setForms(forms.filter(form => form.id !== id));
  };

  const handleChange = (id, field, value) => {
    setForms(forms.map(form => (form.id === id ? { ...form, [field]: value } : form)));
  };

  const handleSave = () => {
    // navigate('/settings');
    setIsSetupEstimatorOpen(false);
  };

  return (
    <Modal
      isOpen={isSetupEstimatorOpen} 
      onClose={() => {
        setIsSetupEstimatorOpen(false);
      }} 
      fullScreen
      padding={false} 
      disableCloseButton={false} 
      transitionDirection='up'
    >
    <div className="plan-theme">
      <div className="plan-theme-header">
        <h2 style={{ fontSize: '18px' }}>Setup Estimator</h2>
        <p style={{ fontSize: '16px' }}>
          Enter the User Inputs if you want to set up an Estimator for this plan and define the relationship between the User Inputs and the Metrics.
        </p>
      </div>

      <div className="estimator-card">
        {forms.map((form, index) => (
          <div key={form.id} className="estimator-card-container" style={{ marginBottom: '20px' }}>
            <div style={{ marginBottom: '20px' }}>
              <Input
                className="my-class"
                label={"Field " + (index + 1)}
                // value={form.field}
                onBlur={function noRefCheck() {}}
                onChange={(e) => handleChange(form.id, 'field', e.target.value)}
                onFocus={function noRefCheck() {}}
                onKeyPress={function noRefCheck() {}}
                placeholder="Placeholder Text"
              />
            </div>

            <div className="estimator-condition" style={{ marginBottom: '20px' }}>
              <Input
                className="my-class"
                label="Add a Condition"
                value={form.condition}
                onBlur={function noRefCheck() {}}
                onChange={(e) => handleChange(form.id, 'condition', e.target.value)}
                onFocus={function noRefCheck() {}}
                onKeyPress={function noRefCheck() {}}
                placeholder="Placeholder Text"
              />
            </div>

            <div className="estimator-checkbox" style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <CheckboxGroup direction="column" style={{ flexGrow: 1 }}>
                  <Checkbox
                    label="Display to Users"
                    checked={form.display}
                    onChange={() => handleChange(form.id, 'display', !form.display)}
                  />
                </CheckboxGroup>
                {index !== 0 && (
                  <Button variant="plain" color="primary" onClick={() => handleDeleteForm(form.id)}>
                    <Delete20Regular style={{ cursor: 'pointer' }} />
                    Delete
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
          <Button variant="plain" color="primary" onClick={handleAddForm}>
            + Add New
          </Button>
        </div>
      </div>
    </div>
    
    <div className="footer">
        <div className="left-buttons">
        </div>
        <div className="right-buttons">
            <Button 
              variant='outlined' 
              className="button" 
              onClick={handleSave}
            >
                Cancel
            </Button>
            <Button 
              className="button"
              onClick={handleSave} 
            >
                Save
            </Button>
        </div>
    </div>
    </Modal>
  );
};

export default SetupEstimator;
