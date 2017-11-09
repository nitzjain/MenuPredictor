import React, { Component } from 'react';
import SearchBar from '../components/searchBar';
import logo from '../logo.svg';
import './App.css';

class Home extends Component {

    constructor() {
        super();
        this.state = {
            app :"App",
            header : "App-header",
            logo: "App-logo",
            search: "Search"

        }
    }


  changeClass(change){
      if(change){
        this.setState({
            app :"App2",
            header : "App-header2",
            logo: "App-logo2"
        });
      }
  }

  render() {
    return (
      <div className={this.state.app}>
        <div className={this.state.header}>
            <img src={logo} className={this.state.logo} alt="logo" />
          <h2>Business Analyser</h2>
        </div>
          <br /> <br />
          <div>
          <SearchBar change={this.changeClass.bind(this)}/>
          </div>
      </div>
    );
  }
}

export default Home;
