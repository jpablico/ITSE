import { useRef } from 'react';

function Form() {
  const nameInputRef = useRef();
  const programSelectRef = useRef();

  function handleSubmitForm(event) {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const selectedProgram = programSelectRef.current.value;
  
    console.log('Name:', enteredName);
    console.log('Program:', selectedProgram);
  }

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="form-control">
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" ref={nameInputRef} />
      </div>
      <div className="form-control">
        <label htmlFor="program">Choose your program</label>
        <select id="program" ref={programSelectRef}>
          <option value="basics">The Basics</option>
          <option value="advanced">Advanced Concepts</option>
          <option value="mastery">Mastery</option>
        </select>
      </div>
      <button>Submit</button>
    </form>
  );
}

export default Form;
