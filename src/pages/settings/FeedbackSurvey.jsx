import React, { useEffect, useState } from 'react';
import Input from '@empuls/dsm/core/input/Input';
import EditImg from '../../assets/images/Delete.svg';
import Button from '@empuls/dsm/core/button/Button';
import Dropdown from '@empuls/dsm/core/dropdown/Dropdown';
import { Delete20Regular } from '@fluentui/react-icons';

const FeedbackSurvey = () => {
  const [questions, setQuestions] = useState([{ id: 1, placeholder: 'Placeholder Text', value: '' }]);
  const [questionCount, setQuestionCount] = useState(1);

  useEffect(() => {
    console.log("questions", questions);
  }, [questions]);

  const addQuestion = () => {
    const newQuestionCount = questionCount + 1;
    setQuestionCount(newQuestionCount);
    const newQuestions = [...questions, { id: newQuestionCount, placeholder: 'Placeholder Text',  value: '' }];
    setQuestions(newQuestions);
  };

  const removeQuestion = (id) => {
    const newQuestions = questions.filter((question) => question.id !== id);
    setQuestions(newQuestions);
  };

  const handleInputChange = (id, event) => {
    const updatedQuestions = questions.map((question) =>
      question.id === id ? { ...question, value: event.target.value } : question
    );
    setQuestions(updatedQuestions);
  };

  return (
    <>
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
              <div style={{ width: '3%', padding: "2px", marginRight: '10px' }}>
                <div style={{ borderRadius: '50%', backgroundColor: "#246EF6", padding: '2px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{index + 1}</div>
              </div>
              <div style={{ width: '100%' }}>
                <Input
                  className="my-class"
                  onBlur={() => {}}
                  onChange={(e) => handleInputChange(question.id, e)}
                  onFocus={() => {}}
                  onKeyPress={() => {}}
                  placeholder={question.placeholder}
                  value={question.value}
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
            {/* {question.value && (
              <div style={{ marginTop: '10px', color: 'green' }}>
                Input has value: {question.value}
              </div>
            )} */}
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
            />
          </div>
          <div style={{ width: '50%' }}>
            <Input
              className="my-class"
              style={{ width: '100%' }}
              label="Activity Score"
              onBlur={() => {}}
              onChange={() => {}}
              onFocus={() => {}}
              onKeyPress={() => {}}
              placeholder="Placeholder Text"
            />
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="left-buttons">
        </div>
        <div className="right-buttons">
            <Button variant='outlined' className="button" onClick={function noRefCheck() {}}>
                Cancel
            </Button>
            <Button className="button" >
                Save
            </Button>
        </div>
      </div>
    </>
  );
};

export default FeedbackSurvey;
