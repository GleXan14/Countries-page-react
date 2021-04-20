import { Component } from "react";

class Header extends Component {

    handleClick = (e) => {
        e.preventDefault();
        
        const body = document.querySelector('body');
        body.classList.toggle("dark");
    }
    
    render() {
        
        return(
            <div className="navbar navbarB navbar-expand-lg navbar-light d-flex justify-content-between  light-element dark-element px-4 shadow-sm">
                <div className="navbar-brand col-sm-4 d-flex justify-content-center justify-content-sm-start align-items-center">
                    <h1 className=" header-title light-text dark-text">Where in the world?</h1>
                </div>

                <div className="col-sm-6 d-flex justify-content-center justify-content-sm-end align-items-center">
                 <button className="btn btn-secondary mr-5 light-element light-text dark-text dark-element" onClick={this.handleClick.bind(this)}><i className="far fa-moon"></i> Dark mode</button>
                </div>
            </div>
        );
    }
}

export default Header;