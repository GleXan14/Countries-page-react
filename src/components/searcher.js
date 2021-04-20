import React, { Component } from "react";


class Searcher extends Component{

    
    searchRef = React.createRef();

    handleData = (e) => {
        e.preventDefault();

        const word = this.searchRef.current.value;
        const filter = document.getElementById('regionFilter');
        console.log(filter.value);

        this.props.search(word, filter.value);

    }

    render(){

        return( 
            <form className="row justify-content-between"  onSubmit={this.handleData.bind(this)}>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input ref ={this.searchRef} type="text" className="form-control form-control-lg light-element light-text dark-element dark-text shadow-sm" placeholder="Search for a country..."/>
                    </div>

                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-lg btn-danger btn-block light-element light-text dark-element dark-text shadow-sm" value="buscar" />
                    </div>
                </div>

                
                <div className="form-group light-text dark-text">
                    <label  htmlFor="regionFilter" ><strong>Filter by region:</strong></label>
                    <select className="form-control light-element light-text dark-element dark-text shadow-sm" id="regionFilter">
                        <option></option>
                        <option>Africa</option>
                        <option>Americas</option>
                        <option>Asia</option>
                        <option>Europe</option>
                        <option>Oceania</option>
                    </select>
                </div>
                
                
                
            </form>
        );
    }
}

export default Searcher;