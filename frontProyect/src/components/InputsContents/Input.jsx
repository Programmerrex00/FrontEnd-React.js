import React from 'react';

const Input = ({ type, label, value, onChange, options, ...rest }) => {
  return (



    <div className="input-container">
      {type === 'select' ? (
        <select value={value} onChange={onChange} {...rest}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        
      ) : (
        <input type={type} value={value} onChange={onChange} {...rest} />
      )}
    </div>



  );
};

export default Input;