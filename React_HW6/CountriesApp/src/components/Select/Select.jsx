import React from 'react';

export default function Select({ label, options, onChange, value, required }) {
  return (
    <div>
      <label>{label}:</label>
      <select value={value || ""} onChange={(e) => onChange(e.target.value)} required={required}>
        <option value="" disabled>Select an option</option>
        {options.map((option) =>
          typeof option === 'object' ? (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ) : (
            <option key={option} value={option}>
              {option}
            </option>
          )
        )}
      </select>
    </div>
  );
}
