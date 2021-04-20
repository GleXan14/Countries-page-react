import { Component } from "react";
import { Link } from "react-router-dom";



class CountryInfo  extends Component{


    


    render(){

        
        const {name,topLevelDomain,capital,region,subregion,
        population,borders,nativeName,currencies,languages,flag} = this.props.country

        const countries = this.props.countries;
        

        const countriesArray = [];
        countries.map(country=>(
            countriesArray.push({
                name: country.name,
                code: country.alpha3Code
            })
        ))


        const countriesName = [];

        borders.map(border=>(
            countriesArray.map(country => (
               border == country.code ? countriesName.push(country.name) : null
            ))
        ))
            
        
        return(
            <div className="container justify-content-center my-4 light-text dark-text">

                <Link to="/" className="row justify-content-start mb-4">
                    <button type="button" className="btn btnBack light-element dark-element dark-text shadow-sm"><i className="fas fa-long-arrow-alt-left"></i>Back</button>
                </Link>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6 pr-4">
                        <img className="w-100 d-flex justify-content-center align-items-center" src={flag} alt="Flag"></img>
                    </div>
                    <div className="col-12 col-md-6">
                        <div>
                            <h1>{name}</h1>
                        </div>
                        <div className="d-flex flex-column flex-sm-wrap my-4">
                            <span><strong>Native Name: </strong>{nativeName}</span>
                            <span><strong>Population: </strong>{population.toLocaleString()}</span>
                            <span><strong>Region: </strong>{region}</span>
                            <span><strong>Sub Region: </strong>{subregion}</span>
                            <span><strong>Capital: </strong>{capital ? capital : "n/a"}</span>
                            <span><strong>Top Level Domain: </strong>
                                {topLevelDomain.map(domain => (
                                    domain + ' '
                                ))}
                            </span>
                            <span><strong>Currencies: </strong>
                                    {currencies.map(curren => (
                                        curren.name + ', '
                                    ))}
                            </span>
                            <span><strong>Languages: </strong>
                                        {languages.map(lang => (
                                            lang.name+ ', '
                                        ))}
                            </span>
                        </div>
                        <div className="row borderCountries">
                            <h5>Border Countries: </h5>       
                            {countriesName.map(countryBorder => (
                                <Link to={`/info/${countryBorder.replace(/[{()}]/g, '')}`}>
                                    <span className="light-element dark-element light-text dark-text shadow-sm">{countryBorder}</span>
                                </Link>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        );

    }
}

export default CountryInfo;