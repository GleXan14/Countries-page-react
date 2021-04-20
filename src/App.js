
import React, { Component } from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Countries from './components/countries';
import CountryInfo from './components/countryInfo';
import Header from './components/header';
import Searcher from './components/searcher';


const URL = 'https://restcountries.eu/rest/v2';


class App extends Component {

  state = {
    word : '',
    countries : [],
    allCountries : [],
    countryClicked: []
    
  }


  //Connection with the countries API
  getAPIData = (url,regionFilter) =>{

    fetch(url)
    .then(response => response.json())
    .then(data => this.getFilterRegion(data,regionFilter))

  }


  //get all countries
  getAll = (region) =>{
     let url = `${URL}/all`;

     fetch(url)
     .then(response => response.json())
     .then(data => this.setState({allCountries : data}))

     this.getAPIData(url,region);
  }

  //filter the countries by region
  getFilterRegion = (data, region) =>{
    let newCountries = [];
    let allCountries = data;

    if(region === ''){
      this.setState({countries : allCountries});
    }else{

      allCountries.map(country =>{
        if(country.region === region){
          
          newCountries.push(country);
        }else{
          
        }
      });
  
      this.setState({countries : newCountries});
    }
  }

  //for the searcher
  get = (word, region) =>{

    if(word === ''){
      this.getAll(region);
     
    }else{
      let url = `${URL}/name/${word}`;

      this.getAPIData(url,region);
    }

    
  }
  

  componentDidMount(){
    this.getAll('');
    
  }

  render(){

    

    return (
      <Router>
        <React.Fragment>
        <div className="container-fluid p-0">
            <Header/>
           
            <div className="container">
              <Switch>
                  <Route path='/' exact>
                  
                        <div className="justify-content-center align-items-center mx-5 mt-5">
                          <Searcher
                            search = {this.get}
                            countries = {this.state.countries}
                          />
                        </div>
                      <div className="row justify-content-center">
                        <Countries
                            countries = {this.state.countries}
                        />
                      </div>
                  </Route>

                  {this.state.allCountries.map(country => (
                    <Route path={`/info/${country.name}`}>
                      <CountryInfo
                        country = {country}
                        countries ={this.state.allCountries} 
                      />
                    </Route>
                  ))}
              </Switch>

            </div>

        </div>
        </React.Fragment>
      </Router>
    );

  }
}

export default App;
