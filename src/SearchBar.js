import React, { Component } from 'react'

export default class SearchBar extends Component {
    state = {
        byline: "",
        booktitle: ""
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault()
        this.props.handleSubmit(this.state)
    }

    render() {
        // console.log(this.state)
        return (
            <div className="ui container">
                <form className="ui form" onSubmit={this.handleOnSubmit}>
                    <div className="field">
                        <label>Byline</label><input onChange={this.handleOnChange} name="byline" placeholder="Byline" />
                    </div>

                    <div className="field">
                        <label>BookTitle</label><input onChange={this.handleOnChange} name="booktitle" placeholder="BookTitle" />
                    </div>

                    {/* <div class="field">
                        <div class="ui checkbox">
                            <input type="checkbox" class="hidden" readonly="" tabindex="0" /><label
                            >I agree to the Terms and Conditions</label>
                        </div>
                    </div> */}
                    <button type="submit" className="ui button">Submit</button>
                </form>
            </div>
        )
    }
}
