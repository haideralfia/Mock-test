import { useState } from 'react';

const Body = () => {
  const [inputValue, setInputValue] = useState('');
  const [item, setItem] = useState([]);

  const handleItem = (e) => {
    setInputValue(e.target.value);
  };

  const addItems = () => {
    if (inputValue.trim() !== '') {
      setItem([...item, inputValue]);
      setInputValue('');
    }
  };
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
              ;
            </li>
          ))}
        </ol>
      </div>
      <div className="footer-section">
        <p className="footer-text">Number of item in the list {item.length}</p>
      </div>
    </>
  );
};

export default Body;
