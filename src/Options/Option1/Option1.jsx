import React, { Component } from 'react';
import './Option1.css';
import Form from '../Form/Form';
import Code from '../Code/Code';
import Preview from '../Preview/Preview';


class Option1 extends Component {
    state = {
        clicked: false,
        bgColor: "purple",
        fullScreenPrev: false
    }
    
    showOutput = () => {
        let selectedColor = document.getElementById("bgColor");
        this.setState({ clicked: true, bgColor: selectedColor.value })
    }

    reset = () => this.setState({ clicked: false })

    fullScreenPrev = () => this.setState({ fullScreenPrev: !this.state.fullScreenPrev })

    render() {
        const { clicked, bgColor, fullScreenPrev } = this.state;
        return (
            <div className={fullScreenPrev ? "containerFull option1" : "container option1"}>
                {
                    fullScreenPrev ?
                        <div className="main row">
                            <div className="col-12">
                                <Preview
                                    titleClass="titleFull"
                                    prevClass="previewFull"
                                    id={clicked ? bgColor : ""}
                                    outputClass={clicked ? "outputFull purple" : "output"} 
                                    onClick={this.fullScreenPrev} 
                                />
                            </div>
                        </div>
                    :
                        <div className="main row">
                            <div className="side left col-6">
                                <div className="title-form">
                                    <h1>HELPER DEV</h1>
                                    <Form submit={this.showOutput} reset={this.reset} />
                                </div>
                            {clicked ? <Code bgColor={bgColor} /> : ""}
                            </div>
                            <div className="side right col-6">
                                <Preview
                                    titleClass="title"
                                    prevClass="preview"
                                    id={clicked ? bgColor : ""}
                                    outputClass={clicked ? "output" : "output"} 
                                    onClick={clicked ? this.fullScreenPrev : ""} 
                                />
                            </div>
                        </div>
                }
            </div>
        );
    }
}
 
export default Option1;