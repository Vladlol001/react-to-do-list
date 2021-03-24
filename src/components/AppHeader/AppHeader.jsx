const AppHeader = ({ toDo, done }) => {
    return (
        <div className="header">
            <h2 className="todo__title">My Todo List</h2>
            <span className="counter__todo">
                {toDo} more to do, {done.length} done:
            </span>
        </div>
    );
};

export default AppHeader;
