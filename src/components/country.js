import { Component } from "react";
import { Link } from "react-router-dom";



class Country extends Component{


    render(){

      
        const {name, region, capital,population,flag} = this.props.country;

        const nameFiltered = name.replace(/[{()}]/g, '');
        
        return(
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <Link to={`info/${nameFiltered}`} className="card pointer light-element light-text dark-element dark-text shadow-sm">
                <img src={flag} alt="flag" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>

                    <p className="card-text"> <strong>Population: </strong>{population.toLocaleString()}</p>
                    <p className="card-text"> <strong>Region: </strong>{region ? region : "n/a"}</p>
                    <p className="card-text"> <strong>Capital: </strong>{capital ? capital : "n/a"}</p>
                    
                </div>
            </Link>
        </div>
        );
    }
}

export default Country;