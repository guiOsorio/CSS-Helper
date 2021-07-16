import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
    render() { 
        return (
            <form className="form">
                <h2>STYLE YOUR BODY</h2>
                <div className="form-element">
                    <label htmlFor="bgColor">Background-color</label>
                    <select id="bgColor" defaultValue="purple">
                        <option value="purple">purple</option>  
                        <option value="pink">pink</option>
                        <option value="blue">blue</option>
                        <option value="red">red</option>
                        <option value="green">green</option>      
                    </select>
                </div>
                <div id="form-btns" className="form-element">
                    <button type="button" id="submit-btn" onClick={this.props.submit}>TEST IT!</button>
                    <button type="button" id="reset-btn" onClick={this.props.reset}>RESET</button>
                </div>
            </form>
        );
    }
}
 
export default Form;