const TodoListItem = ({
    someText,
    id,
    deleteItem,
    done,
    important,
    onLabelClick,
    onImporatntBtn,
}) => {
    let addClassName = '';
    if (done) addClassName += 'done ';
    if (important) addClassName += ' important ';

    return (
        <li>
            <span className={addClassName} onClick={() => onLabelClick(id)}>
                {someText}
            </span>
            <span className="item__btn">
                <button
                    onClick={() => {
                        deleteItem(id);
                    }}
                    className="delete__btn btn"
                >
                    <i className="fas fa-trash"></i>
                </button>
                <button
                    onClick={() => onImporatntBtn(id)}
                    className="imp__btn btn"
                >
                    <i className="fas fa-exclamation"></i>
                </button>
            </span>
        </li>
    );
};

export default TodoListItem;
