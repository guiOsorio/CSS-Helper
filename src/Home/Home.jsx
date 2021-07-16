import React, { Component } from 'react';
import './Home.css';

// set color to be the color of the value of the select
// https://www.pluralsight.com/guides/how-to-get-selected-value-from-a-mapped-select-input-in-react

const colorOptions = [
    {
        label: "Purple",
        value: "purple"
    },
    {
        label: "Pink",
        value: "pink"
    },
    {
        label: "Blue",
        value: "blue"
    },
    {
        label: "Red",
        value: "red"
    },
    {
        label: "Green",
        value: "green"
    }
];

class Home extends Component {
    state = {
        selectedColor: "purple"
    }

    handleChange = (e) => this.setState({ selectedColor: e.target.value });

    render() { 
        const { selectedColor } = this.state;
        return (
            <div className="home container" style={{ backgroundColor: selectedColor }}>
                <h1>HOME</h1>
                <form className="form"> 
                    <label htmlFor="bgColor">Background-color</label>
                    <select id="bgColor" value={this.state.color} onChange={this.handleChange}>
                        {colorOptions.map((option, index) => (
                            <option key={index} value={option.value}>{option.label}</option>
                        ))}
                    </select>
                    <div id="form-btns" className="form-element">
                        <button type="button" id="submit-btn" onClick={this.props.submit}>TEST IT!</button>
                        <button type="button" id="reset-btn" onClick={this.props.reset}>RESET</button>
                    </div>
                </form>
            </div>
        );
    }
}
 
export default Home;