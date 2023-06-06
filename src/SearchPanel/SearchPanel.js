import React, { Component } from "react"

class SearchPanel extends Component{

    constructor(props){
        super(props)
        this.state = {
            term: ''
        }
        this.onUptadeSearch = this.onUptadeSearch.bind(this)
    }

    onUptadeSearch(e) {
        const term = e.target.value

        this.setState({term: term})
        this.props.onUptadeSearch(term)
    }
    
    render(){
    return(
        <>
        <input
        type="text"
        className="form-control search-input"
        placeholder="Search by Posts"
        onChange={this.onUptadeSearch}
        />
        </>
    )
    }
}
export default SearchPanel