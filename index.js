const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Users Endpoints
app.get('/api/users', (req, res) => {
  res.json([{ id: 1, name: 'John Doe' }]);
});

app.post('/api/users', (req, res) => {
  const { name } = req.body;
  res.json({ id: 2, name });
});

app.put('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  res.json({ id, name });
});

app.delete('/api/users/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `User ${id} deleted` });
});

// Products Endpoints
app.get('/api/products', (req, res) => {
  res.json([{ id: 1, name: 'Laptop' }]);
});

app.post('/api/products', (req, res) => {
  const { name } = req.body;
  res.json({ id: 2, name });
});

app.put('/api/products/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  res.json({ id, name });
});

app.delete('/api/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `Product ${id} deleted` });
});

// Orders Endpoints
app.get('/api/orders', (req, res) => {
  res.json([{ id: 1, product: 'Laptop', user: 'John Doe' }]);
});

app.post('/api/orders', (req, res) => {
  const { product, user } = req.body;
  res.json({ id: 2, product, user });
});

app.put('/api/orders/:id', (req, res) => {
  const { id } = req.params;
  const { product, user } = req.body;
  res.json({ id, product, user });
});

app.delete('/api/orders/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `Order ${id} deleted` });
});

// Reviews Endpoints
app.get('/api/reviews', (req, res) => {
  res.json([{ id: 1, product: 'Laptop', review: 'Great product!' }]);
});

app.post('/api/reviews', (req, res) => {
  const { product, review } = req.body;
  res.json({ id: 2, product, review });
});

app.put('/api/reviews/:id', (req, res) => {
  const { id } = req.params;
  const { product, review } = req.body;
  res.json({ id, product, review });
});

app.delete('/api/reviews/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `Review ${id} deleted` });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
