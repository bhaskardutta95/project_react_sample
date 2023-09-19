import React, { useState } from 'react';

const HomeForm = () => {
  const [currentFormIndex, setCurrentFormIndex] = useState(0);
  const [formData, setFormData] = useState([
    { field1: '', field2: '', field3: '' },
    { field1: '', field2: '', field3: '' },
    { field1: '', field2: '', field3: '' }
  ]);

  const handleInputChange = (formIndex, fieldIndex, value) => {
    const updatedFormData = [...formData];
    updatedFormData[formIndex][`field${fieldIndex + 1}`] = value;
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

  return (
    <div>
      <form>
        <h2>Form {currentFormIndex + 1}</h2>
        <input
          type="text"
          value={formData[currentFormIndex].field1}
          onChange={(e) => handleInputChange(currentFormIndex, 0, e.target.value)}
        />
        <input
          type="text"
          value={formData[currentFormIndex].field2}
          onChange={(e) => handleInputChange(currentFormIndex, 1, e.target.value)}
        />
        <input
          type="text"
          value={formData[currentFormIndex].field3}
          onChange={(e) => handleInputChange(currentFormIndex, 2, e.target.value)}
        />
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
      </form>
    </div>
  );
};

export default HomeForm;
