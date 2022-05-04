import React  from 'react';
import Option from './option.js';

const Options = (props) => (
    <div>
    <div className='widget-header'>
    <h3 className='widget-header__tittle'>Your Options</h3>
    
    
        <button
        className=" button button--link" 
        onClick={props.handleDeleteOptions}>
        Remove all
        </button>
        </div>
        {props.options.length === 0 && <p className='widget__message'>Please add an Option to get started!</p>}
        {
            props.options.map((options, inedex) => (
            <Option 
            key={options} 
            optionsText={options}
            count = {inedex+1}
            handleDeleteOption = {props.handleDeleteOption}
            />
            ))
        }
    </div>
);

export default Options;
