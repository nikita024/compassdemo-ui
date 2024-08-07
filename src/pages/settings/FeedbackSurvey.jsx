import React, { useEffect, useState } from 'react';
import Input from '@empuls/dsm/core/input/Input';
import EditImg from '../../assets/images/Delete.svg';
import Button from '@empuls/dsm/core/button/Button';
import Dropdown from '@empuls/dsm/core/dropdown/Dropdown';
import { Delete20Regular } from '@fluentui/react-icons';
import { useNavigate } from 'react-router-dom';
import { Modal } from '@empuls/dsm';

const FeedbackSurvey = ({ isFeedBackSurveyOpen, setIsFeedBackSurveyOpen }) => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([{ id: 1, placeholder: 'Placeholder Text', value: '' }]);
  const [questionCount, setQuestionCount] = useState(1);
  const [whenToSendSurvey, setWhenToSendSurvey] = useState([]);
  const [activityScore, setActivityScore] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    console.log("questions", questions);
    validateForm();
  }, [questions, whenToSendSurvey, activityScore]);

  const validateForm = () => {
    
    const dropdownFilled = whenToSendSurvey.length > 0;
    const activityScoreFilled = activityScore.trim() !== '';
    setIsFormValid( dropdownFilled && activityScoreFilled);
  };

  const handleSave = () => {
    setIsFeedBackSurveyOpen(false);
  };

  const addQuestion = () => {
    const newQuestionCount = questionCount + 1;
    setQuestionCount(newQuestionCount);
    const newQuestions = [...questions, { id: newQuestionCount, placeholder: 'Placeholder Text', value: '' }];
    setQuestions(newQuestions);
  };

  const removeQuestion = (id) => {
    const newQuestions = questions.filter((question) => question.id !== id);
    setQuestions(newQuestions);
  };

  const handleDropdownQuestionChange = (id, event) => {
    const updatedQuestions = questions.map((question) =>
      question.id === id ? { ...question, value: event } : question
    );
    setQuestions(updatedQuestions);
  };

  const handleDropdownChange = (selectedOptions) => {
    setWhenToSendSurvey(selectedOptions.map(option => option.value));
  };

  const handleActivityScoreChange = (event) => {
    setActivityScore(event.target.value);
  };

  return (
    <Modal
      style={{ backgroundColor: '#EFF2F5' }}
      isOpen={isFeedBackSurveyOpen}
      onClose={() => {
        setIsFeedBackSurveyOpen(false);
      }}
      fullScreen
      padding={false}
      disableCloseButton={false}
      transitionDirection='up'
    >
      <div className="plan-theme">
        <div className="plan-theme-header">
          <h2 style={{ fontSize: '18px' }}>Add Feedback Survey</h2>
          <p style={{ fontSize: '16px' }}>
            By creating a feedback survey, you can collect feedback from participants on plan campaigns.
          </p>
        </div>
      </div>

      <div className="survey-card">
        {questions.map((question, index) => (
          <div className="survey-card-container" key={question.id}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ width: '3%', padding: "-2px", marginRight: '10px' }}>
                <div style={{ borderRadius: '50%', backgroundColor: "#246EF6", padding: '2px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{index + 1}</div>
              </div>
              <div style={{ width: '100%' }}>
                <Dropdown
                  placeholder='Select Option'
                  isCreatable={true}
                  value={question.value}
                  onChange={(e) => handleDropdownQuestionChange(question.id, e)}
                  options={[
                    { value: 'SUGGESTED QUESTIONS', label: 'SUGGESTED QUESTIONS' },
                    { value: 'How were the tasks given to you?', label: 'How were the tasks given to you?' },
                    { value: 'How were the rewards in this program?', label: 'How were the rewards in this program?' },
                    { value: 'Is the program something you would like to participate in?', label: 'Is the program something you would like to participate in?' }
                  ]}
                />
              </div>
              <div style={{ width: '3%' }}>
                {question.value ? (
                  <Delete20Regular
                    onClick={() => removeQuestion(question.id)}
                    style={{
                      marginLeft: '10px',
                      cursor: 'pointer',
                      color: '#246EF6',
                      width: '25px',
                      height: '25px'
                    }}
                  />
                ) : (
                  <div>
                    <img
                      src={EditImg}
                      alt="EditTheme"
                      style={{
                        marginLeft: '10px',
                        cursor: 'pointer',
                        width: '25px',
                        height: '25px'
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        <div className="surver-Add">
          <Button variant="plain" color="primary" onClick={addQuestion}>
            + Add Another Question
          </Button>
        </div>
        <div className="border-line"></div>

        <div className="inline-container" style={{ display: 'flex', marginTop: '20px' }}>
          <div style={{ width: '50%', marginRight: '10px' }}>
            <Dropdown
              isMulti={true}
              isCreatable
              placeholder="Start Of Program"
              label="When to send the Survey"
              options={[
                { value: 'Theresa Webb', label: 'Theresa Webb' },
                { value: 'Bessie Cooper', label: 'Bessie Cooper' },
                { value: 'Dianne Russell', label: 'Dianne Russell' },
                { value: 'Brooklyn Simmons', label: 'Brooklyn Simmons' },
                { value: 'Leslie Alexander', label: 'Leslie Alexander' },
              ]}
              required
              onChange={handleDropdownChange}
            />
          </div>

          <div style={{ width: '50%' }}>
            <Input
              className="my-class"
              style={{ width: '100%' }}
              label="Activity Score"
              onBlur={() => { }}
              onChange={handleActivityScoreChange}
              onFocus={() => { }}
              onKeyPress={() => { }}
              placeholder="Placeholder Text"
              value={activityScore}
            />
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
            disabled={!isFormValid}
          >
            Save
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default FeedbackSurvey;
