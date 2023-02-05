import React from 'react';

const Select = () => {
    return (
        <select className="form-select form-select-lg">
            <option selected>New Posts</option>
            <option value="1">Most View</option>
            <option value="2">Most Chat</option>
        </select>
    );
};

export default Select;
