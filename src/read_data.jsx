import React, { useState } from 'react';

function MyComponent() {
  const [inputs, setInputs] = useState({ firstName: '', lastName: '', age: '' });

  // handle input change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  // handle form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: handle form submission
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" name="firstName" value={inputs.firstName} onChange={handleInputChange} />
        </label>
        <label>
          Last Name:
          <input type="text" name="lastName" value={inputs.lastName} onChange={handleInputChange} />
        </label>
        <label>
          Age:
          <input type="text" name="age" value={inputs.age} onChange={handleInputChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {/* TODO: display table with input values */}
    </div>
  );
}

export default MyComponent;
