const app = require('./server-config.js');
const routes = require('./server-routes.js');
const userRouter = require('./routes/user-router.js');

const port = process.env.PORT || 5000;

app.use('/user', userRouter);
app.get('/', routes.getAllTodos);
app.get('/:id', routes.getTodo);

app.post('/', routes.postTodo);
app.patch('/:id', routes.patchTodo);

app.delete('/', routes.deleteAllTodos);
app.delete('/:id', routes.deleteTodo);
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => console.log(`Listening on port ${port}`));
}

module.exports = app;