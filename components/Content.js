import React, { PropTypes } from 'react'
import ContentItem from './ContentItem'

const Content = ({ todos, onTodoClick  }) => (
  <div>
    {todos.map(todo =>
      <ContentItem
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </div>
)

Content.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default Content
