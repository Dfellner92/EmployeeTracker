import React from "react";

export default class Form extends React.Component {
    state = {
        name: ""
    }



    handleChange = e => {
        this.setState({name: e.target.value}, () => {
            this.props.createRecommendations(this.state.name);
        });
    }

    render() {
        return (
            <form>
                <input onChange={this.handleChange} value={this.state.name}>
                </input>
                <button>
                    search by name
                </button>
            </form>
        )
    }
}