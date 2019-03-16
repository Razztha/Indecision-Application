import React from 'react';
import Option from './Option';

const Options = (props) =>
(
    <div>
        <div className="widget__header">
        <h3 className="widget__header__title">Your options</h3>
        <button className="button button__link" onClick={props.handleDeleteOptions}>Remove all</button>
        </div>
        <div>
        {props.options.length === 0 && <p className="widget__message">Please add an option to get started!</p>}
        </div>
        {props.options.map((option, index) => <Option handleDeleteOptionOne={props.handleDeleteOptionOne} option={option} key={option} count={index+1} />)}
    </div>
)

export default Options;