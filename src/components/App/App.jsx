import AppHeader from '../AppHeader/AppHeader';
import SearchPanel from '../SearchPanel/SearchPanel';
import TodoList from '../TodoList/TodoList';
import '../../index.css';
import { Component } from 'react';
import AddTodoItem from '../AddTodoItem/AddTodoItem';

export default class App extends Component {
    maxId = 100;

    state = {
        data: [
            this.createItem('js'),
            this.createItem('react'),
            this.createItem('angular'),
        ],
        filterRequest: '',
        btnFilter: '',
    };

    createItem(someText) {
        return {
            id: this.maxId++,
            someText,
            done: false,
            important: false,
        };
    }

    toggleProp(arr, id, propName) {
        const newArr = arr.data.map((item) =>
            item.id === id ? { ...item, [propName]: !item[propName] } : item
        );
        return newArr;
    }

    onLabelClick = (id) => {
        this.setState((state) => {
            const newItem = this.toggleProp(state, id, 'done');
            return { data: newItem };
        });
    };

    onImporatntBtn = (id) => {
        this.setState((state) => {
            const newItem = this.toggleProp(state, id, 'important');
            return { data: newItem };
        });
    };

    deleteItem = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.filter((item) => item.id !== id),
            };
        });
    };

    searchFunc = (someText = '') => {
        this.setState({ filterRequest: someText });
    };

    btnFilterFunc = (someText = '') => {
        this.setState({ btnFilter: someText });
    };

    search = (items, filter = '') => {
        if (filter.length === 0) return items;

        return items.filter(
            (item) => item.someText.indexOf(filter.toLowerCase()) >= 0
        );
    };

    filter = (items, filterBtn = '') => {
        switch (filterBtn) {
            case 'All':
                return items;
            case 'Active':
                return items.filter((item) => !item.done);
            case 'Done':
                return items.filter((item) => item.done);
            default:
                return items;
        }
    };

    addItem = (txt) => {
        const newData = this.createItem(txt);
        this.setState(({ data }) => ({ data: [...data, newData] }));
    };

    render() {
        const done = this.state.data.filter((item) => item.done === true);
        const toDo = this.state.data.length - done.length;
        const visibleItems = this.filter(
            this.search(this.state.data, this.state.filterRequest),
            this.state.btnFilter
        );

        return (
            <div className="todo__container">
                <AppHeader toDo={toDo} done={done} />
                <SearchPanel
                    data={this.state.data}
                    searchFunc={this.searchFunc}
                    btnFilterFunc={this.btnFilterFunc}
                />
                <TodoList
                    data={visibleItems}
                    onLabelClick={this.onLabelClick}
                    deleteItem={this.deleteItem}
                    onImporatntBtn={this.onImporatntBtn}
                />
                <AddTodoItem addItem={this.addItem} />
            </div>
        );
    }
}
