
import React from 'react';
import Select from 'react-select';
import "./style.css";

let options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

const MyComponent = () => (<Select options={options} className={"Searchbar"}></Select>);
export default MyComponent;