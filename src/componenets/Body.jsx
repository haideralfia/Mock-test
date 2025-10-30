import { useState } from 'react';

const Body = () => {
  // State to manage input value
  const [inputValue, setInputValue] = useState('');

  // State to manage list of items
  const [item, setItem] = useState([]);

  // Function to handle input change
  const handleItem = (e) => {
    setInputValue(e.target.value);
  };

  // Function to add item to the list and update input state
  const addItems = () => {
    if (inputValue.trim() !== '') {
      setItem([...item, inputValue]);
      setInputValue('');
    }
  };
  // Function to delete item from the list and update the list
  const deleteItem = (index) => {
    const updatedItems = item.filter((_, i) => i !== index);
    setItem(updatedItems);
  };

  return (
    <>
      <div className="input-section">
        <input
          className="input"
          type="text"
          value={inputValue}
          placeholder="Add your groceries"
          onChange={handleItem}
        />
        <button className="add-button" onClick={addItems}>
          <p className="add-text">Add Items</p>
        </button>
      </div>

      <div className="list-section">
        <ol className="list-items">
          {item.map((item, index) => (
            <li className="list" key={index}>
              <span className="list-element">{item}</span>
              <button
                className="delete-button"
                onClick={() => deleteItem(index)}
              >
                <p className="delete-text"> Delete </p>
              </button>
            </li>
          ))}
        </ol>
      </div>

      <div className="footer-section">
        <p className="footer-text">Number of item in your list {item.length}</p>
      </div>
    </>
  );
};

export default Body;
