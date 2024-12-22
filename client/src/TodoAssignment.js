import React, { useEffect, useState } from 'react';

function TodoAssignment() {
    const [todoId, setTodoId] = useState('');
    const [assigneeId, setAssigneeId] = useState('');
    const [users, setUsers] = useState([]);

    // Fetch users from the server
    useEffect(() => {
        const fetchUsers = async () => {
            let request = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                }
              };
            const response = await fetch(`http://localhost:5000/user`, request);
            const fetchedUsers = await response.json();
            setUsers(fetchedUsers);
        };

        void fetchUsers();
    }, []);

    // Sends a request to the backend to assign user to a todo
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

    // Listens to the select input change and update the assignee accordingly
    const changeAssigne = (event) => {
        setAssigneeId(event.target.value);
      };
    return <>
        <form onSubmit={assignUser}>
            <input
                type="text"
                placeholder="id (int)"
                value={todoId}
                onChange={e => setTodoId(e.target.value)}
            />

            <select value={assigneeId} onChange={changeAssigne}>{
                users.map(user => <option value={user.id}>{user.name}</option>)}
            </select>
            <button type='submit'>Assign user</button>
        </form>
        </>;
}

export default TodoAssignment;