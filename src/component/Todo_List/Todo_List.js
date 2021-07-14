import React from 'react';

import TodoListItem from '../TodoListItem/TodoListItem';

import './Todo_List.css';

const TodoList = ({ items, onToggleImportant, onToggleDone, onDelete }) => {
  const elements = items.map(item => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item">
        <TodoListItem
          {...itemProps}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)}
          onDelete={() => onDelete(id)}
        />
      </li>
    );
  });

  return <ul className="todo-list list-group">{elements}</ul>;
};

export default TodoList;
