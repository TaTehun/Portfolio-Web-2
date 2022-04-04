import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
    return (
        <div>
            <label>{label}</label>
            <input {...input} style={{ marginBottom: '3px' }} />
            <div className = "red-text" style={{ fontSize: 'small', fontStyle: 'italic', marginBottom: '20px' }}>
            {touched && error}
            </div>
        </div>
    );
};