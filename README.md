# Mini Pos

In this project, you can login using username and password. After login, you can select the items fetched from the backend API and order the list. You can see the caculated cost amount for the selected items.

## Features

- Login authentication
- Select the product items
- Caculated cost for the selected items

## Run Locally

Clone the project

```bash
  git clone https://github.com/AungKOO/mini-pos
```

Go to the project directory

```bash
  cd mini-pos
```

Install dependencies

```bash
  npm install
```

Add data queries to mongo db.
Data queries are in the **records** file.

Start the server if data is ready:

```bash
  cd backend
  npm run dev
```

Start the react

```bash
mini-pos$: cd frontend/
frontend$: npm start
```

## API collection

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/18358029-b120211d-688a-443d-9a5b-f45c562315ec?action=collection%2Ffork&collection-url=entityId%3D18358029-b120211d-688a-443d-9a5b-f45c562315ec%26entityType%3Dcollection%26workspaceId%3Dd507b673-ac4f-425f-8545-75ff047ece5b)

## API URLs

**Frontend**

http://localhost:3000

**Backend**

http://localhost:8000
