import React, { Component } from 'react'

export default class Filter extends Component {
    handleChange = (e) => {
        this.props.handleFilter(e.target.value)
    }
    render() {
        return (
            <div onChange={this.handleChange} className="ui focus input"><input type="text" placeholder="Search..." /></div>
        )
    }
}
