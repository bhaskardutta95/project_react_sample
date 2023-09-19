
import React, { useState } from 'react';

const SecondForm = () => {
  const [currentFormIndex, setCurrentFormIndex] = useState(0);
  const [formData, setFormData] = useState([
    { name: '', age: '' },
    { education: '' },
    { address: '' }
  ]);
  const [submittedData, setSubmittedData] = useState(null);

  const handleInputChange = (field, value) => {
    const updatedFormData = [...formData];
    updatedFormData[currentFormIndex][field] = value;
    setFormData(updatedFormData);
  };

  const handleNext = () => {
    if (currentFormIndex < 2) {
      setCurrentFormIndex(currentFormIndex + 1);
    }
  };

  const handleBack = () => {
    if (currentFormIndex > 0) {
      setCurrentFormIndex(currentFormIndex - 1);
    }
  };

  const handleSubmit = () => {
    setSubmittedData([...formData]);
  };

  return (
    <div>
      <form>
        <h2>Form {currentFormIndex + 1}</h2>
        { currentFormIndex=== 0 && (
          <>
            <input
              type="text"
              placeholder="Name"
              value={formData[currentFormIndex].name}
              onChange={(e) => handleInputChange('name', e.target.value)}
            />
            <input
              type="text"
              placeholder="Age"
              value={formData[currentFormIndex].age}
              onChange={(e) => handleInputChange('age', e.target.value)}
            />
          </>
        )}
        {currentFormIndex === 1 && (
          <input
            type="text"
            placeholder="Education"
            value={formData[currentFormIndex].education}
            onChange={(e) => handleInputChange('education', e.target.value)}
          />
        )}
        {currentFormIndex === 2 && (
          <input
            type="text"
            placeholder="Address"
            value={formData[currentFormIndex].address}
            onChange={(e) => handleInputChange('address', e.target.value)}
          />
        )}
        {currentFormIndex > 0 && (
          <button type="button" onClick={handleBack}>
            Back
          </button>
        )}
        {currentFormIndex < 2 && (
          <button type="button" onClick={handleNext}>
            Next
          </button>
        )}
        {currentFormIndex === 2 && (
          <button type="button" onClick={handleSubmit}>
            Submit
          </button>
        )}
      </form>
      {submittedData && (
        <div>
          <h2>Submitted Data</h2>
          <ul>
            {submittedData.map((data, index) => (
              <li key={index}>
                {Object.entries(data).map(([key, value]) => (
                  <div key={key}>
                    <strong>{key}: </strong>
                    {value}
                  </div>
                ))}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SecondForm;
