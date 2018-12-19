import React from 'react';

import './todo-list-item.css';

const TodoListItem = ({  label,   onDelete }) => {

  return (
    <span>
      <span
        className="todo-list-item-label"
        >{label}</span>
      <button type="button"
              className="btn btn-outline-danger btn-sm float-right"
              onClick={onDelete}>
        <i className="fa fa-trash-o"></i>
      </button>
    </span>
  );
};

export default TodoListItem;
