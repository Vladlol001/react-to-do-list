import { Component } from 'react';

export default class AddTodoItem extends Component {
    state = {
        someText: '',
    };

    handleChange = (e) => {
        this.setState({ someText: e.target.value });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.someText);
        this.setState({ someText: '' });
    };

    render() {
        const { someText } = this.state;

        return (
            <form onSubmit={this.onSubmit} className="add__area">
                <input
                    value={someText}
                    onChange={this.handleChange}
                    className="input__add"
                    placeholder="add smt"
                />
                <button className="add__btn">Done</button>
            </form>
        );
    }
}
