import React, {Component} from 'react';
import {BarChart, linearGradient, defs, Bar, Legend, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';


export default class Chart2 extends Component{

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data

        };
    }

    render() {
        return <BarChart width={250} height={250} data={this.state.data}>
            <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ff0000" stopOpacity={0.9}/>
                    <stop offset="95%" stopColor="#ff0000" stopOpacity={0.2}/>
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.9}/>
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0.2}/>
                </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Bar dataKey="Positive"  fillOpacity={1} fill="url(#colorPv)" />
            <Bar dataKey="Negative"  fillOpacity={1} fill="url(#colorUv)"/>
        </BarChart>
    };
};



