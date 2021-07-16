import React, { Component } from 'react';
import './Code.css';

class Code extends Component {
    render() { 
        return (
            <div className="code">
                <h2>CSS CODE</h2>
                <p>* &#123; margin: 0; padding: 0 &#125;</p>
                <p>body &#123; background-color: {this.props.bgColor} &#125;</p>
                <div className="nocode">
                    <h4>Only want to see the preview? Click the expand icon next to the preview title.</h4>
                </div>
            </div>
        );
    }
}
 
export default Code;
