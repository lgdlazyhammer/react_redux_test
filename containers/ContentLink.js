import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import Content from '../components/Content'

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

const ContentLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Content)

export default ContentLink
