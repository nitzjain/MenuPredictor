import React, {Component} from 'react';
import {AreaChart, linearGradient, defs, Area, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';


export default class Chart5 extends Component{

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
                <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ADD8E6" stopOpacity={0.9}/>
                    <stop offset="95%" stopColor="#ADD8E6" stopOpacity={0.2}/>
                </linearGradient>
                <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ADD8E6" stopOpacity={0.9}/>
                    <stop offset="95%" stopColor="#ADD8E6" stopOpacity={0.2}/>
                </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="Avg" stroke="#ADD8E6" fillOpacity={1} fill="url(#color)" />
        </AreaChart>
    };
};

/**
 * Created by Nrsimha on 5/11/17.
 */
