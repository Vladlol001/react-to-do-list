import { Component } from 'react';

export default class SearchPanel extends Component {
    state = {
        someText: '',
        someBtn: '',
    };

    handleChange = (e) => {
        const value = e.target.value;
        this.setState({ someText: value });
        this.props.searchFunc(value);
    };

    setActiveBtn = (e) => {
        const value = e.target.innerText;
        this.setState({ someBtn: value });
        this.props.btnFilterFunc(value);
    };

    render() {
        const { someText } = this.state;
        return (
            <div className="input__area">
                <input
                    onChange={this.handleChange}
                    value={someText}
                    className="input__search"
                    placeholder="search"
                />
                <div className="input__btns">
                    <button onClick={this.setActiveBtn} className="first-btn">
                        All
                    </button>
                    <button onClick={this.setActiveBtn}>Active</button>
                    <button onClick={this.setActiveBtn} className="last-btn">
                        Done
                    </button>
                </div>
            </div>
        );
    }
}
