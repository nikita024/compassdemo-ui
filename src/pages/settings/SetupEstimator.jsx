import React, { useState } from 'react';
import Input from '@empuls/dsm/core/input/Input';
import { Checkbox, CheckboxGroup } from '@empuls/dsm';
import { Delete20Regular } from '@fluentui/react-icons';
import { Button } from '@empuls/dsm';

const SetupEstimator = () => {
  const [forms, setForms] = useState([{ id: Date.now(), field: '', condition: '', display: false }]);

  const handleAddForm = () => {
    const newFieldNumber = forms.length + 1;
    setForms([...forms, { id: Date.now(), field: `Field ${newFieldNumber}`, condition: '', display: false }]);
  };

  const handleDeleteForm = (id) => {
    // Prevent deleting the first form
    if (forms.length === 1) {
      return;
    }
    setForms(forms.filter(form => form.id !== id));
  };

  const handleChange = (id, field, value) => {
    setForms(forms.map(form => (form.id === id ? { ...form, [field]: value } : form)));
  };

  return (
    <div className="plan-theme">
      <div className="plan-theme-header">
        <h2 style={{ fontSize: '18px' }}>Setup Estimator</h2>
        <p style={{ fontSize: '14px' }}>
          Enter the User Inputs if you want to set up an Estimator for this plan and define the relationship between the User Inputs and the Metrics.
        </p>
      </div>

      <div className="estimator-card">
        {forms.map(form => (
          <div key={form.id} className="estimator-card-container" style={{ marginBottom: '20px' }}>
            <div style={{ marginBottom: '20px' }}>
              <Input
                className="my-class"
                label={form.field}
                value={form.field}
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
                {forms.length > 1 && (
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
  );
};

export default SetupEstimator;