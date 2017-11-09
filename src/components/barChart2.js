import React, {Component} from 'react';
import {BarChart, linearGradient, defs, Bar, Legend, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';


export default class Chart4 extends Component{

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data

        };
    }

    render() {
        return <BarChart width={600} height={300} data={this.state.data}
                         margin={{top: 5, right: 30, left: 20, bottom: 5}}>
            <XAxis dataKey="name"/>
            <YAxis/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Legend />
            <Bar dataKey="TOTAL" fill="#8884d8" />
        </BarChart>
    };
};



