import React, { Component } from 'react';
import { colorChoice } from './helpers';
import './Box.css'

class Box extends Component{
    static defaultProps = {
        colors : ['pink', 'lightblue', 'lightcoral', 'mediumpurple', 'palevioletred', 'plum', 'sandybrown']
    };

    constructor(props) {
        super(props);
        this.state = { color : colorChoice(this.props.colors) };
        this.ChangeColor = this.ChangeColor.bind(this);
    };

    ChangeColor(){
        let newColor;

        do {
            newColor = colorChoice(this.props.colors);
        } while (newColor === this.state.color)

        this.setState({color : newColor});
    } 

    render() {
        return (
            <div className="Box" style={{backgroundColor: this.state.color}} onClick={this.ChangeColor}>
            </div>
        );
    }
} 

export default Box;