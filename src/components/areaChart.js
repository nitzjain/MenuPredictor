import React, {Component} from 'react';
import {AreaChart, linearGradient, defs, Area, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';


export default class Chart1 extends Component{

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data

        };
    }

    render() {
        return <AreaChart width={730} height={250} data={this.state.data}
                          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
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
            <Area type="monotone" dataKey="positive" stroke="#ff0000" fillOpacity={1} fill="url(#colorPv)" />
            <Area type="monotone" dataKey="negative" stroke="#82ca9d" fillOpacity={1} fill="url(#colorUv)" />
        </AreaChart>
    };
};

