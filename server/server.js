const app = require('./server-config.js');
const todoRoutes = require('./server-routes.js');
const userRouter = require('./routes/user-router.js');

const port = process.env.PORT || 5000;

// User routes
app.use('/user', userRouter);

// TODO: the todo routes should be moved under a new subroute called `todo/` and should be moved to a different file similar to users
// Todo routes
app.get('/', todoRoutes.getAllTodos);
app.get('/:id', todoRoutes.getTodo);

app.post('/', todoRoutes.postTodo);
app.patch('/:id', todoRoutes.patchTodo);

app.delete('/', todoRoutes.deleteAllTodos);
app.delete('/:id', todoRoutes.deleteTodo);

// TODO: once we have roles on users, we can have a middleware function that checks if the request sender can assing the task or not
// app.use(middleware);
app.post('/:id/assign-user', todoRoutes.assignUser);
app.post('/:id/unassign-user', todoRoutes.unassignUser);

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => console.log(`Listening on port ${port}`));
}

module.exports = app;