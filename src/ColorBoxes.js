import React, { Component} from 'react';
import './ColorBoxes.css'
import Box from './Box';

class ColorBoxes extends Component{
    static defaultProps = {
            amount : 16,
    };
    render() {
        const boxes = Array.from({ length: this.props.amount}).map(() => (
            <Box />
            ));
        return(
            <div className="ColorBoxes">
                {boxes}
            </div>
        );
    }
}

export default ColorBoxes;