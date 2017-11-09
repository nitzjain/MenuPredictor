import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import {debounce} from 'throttle-debounce';
import '../pages/App.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
let axios = require('axios');
import Chart1 from './areaChart';
import Chart2 from './barChart';
import Chart3 from './picharts';
import Chart4 from './barChart2';
import Chart5 from './areaChart2';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.onUpdateInput = debounce(100,this.onUpdateInput.bind(this));
        this.query = this.query.bind(this);
        this.state = {
            dataSource : [],
            data: {},
            quesString: '',
            location: '',
            queried: false,
            search: "Search",
            error: "",
            chart1: false,
            chart2: false,
            chart3: false,
            chart4: false,
            chart5: false,
            chart6: false
        };

    }

    handleExpandChange = (event, expanded) => {
        this.setState({expanded: expanded});
    };

    handleToggle = (event, toggle) => {
        console.log(event.target.id);
        var id = event.target.id;
        this.setState({
        [event.target.id] : toggle
        });
    };

    handleExpand = (event) => {
        this.setState({expanded: true});
    };

    handleReduce = (event) => {
        this.setState({expanded: false});
    };

    onUpdateInput(inputValue) {
        // natural.LancasterStemmer.attach();
        let words = inputValue.split(',');
        if(inputValue.length === 0){
            console.log('yay');
            this.setState({
                queried: false
            })
        } else {
            this.setState({
                quesString: words[0],
                location: words[1].replace(/\s+/g, '')
            });
        }


    }



    query(){
        // let data = this.state.vocabulary;
        let change = this.props.change;
        let that = this;

        this.setState({
            queried: true,
            search: "Search2"
        });
        axios.post('http://localhost:6565/submit', {
            question: this.state.quesString,
            location: this.state.location
        })
            .then(function (response) {
                if(response.data.data !== "no") {
                    change(true);
                    console.log(response.data.data);
                    that.setState({
                        data: response.data.data,
                        error: ""
                    });
                } else {
                    that.setState({
                        error: "Sorry the business you are looking for is not found. Please check the name."
                    });
                }

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    renderCharts() {
        if(this.state.queried) {
            if(this.state.data.length === 0) {
                return <div className="loader"> Loading..... </div>

            } else {
                return <ReactCSSTransitionGroup
                    transitionName="example"
                    transitionAppear={true}
                    transitionEnterTimeout={300}
                    transitionAppearTimeout={500}
                    transitionLeaveTimeout={300}>
                    <br />
                    <br />
                    <MuiThemeProvider muiTheme={getMuiTheme()}>
                        <Card expanded={this.state.chart1} onExpandChange={this.handleExpandChange}>
                            <CardTitle title="Positive Vs Negative Reviews" subtitle="Over the years." />
                                <Toggle
                                    id="chart1"
                                    toggled={this.state.chart1}
                                    onToggle={this.handleToggle}
                                />
                            <CardMedia
                                expandable={true}
                            >

                                <div className="chartsModule">
                                    <div className="chart">  <Chart1 data={this.state.data.chart1} /></div>
                                </div>

                            </CardMedia>
                            <CardTitle title="Positive Vs Negative Reviews" subtitle="Over the years." expandable={true} />
                            <CardText expandable={true}>
                                This graph explains the trend of positive and nagative reviews over the years.
                            </CardText>
                        </Card>


                    </MuiThemeProvider>
                    <br />
                    <br />
                    <MuiThemeProvider muiTheme={getMuiTheme()}>
                        <Card expanded={this.state.chart2} onExpandChange={this.handleExpandChange}>
                            <CardTitle title="Positive Vs Negative Reviews" subtitle="Total." />
                            <Toggle
                                id="chart2"
                                toggled={this.state.chart2}
                                onToggle={this.handleToggle}
                            />
                            <CardMedia
                                expandable={true}
                            >

                                <div className="chartsModule">
                                    <div className="chart">   <Chart2 data={this.state.data.chart2} /></div>
                                </div>

                            </CardMedia>
                            <CardTitle title="Positive Vs Negative Reviews" subtitle="Total." expandable={true} />
                            <CardText expandable={true}>
                                This graph explains the trend of positive and nagative reviews in total.
                            </CardText>
                        </Card>


                    </MuiThemeProvider>
                    <br />
                    <br />
                    <MuiThemeProvider muiTheme={getMuiTheme()}>
                        <Card expanded={this.state.chart3} onExpandChange={this.handleExpandChange}>
                            <CardTitle title="Top words in Positive Reviews" subtitle="Positive Reviews." />
                            <Toggle
                                id="chart3"
                                toggled={this.state.chart3}
                                onToggle={this.handleToggle}
                            />
                            <CardMedia
                                expandable={true}
                            >

                                <div className="chartsModule">
                                    <div className="chart2"><Chart3 data={this.state.data.chart3} /></div>
                                </div>

                            </CardMedia>
                            <CardTitle title="Top words in Positive Reviews" subtitle="Positive Reviews." expandable={true} />
                            <CardText expandable={true}>
                                This graph shows the distribution of the top words in Positive Reviews.
                            </CardText>
                        </Card>

                    </MuiThemeProvider>
                    <br />
                    <br />
                    <MuiThemeProvider muiTheme={getMuiTheme()}>
                        <Card expanded={this.state.chart4} onExpandChange={this.handleExpandChange}>
                            <CardTitle title="Top words in Negative Reviews" subtitle="Negative Reviews." />
                            <Toggle
                                id="chart4"
                                toggled={this.state.chart4}
                                onToggle={this.handleToggle}
                            />
                            <CardMedia
                                expandable={true}
                            >

                                <div className="chartsModule">
                                    <div className="chart2"><Chart3 data={this.state.data.chart4} /></div>
                                </div>

                            </CardMedia>
                            <CardTitle title="Top words in Negative Reviews" subtitle="Negative Reviews." expandable={true} />
                            <CardText expandable={true}>
                                This graph shows the distribution of the top words in Negative Reviews.
                            </CardText>
                        </Card>

                    </MuiThemeProvider>
                    <br />
                    <br />
                    <MuiThemeProvider muiTheme={getMuiTheme()}>
                        <Card expanded={this.state.chart5} onExpandChange={this.handleExpandChange}>
                            <CardTitle title="Rating Distribution" subtitle="Over the Years." />
                            <Toggle
                                id="chart5"
                                toggled={this.state.chart5}
                                onToggle={this.handleToggle}
                            />
                            <CardMedia
                                expandable={true}
                            >

                                <div className="chartsModule">
                                    <div className="chart">  <Chart5 data={this.state.data.chart5} /></div>
                                </div>

                            </CardMedia>
                            <CardTitle title="Rating Distribution" subtitle="Over the Years." expandable={true} />
                            <CardText expandable={true}>
                                This graph shows the distribution of the Ratings over the years.
                            </CardText>
                        </Card>


                    </MuiThemeProvider>
                    <br />
                    <br />
                    <MuiThemeProvider muiTheme={getMuiTheme()}>
                        <Card expanded={this.state.chart6} onExpandChange={this.handleExpandChange}>
                            <CardTitle title="Rating Distribution" subtitle="total." />
                            <Toggle
                                id="chart6"
                                toggled={this.state.chart6}
                                onToggle={this.handleToggle}
                            />
                            <CardMedia
                                expandable={true}
                            >

                                <div className="chartsModule">
                                    <div className="chart">   <Chart4 data={this.state.data.chart6} /></div>
                                </div>

                            </CardMedia>
                            <CardTitle title="Rating Distribution" subtitle="Total." expandable={true} />
                            <CardText expandable={true}>
                                This graph shows the distribution of the Ratings.
                            </CardText>
                        </Card>


                    </MuiThemeProvider>
                    <br />
                    <br />


                </ReactCSSTransitionGroup>
            }
        } else {
            return <ReactCSSTransitionGroup
                transitionName="example"
                transitionAppear={true}
                transitionEnterTimeout={300}
                transitionAppearTimeout={500}
                transitionLeaveTimeout={300}>
                <div className="setting2"> Type in your Business Name and press enter .....</div>
            </ReactCSSTransitionGroup>
        }
    }

    render() {
        return <div>
            <div className={this.state.search}>
            <MuiThemeProvider muiTheme={getMuiTheme()}>
            <AutoComplete
                floatingLabelText="Type your Business Name here."
                id="searchBox"
                fullWidth={true}
                onNewRequest={this.query}
                dataSource={this.state.dataSource}
                onUpdateInput={this.onUpdateInput} />
        </MuiThemeProvider>
                <ReactCSSTransitionGroup
                    transitionName="example"
                    transitionAppear={true}
                    transitionEnterTimeout={300}
                    transitionAppearTimeout={500}
                    transitionLeaveTimeout={300}>
                    <div className="setting3"> {this.state.error}</div>
                </ReactCSSTransitionGroup>
            </div>

            <div className="graph">
            {this.renderCharts()}
            </div>

        </div>
    }
}

export default SearchBar;