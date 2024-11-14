const express = require('express');

const app = express();

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use('/ttt/:id', (req, res, next) => {
  console.log('/ttt - use!!');
  next();
});

app.get('/ttt/:id', (req, res) => {
  console.log('/ttt - get!!');
  const { id } = req.params;
  const name = req.query.name;
  if (!id || !name) {
    res.status(401).send('Input the name, plz...');
    // res.send('OKKK');
    return;
  }
  res.send({ id, name });
});

let users = [{ id: 1, name: 'Hong', email: 'hong@gmail.com' }];

app.post('/users', (req, res) => {
  console.log('>>', req.body);
  const { email, name } = req.body;
  const id = Math.max(...users.map(({ id }) => id), 0) + 1;
  const user = { id, email, name };
  users.push(user);
  console.log('🚀  id:', id, users);
  res.status(200).send(user);
});

app.get('/users', (req, res) => {
  res.send(users);
});

app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  users = [...users.filter(user => user.id !== +id)];
  res.send({ message: 'OK' });
});

const PORT = 7009;
app.listen(PORT, () => {
  console.log(`Server's started on ${PORT}...`);
  console.log('http://localhost:' + PORT + '/ttt/100?name=hong');
});
