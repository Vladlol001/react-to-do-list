import TodoListItem from './TodoListItem/TodoListItem';

const TodoList = ({ data = [], deleteItem, onLabelClick, onImporatntBtn }) => {
    const items = data.map((el) => (
        <TodoListItem
            key={el.id}
            {...el}
            onLabelClick={onLabelClick}
            deleteItem={deleteItem}
            onImporatntBtn={onImporatntBtn}
        />
    ));

    return (
        <div className="list__container">
            <ul className="list">{items}</ul>
        </div>
    );
};

export default TodoList;
