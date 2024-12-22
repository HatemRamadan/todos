import React, { useState } from 'react';

// TODO: change this to functional component so we can use React hooks (useState, useEffect,...)
function TodoAssignment() {
    const [todoId, setTodoId] = useState('');
    const [assigneeId, setAssigneeId] = useState('');

    const assignUser = async e => {
        e.preventDefault();
        let request = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            }
          };
        // TODO: validate the todo id and the assignee id are not null and are integers
        request.body = JSON.stringify({ assignee_id: assigneeId })
        const response = await fetch(`http://localhost:5000/${todoId}/assign-user`, request);
        
        if (response.status === 200)
            alert('success');
        else 
            alert('failure')
    }
    return <>
        <form onSubmit={assignUser}>
            <input
                type="text"
                placeholder="id (int)"
                value={todoId}
                onChange={e => setTodoId(e.target.value)}
            />

            <input
                type="text"
                placeholder="assignee id (int)"
                value={assigneeId}
                onChange={e => setAssigneeId(e.target.value)}
            />
            <button type='submit'>Assign user</button>
        </form>
        </>;
}

export default TodoAssignment;