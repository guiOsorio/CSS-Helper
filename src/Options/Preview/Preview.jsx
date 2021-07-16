import React, { Component } from 'react';
import './Preview.css';
import { FaExpand } from 'react-icons/fa';

class Preview extends Component {
    render() { 
        return (
            <div className={this.props.prevClass}>
                <div className={this.props.titleClass}>
                    <h2>PREVIEW</h2>
                    <i onClick={this.props.onClick}><FaExpand /></i>
                </div>
                <div id={this.props.id} className={this.props.outputClass}>

                </div>
            </div>
        );
    }
}
 
export default Preview;