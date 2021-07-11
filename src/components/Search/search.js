import React from "react";
import "./style.css";

function Search(props) {
    return (
        <form>
            <div className="form-group">
                <input type="text" onChange={props.handleInputChange}
                    value={props.search} name="search" className="form-control"
                    placeholder="Search by first or last name" id="search" />
            </div>
            <div className="container">
                <div className="center">
                    <button onClick={props.handleFormSubmit}
                        className="btn btn-primary mt-3" id="search">
                        SEARCH
                    </button>
                </div>
            </div>
        </form>
    );
}

export default Search;