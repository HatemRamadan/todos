import React, { Component } from 'react';

// TODO: change this to functional component so we can use React hooks (useState, useEffect,...)
class TodoAssignment extends Component {
    state = {
        todo_id: '',
        assignee_id: '',
        response: [],
      };



    render() {
        const assignUser = async e => {
            e.preventDefault();
            let request = {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                }
              };
            // TODO: validate the todo id and the assignee id are not null and are integers
            request.body = JSON.stringify({ assignee_id: this.state.assignee_id })
            const response = await fetch(`http://localhost:5000/${this.state.todo_id}/assign-user`, request);
            
            if (response.status === 200)
                alert('success');
            else 
                alert('failure')
        }
        const { todo_id, assignee_id } = this.state;
        return<>
        <form onSubmit={assignUser}>
                  <input
            type="text"
            placeholder="id (int)"
            value={todo_id}
            onChange={e => this.setState({ todo_id: e.target.value })}
          />

<input
            type="text"
            placeholder="assignee id (int)"
            value={assignee_id}
            onChange={e => this.setState({ assignee_id: e.target.value })}
          />
          <button type='submit'>Assign user</button>
          </form>
        </>
    }
}

export default TodoAssignment;