// Pili Nut Candies - order API (CS ELEC 2 lab starter)
// Orders are kept in memory, so they reset when the app restarts.
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
const SHOP_NAME = process.env.SHOP_NAME || 'Pili Nut Candies';

app.use(express.json());

const orders = [
  { id: 1, item: 'Pili Brittle', qty: 2 },
  { id: 2, item: 'Pili Tart', qty: 1 },
];

// Health check / home
app.get('/', (req, res) => {
  res.json({ shop: SHOP_NAME, status: 'online', time: new Date().toISOString() });
});

// List all orders
app.get('/orders', (req, res) => {
  res.json(orders);
});

// Create an order
app.post('/orders', (req, res) => {
  const { item, qty } = req.body || {};
  if (!item || !Number.isInteger(qty) || qty < 1) {
    return res.status(400).json({ error: 'Send JSON like {"item":"Pili Brittle","qty":2}' });
  }
  const order = { id: orders.length + 1, item, qty };
  orders.push(order);
  res.status(201).json(order);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`${SHOP_NAME} API listening on port ${PORT}`);
});
