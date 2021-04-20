import { Component } from "react";
import Country from "./country";



class Countries extends Component{
    
    
    render() {

        const countries = this.props.countries;

        return(
            <div className="col-12 p-5 row">
                {

                    countries.map(country => (
                    <Country
                        key = {country.id}
                        country = {country}
                        
                    />
                    ))
                }

            </div>
        );

        
    }
}

export default Countries;