# Pili Orders API

A small Node.js (Express) order API for the Pili Nut Candies shop. This is the starter app for CS ELEC 2, Task 5.

## Run it

```
npm install
npm start
```

By default the app listens on port 3000. Set `PORT` to change it. Set `SHOP_NAME` to change the name shown on the home route.

## Routes

| Method | Path | What it does |
|---|---|---|
| GET | `/` | Shows the shop name and status |
| GET | `/orders` | Lists all orders |
| POST | `/orders` | Adds an order. Body: `{"item":"Pili Brittle","qty":2}` |

Orders are stored in memory, so they reset when the app restarts.

## Rules

- Never commit AWS keys, tokens, `.pem` files or passwords to this repository.
