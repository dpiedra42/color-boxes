import React, { Component } from 'react';
import './Box.css'

class Box extends Component{
    constructor(props) {
        super(props);
        this.state = { color : 'pink' };
    }
    render() {
        return (
            <div className="Box" style={{backgroundColor: this.state.color}}>
            </div>
        );
    }
} 

export default Box;