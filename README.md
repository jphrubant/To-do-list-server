# To-do-list-server
[Deployed app](https://mern-to-do-list.herokuapp.com/)

## Description:
This is a simple 'TO DO' web application built using React and Context API.

## Client/Frontend

### User Stories:
```
- As a user I need to create an account 
- As a user I want to login to view my saved tasks
- As a user I want to create and save a task
- As a user I want to edit a task
- As a user I want to delete a task
- As a user I want to logout
```

### Backlog:
```
- Edit account info
- Delete account
Client/Frontend
- React Router Routes:
- Path: '/' -  component: Home
- Path '/signup' - component: Signup
- Path '/login' - component: Loging
- Path '/add' - component: AddTodo
- Path '/update/:id' - component: UpdateTodo
```

### Components:
```
- AddTodo
- AnnonRoute
- Footer
- Home
- Login
- MyTodos
- Navbar
- PendingTodos
- SignUp
- SolvedTodos
- UpdateTodo
```

### Contexts:
```
authContext:

   - State:
    user,
    todos, 
    isLoggedIn, 
    signupError,
    loginError,
    username,
    password,
    password2,
    axios

  - HandleChange()
  - signup()
  - login()
  - logout()
```
### todoContext:
```
  - State:
    user,
    todos,
    name,
    description,
    pendingToggle,
    solvedToggle,
    updateToggle,
    axios

  - componentDidMount()
  - handleChange()
  - togglePendingFunc()
  - toggleSolvedFun()
  - addTodo()
  - updateTodo()
  - setTask()
  - solveOneTodo()
  - deleteTodo()
```

## Server/Backend

### Models

Todo model:
```
    name: {type: String, required: true},
    description: {type: String, required: true},
    solved: { type: Boolean, default: false},
    createdTimestamp: {type: String},
    solvedTimestamp: {type: String},
    user: [{type: Schema.Types.ObjectId, ref:'User'}]
```
Auth model:
```
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    todo: [{type: Schema.Types.ObjectId, ref:'Todo'}]
```

### Endpoints:
```
GET auth/
POST auth/signup
POST auth/login
POST auth/logout
GET todos/:id
POST todos/
PUT todos/:id
DELETE todos/:id
```
[Deployed app](https://mern-to-do-list.herokuapp.com/)
